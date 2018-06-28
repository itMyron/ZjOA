import Vue from 'vue';
import Vuex from 'vuex';
import nav from './modules/nav';
import login from './modules/login';
import message from './modules/message'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {},
    modules: {
        nav: nav,
        login: login,
        message: message,
    },
    mutations: {},
    actions: {},
    getters: {}
});

export default store;
