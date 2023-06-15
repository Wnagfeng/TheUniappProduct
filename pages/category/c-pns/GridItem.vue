<template>
	<view class="wrapper">
		<view class="cover">
			<image class="image" :src="props.itemdata.img" mode="widthFix"></image>
		</view>
		<view class="inner">
			<text class="text">{{props.itemdata.title}}</text>
			<view class="info">
				<view class="orgPrice">
					${{props.itemdata.orgPrice}}
				</view>
				<view class="favor">
					<image class="favorIcon" src="@/static/images/common/favor.png" mode="widthFix"></image>
					<text class="cfav">{{props.itemdata.cfav}}</text>
				</view>
			</view>
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
	.wrapper {
		width: 100% !important;
		padding-top: 60rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		margin-left: 30rpx;
		margin-top: 0 !important;
		padding-bottom: 0 !important;
		margin-left: 0 !important;
		overflow: hidden;
		display: flex;
		flex-direction: column
	}

	.cover {
		width: 100%;
	}

	.favorIcon {
		width: 30rpx;
		height: 30rpx;
	}

	.image {
		border-radius: 20rpx;
		width: 100%;
	}

	.text {
		display: inline-block;
		width: 100%;
		font-size: 20rpx;
		white-space: nowrap !important;
		overflow: hidden !important;
		text-overflow: ellipsis !important;
	}

	.inner {
		width: 100%;
	}

	.info {
		display: flex;
		align-items: center;
		justify-content: space-between ;
	}

	.favor {
		margin-right: 20rpx;
		display: flex;
		align-items: center;
	}

	.orgPrice {
		margin-right: 20rpx;
	}
</style>