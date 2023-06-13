<template>
	<view class="gridItemWrapper" @click="GridItemClick">
		<!-- #ifndef H5 -->
		<image class="image" :lazy-load="true" :src="itemData.showLarge.img" mode="widthFix"></image>
		<!-- #endif -->

		<!-- #ifdef H5 -->
		<img class="image" v-lazy="itemData.showLarge.img">
		<!-- #endif -->
		<view class="goodsInfo">{{itemData.title}}</view>
		<view class="info">
			<text class="price">{{itemData.orgPrice}}</text>
			<image class="favorIcon" src="../../static/images/common/favor.png" mode="widthFix"></image>
			<text class="favor">{{itemData.cfav}}</text>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		itemData: {
			type: Object,
			default: () => {
				return {}
			}
		}
	})
	const emit = defineEmits(["GridItemCLick"])

	function GridItemClick() {
		emit("GridItemCLick",props.itemData)
	}
</script>

<style>
	.gridItemWrapper {
		display: flex;
		align-items: center;
		box-sizing: border-box;
		flex-wrap: nowrap;
		padding: 10rpx;
		flex-direction: column;
	}

	.goodsInfo {
		margin-top: 20rpx;
		width: 320rpx;
		font-size: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.image {
		flex-shrink: 1;
		width: 320rpx;
		border-radius: 25rpx;
	}

	.favorIcon {
		margin: 0 10rpx;
		width: 30rpx;
	}

	.price {
		color: #ff8198;
	}

	.info {
		margin-top: 20rpx;
		display: flex;
		align-items: center;
	}
</style>