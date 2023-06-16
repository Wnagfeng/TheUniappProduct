import {
	defineStore
} from 'pinia'

export const useShopStore = defineStore('Shop', {
	state: () => {
		return {
			shopdata: []
		}
	},
	actions: {
		addshopData(data) {
			console.log("点击了购物车存储的数据为:", data)
			const newData = [...this.shopdata, data]
			this.shopdata = newData
		}
	}

})