import {
	defineStore
} from 'pinia'
import {
	getHomeMutidata
} from '@/service/home.js'

export const useHomeStore = defineStore('home', {
	state: () => {
		return {
			banners: [],
			recommends: []
		}
	},
	actions: {
		async fetchgetHomeMUtidata() {
			const res = await getHomeMutidata()
			this.banners = res.data.banner.list || []
			this.recommends = res.data.recommend.list || []
		}
	}
})