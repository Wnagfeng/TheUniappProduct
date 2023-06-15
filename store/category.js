import {
	defineStore
} from 'pinia'
import {
	getcategoryData,
	getsubcategorydata,
	getsubcategoryDetailedata
} from '@/service/category.js'
export const useCategoryStore = defineStore('category', {
	state: () => {
		return {
			list: [],
			subcategorydata: {},
			types: ['pop', 'new', 'sell'],
			typeIndex: 0,
			currentList: {},
			currentListDetaile: []
		}
	},
	actions: {
		async fetchgetcategoryData() {
			const res = await getcategoryData()
			this.list = res.data.category.list
			this.currentList = res.data.category.list[0]
		},
		async fetchgetsubcategorydata(maitKey) {
			const res = await getsubcategorydata(maitKey)
			this.subcategorydata = res
		},
		async fetchgetsubcategoryDetailedata(miniWallkey) {
			const res = await getsubcategoryDetailedata(this.currentList.miniWallkey, this.types[this
				.typeIndex])
			this.currentListDetaile = res
		},
		changetypeIndex(inex) {
			console.log(inex)
			this.typeIndex = inex
		},
		changeCurrentList(data) {
			this.currentList = data
		}
	}
})