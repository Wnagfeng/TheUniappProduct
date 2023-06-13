<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="wrapper">
		<template v-for="(item) in props.banner">
			<swiper-item class="imgitem">
				<view class="swiper-item">
					<image class="image" :src="item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</template>
	</swiper>
</template>

<script setup>
	const props = defineProps({
		banner: {
			type: Array,
			default: () => {
				return []
			}
		}
	})
	console.log(props.banner)
</script>
<style>
	.image{
		width: 100%;
	}
	.wrapper{
		width: 100%;
		height: 600rpx;
	}
</style>