import Vue from 'vue';
import Vuex from 'vuex';
import nav from './modules/nav';
import login from './modules/login';
import financingManage from './modules/financingManage'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {},
    modules: {
        nav: nav,
        login: login,
        financingManage: financingManage,
    },
    mutations: {},
    actions: {},
    getters: {}
});

export default store;
