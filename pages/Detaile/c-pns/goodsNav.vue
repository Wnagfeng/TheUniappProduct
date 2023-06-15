<template>
	<view class="wrapper" @click="goodsNavClick">
		<view class="inner">
			<view class="service">
				<image class="image" src="@/static/images/GoodsNavbar/service.png" mode="widthFix"></image>
				<text>客服</text>
			</view>
			<view class="shop">
				<image class="image" src="@/static/images/GoodsNavbar/shop.png" mode="widthFix"></image>
				<text>店铺</text>
			</view>
			<view class="favor">
				<image class="image" src="@/static/images/GoodsNavbar/favor.png" mode="widthFix"></image>
				<text>收藏</text>
			</view>
		</view>
		<view class="right">
			<view class="inShopCart">加入购物车</view>
			<view class="play">PLAY!</view>
		</view>
	</view>
</template>


<script setup>
	const emit = defineEmits(['goodsNavClick'])

	function goodsNavClick() {
		emit('goodsNavClick')
	}
</script>
<style lang="scss">
	.wrapper {
		z-index: 10000;
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		width: 100%;
		padding-bottom: 20rpx;
		padding-top: 20rpx;
		align-items: center;
	}

	.inner {
		display: flex;
		flex: 1;
		justify-content: space-between;
	}

	.service {
		margin-left: 30rpx;
		display: flex;
		align-items: center;
		flex-direction: column;

		.image {
			width: 44rpx;
			height: 44rpx;
		}
	}

	.shop {
		display: flex;
		align-items: center;
		flex-direction: column;

		.image {
			width: 44rpx;
			height: 44rpx;
		}
	}

	.favor {
		align-items: center;
		display: flex;
		flex-direction: column;
		margin-right: 20rpx;

		.image {
			width: 44rpx;
			height: 44rpx;
		}
	}

	.inShopCart {
		text-align: center;
		line-height: 100rpx;
		width: 70%;
		height: 100rpx;
		background-color: green;
	}

	.play {
		text-align: center;
		line-height: 100rpx;
		width: 30%;
		height: 100rpx;
		background-color: pink;
		margin-right: 20rpx;
	}

	.right {
		flex: 1;
		display: flex;
	}
</style>