import hyrequest from './index.js'
export const  getHomeMutidata = () => {
	return hyrequest.get('/home/multidata', {})
}