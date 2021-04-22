import Vue from 'vue'
import VueRouter from 'vue-router'
 
import example from "../components/ExampleComponent"
import user from "../components/user/ContainerComponent"
Vue.use(VueRouter)
 
const routes = [
    {
        component: example,
        name: "example", 
        path: "/example"
    },
    {
        component: user,
        name: "user", 
        path: "/user"
    },
]
 
export default new VueRouter({
    routes
});
 