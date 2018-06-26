
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import store from "./store";
import fn from "@/static/common"	//公共方法
import '../static/css/reset.css'
import '../static/font-awesome/css/font-awesome.min.css'

Vue.prototype.$fn = fn;
Vue.config.productionTip = true		//关闭生产模式下给出的提示
Vue.config.silent = true;		//关闭警告

import Vuex from 'vuex'
Vue.use(Vuex)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App },
	created(){
		router.beforeEach((to, from, next) => {
			// 路由变换后，滚动至顶
		    window.scrollTo(0, 0)
		    next()
		});	
	}
})


