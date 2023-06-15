import {
	defineStore
} from 'pinia'
import {
	getHomeMutidata,
	getHomeData,
	gethomedetaileData,
	getHomeRecommenDara
} from '@/service/home.js'
export const typs = ["pop", "sell", "new"]
// 定义一个函数用于生成指定的数据结构
function createGoodsListdata() {
	// 创建一个对象
	let goodsListOrangin = {}
	typs.forEach((item) => {
		goodsListOrangin[item] = {
			page: 0,
			list: []
		}
	})
	return goodsListOrangin
}
export const useHomeStore = defineStore('home', {
	state: () => {
		return {
			banners: [],
			recommends: [],
			goodsList: createGoodsListdata(),
			currentType: "pop",
			currentGoodsData: {},
			DetaileBanners: [],
			RecommendList: []
		}
	},
	actions: {
		async fetchgetHomeMUtidata() {
			const res = await getHomeMutidata()
			this.banners = res.data.banner.list || []
			this.recommends = res.data.recommend.list || []
		},

		async fetchgetHomeData(type, page) {
			const res = await getHomeData(type, page)
			// 根据不同的type来存储不同的数据
			this.goodsList[type].list.push(...res.data.list)
			this.goodsList[type].page = page
		},
		setcurrentType(type) {
			this.currentType = type
		},
		async fetchgethomeDetaileData(iid) {
			const res = await gethomedetaileData(iid)
			this.currentGoodsData = res.result
			this.DetaileBanners = res.result.itemInfo.topImages
		},
		async fetchgetHomerecommendData() {
			const res = await getHomeRecommenDara()
			this.RecommendList = res.data.list
		}
	}
})