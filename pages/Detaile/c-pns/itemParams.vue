<template>
	<view class="wrapper">
		<view class="inner">

			<template v-for="(item) in props.itemdata.itemParams.rule.tables[0]">
				<view class="row">
					<template v-for="(iten) in item">
						<view class="text">{{iten}}</view>
					</template>
				</view>
			</template>
			<template v-for="(item) in props.itemdata.itemParams.info.set">
				<view class="row1">
					<view class="key">{{item.key}}</view>
					<view class="value">{{item.value}}</view>
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

<style lang="scss">
	.wrapper {
		background-color: #fff;
		padding: 40rpx;
		padding-top: 80rpx;
		padding-bottom: 150rpx;
	}

	.row {
		display: flex;
		padding-bottom: 20rpx;
		flex-wrap: wrap;
		padding-top: 20rpx;
		justify-content: space-between;
		border-bottom: 1px solid #999;
	}

	.row1 {
		display: flex;
		padding-bottom: 20rpx;
		padding-top: 20rpx;
		border-bottom: 1px solid #999;
		align-items: center;
		.value {
			margin-left: 26%;
			color: #ff8198;
		}
	}
</style>