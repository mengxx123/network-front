import Vue from 'vue'
import Router from 'vue-router'

const Ip = resolve => require(['@/views/Ip'], resolve)
const IpHelp = resolve => require(['@/views/IpHelp'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const UserAgent = resolve => require(['@/views/UserAgent'], resolve)
const UserAgentHelp = resolve => require(['@/views/UserAgentHelp'], resolve)
const Port = resolve => require(['@/views/Port'], resolve)
const PortHelp = resolve => require(['@/views/PortHelp'], resolve)
const CronVerification = resolve => require(['@/views/CronVerification'], resolve)
const CronVerificationHelp = resolve => require(['@/views/CronVerificationHelp'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Ip
    },
    {
        path: '/ip/help',
        component: IpHelp
    },
    {
        path: '/port',
        component: Port
    },
    {
        path: '/port/help',
        component: PortHelp
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/userAgent',
        component: UserAgent
    },
    {
        path: '/userAgent/help',
        component: UserAgentHelp
    },
    {
        path: '/cron/verification',
        component: CronVerification
    },
    {
        path: '/cron/verification/help',
        component: CronVerificationHelp
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
