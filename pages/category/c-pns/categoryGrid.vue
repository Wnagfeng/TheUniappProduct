<template>
	<template v-if="props.itemdata.key">
		<view class="wrapper">
			<uni-grid :column="3" border-color="#fff">
				<template v-for="(item,index) in props.itemdata.data.list" :key="index">
					<uni-grid-item class="inner">
						<view class="item">
							<image class="image" :src="item.image" mode=""></image>
							<view class="text">
								{{item.title}}
							</view>
						</view>
					</uni-grid-item>
				</template>
			</uni-grid>
			<view class="select">
				<selectTabBar :tabBar="tabBar" @itemClik='handelitemClik'></selectTabBar>
			</view>
			<view class="gridWrapper">
				<uni-grid :column="2" border-color="#fff" :square="false">
					<template v-for="(item,index) in currentListDetaile" :key="item.iid">
						<uni-grid-item :index="index">
							<GridItem :itemdata="item" @GridItemCLick="handelGridItemCLick"></GridItem>
						</uni-grid-item>

					</template>
				</uni-grid>
			</view>
		</view>
	</template>


</template>

<script setup>
	import {
		useCategoryStore
	} from '@/store/category.js'
	const categorey = useCategoryStore()
	import {
		storeToRefs
	} from 'pinia'
	const {
		currentListDetaile
	} = storeToRefs(categorey)
	import selectTabBar from '@/components/selectTabBar/selectTabBar.vue'
	import GridItem from './GridItem.vue'
	const tabBar = ["流行", "新款", "精选"]
	const props = defineProps({
		itemdata: {
			type: Object,
			default: () => {
				return {}
			}
		}
	})
	const emit = defineEmits(['itemClcik'])

	function handelitemClik(index) {
		categorey.changetypeIndex(index)
		emit('itemClcik', index)
	}

	function handelGridItemCLick() {

	}
</script>

<style>
	.wrapper {
		width: 80%;
		float: right;
		margin-top: 20rpx;
		box-sizing: border-box;
		padding-bottom: 180rpx;
	}

	.inner {
		display: inline-block;
		margin-top: 20rpx;
	}

	.item {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.image {
		width: 150rpx;
		height: 150rpx;
	}

	.select {
		width: 100%;
		margin-top: 30rpx;
	}
	.gridWrapper{
		width: 100%;
	}
</style>