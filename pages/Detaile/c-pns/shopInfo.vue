<template>
	<view class="ShopinfoWrapper">
		<template v-if="props.itemdata.shopInfo">
			<view class="top">
				<image class="image" :src="props.itemdata.shopInfo.shopLogo" mode="widthFix"></image>
				<text class="name">{{props.itemdata.shopInfo.name}}</text>
			</view>

			<view class="shopinfo">
				<view class="goodsinfo">
					<view class="Cellsinner">
						<text class="cCells">{{ formateNumber(props.itemdata.shopInfo.cSells) }}</text>
						<text class="text">总销量</text>
					</view>

					<view class="Goodsinner">
						<text class="cGoods">{{props.itemdata.shopInfo.cGoods}}</text>
						<text class="text">全部宝贝</text>
					</view>
				</view>

				<view class="Shopinfoscore">
					<template v-for="(item) in props.itemdata.shopInfo.score ">
						<view class="info">
							<view class="name">
								{{item.name}}
							</view>
							<view :class="['score',item.isBetter?'active':'noactive']">
								{{item.score}}
							</view>
							<!-- 高低的图标根据返回的数据进行动态展示 -->

							<template v-if="item.isBetter">
								<text class="isbetter">高</text>
							</template>

							<template v-else>
								<text class="nobetter">低</text>
							</template>
						</view>
					</template>
				</view>
			</view>

			<button type="default" class="input">进店逛逛</button>
		</template>
	</view>
</template>

<script setup>
	import {
		computed
	} from 'vue'
	const props = defineProps({
		itemdata: {
			type: Object,
			default: () => {
				return {}
			}
		}
	})
	const formateNumber = computed(() => {
		return (number) => {
			if (number < 10000) return number;
			return (number / 10000).toFixed(1) + '万'
		}
	})
</script>

<style>
	.ShopinfoWrapper {
		width: 100%;
		margin-top: 20rpx;
		padding: 20rpx;
		background-color: #fff;
	}

	.top {
		padding: 30rpx;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.image {
		width: 80rpx;
		height: 80rpx;
	}

	.name {
		margin-left: 20rpx;
	}

	.goodsinfo {
		margin-top: 20rpx;
		margin-left: 10rpx;
		padding: 20rpx;
		display: flex;
	}

	.Cellsinner {

		padding: 0 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.Goodsinner {
		padding: 0 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-right: 1px solid #999;
	}

	.text {
		font-size: 20rpx;
	}

	.cCells {
		font-size: 35rpx;
	}

	.cGoods {
		font-size: 35rpx;
	}

	.active {
		color: red;
	}

	.noactive {
		color: green;
	}

	.isbetter {
		margin-left: 20rpx;
		width: 35rpx;
		background-color: red;
		padding: 5prx;
	}

	.nobetter {
		margin-left: 20rpx;
		width: 35rpx;
		background-color: green;
		padding: 5prx;
	}

	.Shopinfoscore {

		display: flex;
		flex-direction: column;

	}

	.info {
		margin-top: 10rpx;
		display: flex;
		justify-content: space-between;
	}

	.shopinfo {

		display: flex;
	}

	.score {
		margin-left: 20rpx;
	}
	.input{
		margin-top: 20rpx;
		width: 300rpx;
		border-radius: 20rpx;
		background-color: #999;
	}
</style>