<template>
	<template v-for="(item) in shopdata">
		<itemdetaile :itemdata="item"></itemdetaile>
	</template>
</template>

<script setup>
	import {
		onLoad,
		onReachBottom
	} from '@dcloudio/uni-app'
	import {
		useShopStore
	} from '@/store/shopCart.js'
	import {
		storeToRefs
	} from 'pinia'
	const shopStore = useShopStore()
	const {
		shopdata
	} = storeToRefs(shopStore)
	import itemdetaile from './c-pns/itemdetaile.vue'
	onLoad(() => {
		console.log(shopdata.value)
	})
</script>

<style>

</style>