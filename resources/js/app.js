window.Vue = require('vue');

import Vuex from 'vuex'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
});

const store = new Vuex.Store();

Vue.component('app', require('./components/app/App').default);

const app = new Vue({
    el: '#app',
    store,
    router,
});