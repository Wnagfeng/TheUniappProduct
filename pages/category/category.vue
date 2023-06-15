<template>
	<view class="wrapper">
		<leftNav :itemdata="list" @navLClick="handelnavLClick"></leftNav>
		<categoreGrid :itemdata="subcategorydata" @itemClcik="handelitemClcik"></categoreGrid>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		useCategoryStore
	} from '@/store/category.js'
	import {
		storeToRefs
	} from 'pinia'
	import leftNav from './c-pns/leftNav.vue'
	import categoreGrid from './c-pns/categoryGrid.vue'
	const categoryStore = useCategoryStore()
	let miniWallkey = 0
	const {
		list,
		subcategorydata,
		types
	} = storeToRefs(categoryStore)


	onLoad(() => {
		categoryStore.fetchgetcategoryData()
		handelnavLClick({
			maitKey: 3627,
			miniWallkey: 10062603
		})
	})



	function handelnavLClick(data) {
		// 拿到传递过来的id去获取新的二级菜单数据
		categoryStore.fetchgetsubcategorydata(data.maitKey)
		// 请求到数据以后这个是我们当前需要展示的数据把他维护到store中
		categoryStore.changeCurrentList(data)
		handelitemClcik()
	}

	function handelitemClcik() {
		// 根据拿到的index去匹配不同的类型去请求数据
		categoryStore.fetchgetsubcategoryDetailedata()
	}
</script>

<style lang="scss">

</style>