<template>
	<view class="wrapper">
		<view class="top">
			<text>用户评价</text>
			<text>更多 ></text>
		</view>
		<view class="info">
			<template v-for="(item) in props.itemdata.rate.list">
				<view class="userinfo">
					<view class="cover">
						<image class="image" :src="item.user.avatar" mode=""></image>
					</view>
					<view class="name">
						<text>{{item.user.uname}}</text>
					</view>
				</view>
				<view class="content">
					<text>{{item.content}}</text>
				</view>
				<div class="rateinfo">
					<view class="data">{{ showDate(item.created)}}</view>
					<view class="style">{{item.style}}</view>
				</div>
			</template>

		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		formatDate
	} from '@/utils/common.js'
	import {
		computed
	} from 'vue'
	const props = defineProps({
		itemdata: {
			type: Object,
			default: () => {
				return {}
			}
		},
		recommendData: {
			type: Object,
			default: () => {
				return {}
			}
		}
	})

	const showDate = computed(() => {
		return (value) => {
			let date = new Date(value * 1000);
			return formatDate(date, 'yyyy-MM-dd')
		}
	})
</script>

<style lang="scss">
	.wrapper {
		background-color: #fff;
		padding: 40rpx;
		padding-top: 80rpx;
		padding-bottom: 50rpx;
		border-bottom: 1px solid #999;
	}

	.top {
		display: flex;
		justify-content: space-between;
		padding-top: 40rpx;
		padding-bottom: 40rpx;
		border-bottom: 1px solid #999;
	}

	.info {
		margin-top: 40rpx;
	}

	.image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.userinfo {
		display: flex;
		align-items: center;
	}

	.name {
		margin-left: 40rpx;
	}

	.rateinfo {
		margin-top: 20rpx;
		display: flex;
	}

	.style {
		margin-left: 20rpx;
	}

	.content {
		margin-top: 20rpx;
	}
</style>