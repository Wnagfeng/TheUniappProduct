<template>
	<view class="detaileWrapper">
		<!-- 顶部导航条 -->
		<view class="topbar">
			<topNavbar @itemCLick="handelitemCLick"></topNavbar>
		</view>
		<!-- 商品展示 -->
		<template v-if="currentPageindex===0">
			<template v-if="currentGoodsData.skuInfo">
				<!-- 轮播图组件 -->
				<banner :banner="DetaileBanners" class="banner"></banner>
				<!-- 商品详情 -->
				<goodsinfoDetaile :itemdata="currentGoodsData"></goodsinfoDetaile>
				<!-- 商家详情 -->
				<ShopInfo :itemdata="currentGoodsData"></ShopInfo>
				<!-- 最后一个商品详情 -->
				<Skuinfo :itemdata="currentGoodsData"></Skuinfo>
				<!-- 穿着效果 -->
				<detaileInfo :itemdata="currentGoodsData"></detaileInfo>
			</template>
		</template>
		<!-- 参数展示 -->
		<template v-else-if="currentPageindex===1">
			<itemParams :itemdata="currentGoodsData"></itemParams>
		</template>
		<!-- 评论展示 -->
		<template v-else-if="currentPageindex===2">
			<rate :itemdata="currentGoodsData"></rate>
		</template>
		<!-- 推荐展示 -->
		<template v-else-if="currentPageindex===3">
			<recommenList :Recommenddata="RecommendList"></recommenList>
		</template>
		<!-- 购物车组件 -->
		<goodsNav @goodsNavClick="handelgoodsNavClick"></goodsNav>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		useHomeStore
	} from '@/store/homeStore.js'
	import {
		useShopStore
	} from '@/store/shopCart.js'
	import {
		storeToRefs
	} from 'pinia'
	import {
		ref
	} from 'vue'
	import topNavbar from './c-pns/top-nav-bar.vue'
	import banner from './c-pns/banner.vue'
	import goodsinfoDetaile from './c-pns/goodsInfoDetaile.vue'
	import ShopInfo from './c-pns/shopInfo.vue'
	import Skuinfo from './c-pns/skuInfo.vue'
	import detaileInfo from './c-pns/detailInfo.vue'
	import goodsNav from './c-pns/goodsNav.vue'
	import itemParams from './c-pns/itemParams.vue'
	import rate from './c-pns/rate.vue'
	import recommenList from './c-pns/recommendList.vue'
	const homestore = useHomeStore()
	const shopstore = useShopStore()
	const currentPageindex = ref(0)
	const {
		currentGoodsData,
		DetaileBanners,
		RecommendList
	} = storeToRefs(homestore)

	const props = defineProps({
		iid: {
			type: String,
			default: ''
		}
	})
	onLoad(() => {
		homestore.fetchgethomeDetaileData(props.iid)
		homestore.fetchgetHomerecommendData()
	})

	function handelitemCLick(index) {
		// 动态展示数据根据该index进行展示
		console.log("导航栏点击了", index)
		currentPageindex.value = index
	}

	function handelgoodsNavClick() {
		const goodsData=currentGoodsData.value
		shopstore.addshopData(goodsData)
	}
</script>

<style lang="scss">
	.topbar {
		width: 100%;
	}

	.detaileWrapper {
		background-color: #999;
	}

	.banner {
		margin-top: 88rpx;
	}
</style>