<template>
	<view class="Wrapper">
		<view class="title">
			{{props.itemdata.skuInfo?.title}}
		</view>
		<view class="price">
			<view class="priceRange">
				{{props.itemdata.skuInfo?.priceRange}}
			</view>
			<view class="oldprice">
				${{props.itemdata.itemInfo?.lowPrice}}
			</view>
			<view class="discountDesc">
				{{props.itemdata.itemInfo?.discountDesc}}
			</view>
		</view>
		<view class="columns">
			<template v-if="props.itemdata.columns">
				<text>{{props.itemdata.columns[0]}}</text>
				<text>{{props.itemdata.columns[1]}}</text>
				<text>{{props.itemdata.shopInfo?.services[props.itemdata.shopInfo.services.length-1].name}}</text>
			</template>
		</view>
		<view class="services">
			<template v-if="props.itemdata.shopInfo">
				<view class="inner">
					<template v-if="props.itemdata.shopInfo?.services[0].icon">
						<view class="icon">
							<image class="image" :src="props.itemdata.shopInfo?.services[0].icon" mode="widthFix">
							</image>
						</view>
					</template>
					<view class="name">
						{{props.itemdata.shopInfo?.services[0].name}}
					</view>

					<template v-if="props.itemdata.shopInfo?.services[1].icon">
						<view class="icon">
							<image class="image" :src="props.itemdata.shopInfo?.services[1].icon" mode="widthFix">
							</image>
						</view>
					</template>
					<view class="name">
						{{props.itemdata.shopInfo?.services[1].name}}
					</view>

					<template v-if="props.itemdata.shopInfo?.services[2].icon">
						<view class="icon">
							<image class="image" :src="props.itemdata.shopInfo?.services[2].icon" mode="widthFix">
							</image>
						</view>
					</template>
					<view class="name">
						{{props.itemdata.shopInfo?.services[2].name}}
					</view>

					<template v-if="props.itemdata.shopInfo?.services[3].icon">
						<view class="icon">
							<image class="image" :src="props.itemdata.shopInfo?.services[3].icon" mode="widthFix">
							</image>
						</view>
					</template>
					<view class="name">
						{{props.itemdata.shopInfo?.services[3].name}}
					</view>
				</view>
			</template>
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
	.Wrapper {
		margin-top: 20rpx;
		background-color: #fff;
		padding: 20rpx;
	}

	.priceRange {
		font-size: 40rpx;
		color: #ff8198;
		font-weight: 800;
	}

	.price {
		margin-top: 30rpx;
		position: absolute;
		display: flex;
	}

	.oldprice {
		margin-left: 20rpx;
		color: #999;
	}

	.discountDesc {
		position: relative;
		color: #fff;
		padding: 2rpx 10rpx;
		background-color: #ff8198;
		border-radius: 20rpx;
		top: -25rpx;
		left: 10rpx;

	}

	.columns {
		font-size: 30rpx;
		margin-top: 110rpx;
		display: flex;
		justify-content: space-between;
		color: #999;
		padding-bottom: 10rpx;
		border-bottom: 1px solid #999;
	}

	.icon {
		margin-top: -10rpx;
		width: 28rpx;
		height: 28rpx;
	}

	.image {
		width: 100%;
	}

	.services {
		
		padding: 20rpx;
		display: flex;

	}

	.inner {
		background-color: #ff8198;
		padding: 20rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.inner{
		/* margin-left: 10rpx; */
	}
	.name {
		font-size: 20rpx;
	}
</style>