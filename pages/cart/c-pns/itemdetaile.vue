<template>
	<view class="cartWrapper">
		<image class="image" :src="props.itemdata.itemInfo.topImages[0]" mode="widthFix"></image>
		<view class="info">
			<view class="title">
				{{props.itemdata.skuInfo.title}}
			</view>
			<view class="desc">
				商品描述:{{props.itemdata.skuInfo.title}}
			</view>
			<view class="price">${{props.itemdata.itemInfo.lowPrice}}</view>
		</view>
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

<style lang="scss">
	.cartWrapper {
		box-sizing: border-box;
		margin-top: 30rpx;
		padding: 40rpx;
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #999;

	}

	.image {
		margin-right: 40rpx;
		width: 25%;
		border-radius: 20rpx;
	}

	.info {
		box-sizing: border-box;
	
		width: 75%;
		flex: 1;

		.title {
			font-size: 40rpx;
			height: 45rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.desc {
			font-size: 30rpx;
			color: #999;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
			height: 45rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.price{
			color: red;
			font-size: 45rpx;
		}
	}
</style>