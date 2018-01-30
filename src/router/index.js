import Vue from 'vue'
import Router from 'vue-router'

const Ip = resolve => require(['@/views/Ip'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Port = resolve => require(['@/views/Port'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Ip
    },
    {
        path: '/port',
        component: Port
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
