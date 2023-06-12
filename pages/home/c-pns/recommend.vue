<template>
	<view class="recommendWrapper">
		<template v-for="(item) in recommend">
			<view class="item" @click="RecommenditemClick(item)">
				<image class="image" :src="item.image" mode="widthFix"></image>
				<text class="text">{{item.title}}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
	defineProps({
		recommend: {
			type: Array,
			default: () => {
				return []
			}
		}
	})
	const emit = defineEmits(['recommendItemClick'])

	function RecommenditemClick(item) {
		emit('recommendItemClick',item.link)
	}
</script>

<style lang="scss">
	.recommendWrapper {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
	}

	.item {
		flex-shrink: 1;
		display: flex;
		flex-direction: column;
		align-items: center;

		.image {
			width: 150rpx;
			height: 150rpx;
		}
	}
</style>