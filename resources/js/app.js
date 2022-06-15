import './bootstrap';

import Vue from "vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";

import router from "./Router/index";
import store from "./Store/index";
import App from "./App.vue";

Vue.use(Vuelidate)
Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App }
});
