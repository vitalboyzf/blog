import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/right-page/home/Home";
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: () => import('../views/right-page/About')
    },
    {
        path: '/map',
        component: () => import('../views/right-page/Map')
    },
    {
        path: '/message',
        component: () => import('../views/right-page/message/Message')
    },
    {
        path:'/article/:id',
        component: ()=>import('../views/right-page/Article')
    }
]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active-class',
    linkExactActiveClass: 'exact-active-class',
    routes
})

export default router
