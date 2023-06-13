import App from './App'
import lazyPlugin from 'vue3-lazy'
import * as Pinia from 'pinia'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia())
	//#ifdef H5
	app.use(lazyPlugin, {
		loading: './static/images/common/placeholder.png'
	})
	// #endif
	return {
		app,
		Pinia
	}
}
// #endif