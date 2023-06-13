<template>
	<!-- 轮播图组件 -->
	<banner :banners="banners" @bannerItemCLick='handelbannerItemCLick'></banner>
	<view class="HomeWrapper">
		<!-- 推荐栏组件 -->
		<recommend :recommend="recommends" @recommendItemClick="handelrecommendItemClick"></recommend>
		<!-- 本周推荐 -->
		<view class="header">
			本周推荐
		</view>
		<recommend :recommend="recommends" @recommendItemClick="handelrecommendItemClick"></recommend>
		<recommend :recommend="recommends" @recommendItemClick="handelrecommendItemClick"></recommend>
		<!-- 多选卡 -->
		<selectTabBar :tabBar='tabBar' @itemClik='handelitemClik'></selectTabBar>
		<!-- 多选卡内容 -->
		<view class="gridWrapper">
			<uni-grid :column="2" border-color="#fff" :square="false">
				<template v-for="(item,index) in goodsList[currentType].list" :key="item.iid">
					<uni-grid-item :index="index">
						<HomeGridItem :itemData="item" @GridItemCLick="handelGridItemCLick"></HomeGridItem>
					</uni-grid-item>

				</template>
			</uni-grid>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onReachBottom
	} from '@dcloudio/uni-app'
	import {
		useHomeStore,
		typs
	} from '@/store/homeStore.js'
	import {
		storeToRefs
	} from 'pinia'
	import banner from './c-pns/banner.vue'
	import recommend from './c-pns/recommend.vue'
	import popular from './c-pns/popular.vue'
	const tabBar = ["流行", "新款", "精选"]
	const homestore = useHomeStore()
	const {
		banners,
		recommends,
		goodsList,
		currentType
	} = storeToRefs(homestore)
	onLoad(() => {
		console.log("home")
		homestore.fetchgetHomeMUtidata()
		homestore.fetchgetHomeData('pop', 1)
		homestore.fetchgetHomeData('new', 1)
		homestore.fetchgetHomeData('sell', 1)
	})
	onReachBottom(() => {
		homestore.fetchgetHomeData(currentType.value, goodsList.value[currentType.value].page + 1)
	})

	function handelbannerItemCLick(event) {
		wx.navigateTo({
			url: '/pages/home/c-page/bannerDetaile/bannerDetaile?link=' + event
		})
	}

	function handelrecommendItemClick(event) {
		wx.navigateTo({
			url: '/pages/home/c-page/bannerDetaile/bannerDetaile?link=' + event
		})
	}

	function handelitemClik(index) {
		homestore.setcurrentType(typs[index])
	}

	function handelGridItemCLick(data) {
		uni.navigateTo({
			url: '/pages/Detaile/Detaile?iid=' + data.iid
		})
		console.log('Grid点击了', data.iid)
	}
</script>

<style>
	.HomeWrapper {
		padding: 30rpx;
	}

	.header {
		width: 100%;
		height: 50rpx;
		text-align: center;
		font-weight: 700;
		margin-top: 20rpx;
		line-height: 50rpx;
	}

	.gridWrapper {
		margin-top: 60rpx;
	}
</style>