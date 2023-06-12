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
		storeToRefs
	} from 'pinia'
	import banner from './c-pns/banner.vue'
	import recommend from './c-pns/recommend.vue'
	import popular from './c-pns/popular.vue'
	const tabBar = ["流行", "新款", "精选"]
	const homestore = useHomeStore()
	const {
		banners,
		recommends
	} = storeToRefs(homestore)
	onLoad(() => {
		console.log("home")
		homestore.fetchgetHomeMUtidata()
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
		console.log(tabBar[index])
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
</style>