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
			const newData = [...this.shopdata, data]
			this.shopdata = data
		}
	}

})