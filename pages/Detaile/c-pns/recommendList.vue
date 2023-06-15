<template>
	<view class="gridWrapper">
		<uni-grid :column="2" border-color="#fff" :square="false">
			<template v-for="(item,index) in props.Recommenddata" :key="item.iid">
				<uni-grid-item :index="index">
					<view class="inner">
						<view class="imageWrapper">
							<image class="image" :src="item.image" mode="widthFix"></image>
						</view>
						<view class="title">{{item.title}}</view>
						<view class="info">
							<text class="price">${{item.price}}</text>
						     <view class="icon">
						     	<image class="favorIcon" src="@/static/images/common/favor.png" mode="widthFix"></image>
						     	<text class="favor">{{item.cfav}}</text>
						     </view>
						</view>
					</view>
				</uni-grid-item>
			</template>
		</uni-grid>
	</view>
</template>

<script setup>
	const props = defineProps({
		Recommenddata: {
			type: Array,
			default: () => {
				return []
			}
		}
	})
</script>

<style lang="scss">
	.gridWrapper {
		background-color: #fff;
		padding-top: 80rpx;
		padding-bottom: 170rpx;

	}
	.imageWrapper{
		width:100prx;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.image{
		width: 100%;
	}
	.inner{
		box-sizing: border-box;
		padding: 20rpx;
		width: 100%;
	}
	.favorIcon{
		width: 30rpx;
		height: 30rpx;
	}
	.info{
		margin-top: 10rpx;
		font-size: 24rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.title{
		margin-top: 20rpx;
		width: 320rpx;
		font-size: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.icon{
		display: flex;
		align-items: center;
	}
</style>