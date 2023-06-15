import hyrequest from './index.js'
export function getcategoryData() {
	return hyrequest.get("/category", {})
}
export function getsubcategorydata(maitKey) {
	return hyrequest.get("/subcategory", {
		maitKey
	})
}
export function getsubcategoryDetailedata(miniWallkey, type) {
	return hyrequest.get('/subcategory/detail', {
		miniWallkey,
		type
	})
}