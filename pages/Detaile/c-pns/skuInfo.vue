<template>
	<view class="descWrapper">
		<view class="desc">
			<view class="start"></view>
			<view class="skuInfo">
				{{props.itemdata.skuInfo.title}}
			</view>
			<view class="end"></view>
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

<style>
	.descWrapper{
		width: 100%;
		padding-top: 20rpx;
	}
	.skuInfo {
		background-color: #fff;
		padding: 30rpx;
	}

	.desc {
		background-color: #fff;
		padding: 20rpx;
		position: absolute;
	}

	.start {
		width: 180rpx;
		height: 2rpx;
		background-color: black;
		float: left;
		top: 0;
		position: relative;
	}

	.start::before {
		position: relative;
		top: -10rpx;
		content: '';
		display: block;
		width: 10rpx;
		height: 10rpx;
		background-color: black;
	}

	.end {
		position: relative;
		width: 180rpx;
		height: 2rpx;
		background-color: black;
		float: right;
	}

	.end::before {
		position: relative;
		top: -10rpx;
		right: -170rpx;
		content: '';
		display: block;
		width: 10rpx;
		height: 10rpx;
		background-color: black;
	}
</style>