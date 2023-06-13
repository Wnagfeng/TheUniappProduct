import hyrequest from './index.js'
export const getHomeMutidata = () => {
	return hyrequest.get('/home/multidata', {})
}
export const getHomeData = (type = 'pop', page = 1) => {
	return hyrequest.get('/home/data', {
		type,
		page
	})
}
export const gethomedetaileData = (iid) => {
	return hyrequest.get('/detail', {
		iid
	})
}