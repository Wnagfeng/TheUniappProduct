<template>
	<view class="wrapper">
		<template v-for="(item,index) in props.itemdata" :key="item.maitKey">
			<view :class="['title',currentNavINdex===index? 'active' :'']" @click="navclick(item,index)" >
				{{item.title}}
			</view>
		</template>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const props = defineProps({
		itemdata: {
			type: Array,
			default: () => {
				return []
			}
		}
	})
	const emit = defineEmits(['navLClick'])
	const currentNavINdex = ref(0)

	function navclick(item, index) {
		emit('navLClick', item)
		currentNavINdex.value = index
	}
	function itemCick(item){
		
	}
</script>

<style lang="scss">
	.wrapper {

		position: fixed;
		width: 20%;
		float: left;
		height: 100%;
		overflow: scroll;
		box-sizing: border-box;
		padding-bottom: 280rpx;
		scrollbar-width: none;
		-ms-overflow-style: none;
		::-webkit-scrollbar {
			display: none;
		}

		.tab-menu-scroll {
			height: 100%;
		}
	}

	.title {
		// width: 100%;
		line-height: 120rpx;
		text-align: center;
		height: 120rpx;
		background-color: $uni-bg-color-grey;
	}

	.active {
		color: red;
		background-color: #fff;
		border-left: 8rpx solid #ff8198;
	}
</style>