<template>
	<view class="navbarWrapper">
		<view class="topbar">
			<template v-for="(item,index) in tabbar" :key="item.id">
				<view :class="['title',currentIndex===index? 'active':'']" @click="itemClick(index)">{{item.title}}
				</view>
			</template>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	defineProps({
		tabbar: {
			type: Array,
			default: () => {
				return [{
						title: "商品",
						id: 0
					},
					{
						title: "参数",
						id: 1
					},
					{
						title: "评论",
						id: 2
					},
					{
						title: "推荐",
						id: 3
					}
				]
			}
		}
	})
	const emit = defineEmits(['itemCLick'])
	const currentIndex = ref(0)

	function itemClick(index) {
		currentIndex.value=index
		emit("itemCLick", index)
	}
</script>

<style>
	.navbarWrapper {
		background-color: aliceblue;
		width: 100%;
	}

	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title {
		padding: 20rpx 40rpx;
	}
	.active{
		font-weight: 800;
		color: #ff8198;
	}
</style>