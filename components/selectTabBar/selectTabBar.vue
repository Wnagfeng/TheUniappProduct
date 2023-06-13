<template>
	<view class="TabWrapper">
		<template v-for="(item,index) in tabBar" :key="index">
			<view class="textWrapper" @click="ItemCLick(index)">
				<text :class="['text',selectindex===index ? 'active' :'']">{{item}}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	defineProps({
		tabBar: {
			tyep: Array,
			default: () => {
				return []
			}
		}
	})
	const selectindex = ref(0)
	const emit = defineEmits(['itemClik'])

	function ItemCLick(index) {
		selectindex.value=index
		emit('itemClik', index)
	}
</script>

<style lang="scss">
	.TabWrapper {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.textWrapper {
		text-align: center;
		flex: 1;
	}

	.text {
		padding: 20rpx 30rpx;
		text-align: center;
	}

	.active {
		color: #ff8198;
		border-bottom: 2px solid #ff8198;
	}
</style>