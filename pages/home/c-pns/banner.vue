<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="banner">
		<template v-for="(item) in banners" :key="item">
			<swiper-item class="item" @click="banneritemClick(item)">
				<image class="image" :src="item.image" mode="widthFix"></image>
			</swiper-item>
		</template>

	</swiper>
</template>

<script setup>
	const props = defineProps({
		banners: {
			type: Array,
			default: () => {
				return []
			}
		}
	})
	// 当用户点击了以后需要派发一个时间拿到link放到其他页面进行展示
	const emit= defineEmits(['bannerItemCLick'])
	function banneritemClick(item){
		emit('bannerItemCLick',item.link)
	}
</script>

<style lang="scss">
	.banner {
		width: 100%;
		height: 300rpx;
		.image {
			width: 100%;
			height: 100%;
		}
	}
</style>