<template>
	<view class="detaileWrapper">
		<!-- 顶部导航条 -->
		<view class="topbar">
			<topNavbar @itemCLick="handelitemCLick"></topNavbar>
		</view>
		<!-- 轮播图组件 -->
		<banner :banner="DetaileBanners"></banner>
		<!-- 商品详情 -->
		<goodsinfoDetaile :itemdata="currentGoodsData"></goodsinfoDetaile>
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
	import topNavbar from './c-pns/top-nav-bar.vue'
	import banner from './c-pns/banner.vue'
	import goodsinfoDetaile from './c-pns/goodsInfoDetaile.vue'
	const homestore = useHomeStore()

	const {
		currentGoodsData,
		DetaileBanners
	} = storeToRefs(homestore)
	const props = defineProps({
		iid: {
			type: String,
			default: ''
		}
	})
	onLoad(() => {
		homestore.fetchgethomeDetaileData(props.iid)
	})

	function handelitemCLick(index) {
		console.log("导航栏点击了", index)
	}
</script>

<style>
	/* 	.topbar {
		position: fixed;
		top: 88rpx;
	} */
	.detaileWrapper{
		background-color: #999;
	}
</style>