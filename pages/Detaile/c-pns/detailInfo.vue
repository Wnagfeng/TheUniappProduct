<template>
	<view class="Wrapper">
		<template v-if="props.itemdata.detailInfo">
			<view class="title">{{props.itemdata.detailInfo.detailImage[0].key}}</view>
			<template v-for="(item) in props.itemdata.detailInfo.detailImage[0].list">
				<view class="imageWrapper">
					<image  class="image" :src="item" mode="widthFix"></image>
				</view>
			</template>
		</template>
	</view>
</template>

<script setup>
	const props = defineProps({
		itemdata: {
			type: Object,
			default: () => {
				return {}
			}
		}
	})
</script>

<style>
	.Wrapper {
		padding: 20rpx;
		margin-top: 227rpx;
		background-color: #fff;
	}
	.imageWrapper{
		width: 100%;
	}
	.image{
		width: 100%;
	}
</style>