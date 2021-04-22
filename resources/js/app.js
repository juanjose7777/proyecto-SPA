require('./bootstrap');

window.Vue = require('vue');
import Vuetify from "../plugins/vuetify"
import store from "./store"
import router from "./router"
import axios from "axios"

axios.defaults.baseURL = "http://localhost/softwaredos/public/api/"
 
Vue.component('home-component', require('./components/homeComponent.vue').default);
Vue.component('login-component', require('./components/LoginComponent.vue').default);
Vue.component('Example-component', require('./components/ExampleComponent.vue').default);




const app = new Vue({
    el: '#app',
    vuetify: Vuetify,
    store,
    router
});
