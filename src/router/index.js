import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Ip = resolve => require(['@/views/Ip'], resolve)
const IpCalculator = resolve => require(['@/views/IpCalculator'], resolve)
const Domain = resolve => require(['@/views/Domain'], resolve)
const UserAgent = resolve => require(['@/views/UserAgent'], resolve)
const UserAgentMake = resolve => require(['@/views/UserAgentMake'], resolve)
const UserAgentHelp = resolve => require(['@/views/UserAgentHelp'], resolve)
const Port = resolve => require(['@/views/Port'], resolve)
const PortHelp = resolve => require(['@/views/PortHelp'], resolve)
const CronVerification = resolve => require(['@/views/CronVerification'], resolve)
const Ping = resolve => require(['@/views/Ping'], resolve)
const ShortUrl = resolve => require(['@/views/ShortUrl'], resolve)
const IpToNumber = resolve => require(['@/views/IpToNumber'], resolve)
const IpGenerator = resolve => require(['@/views/IpGenerator'], resolve)
const MacGenerator = resolve => require(['@/views/MacGenerator'], resolve)
const Websocket = resolve => require(['@/views/Websocket'], resolve)
const Ipv6Check = resolve => require(['@/views/Ipv6Check'], resolve)
const Ipv6Range = resolve => require(['@/views/Ipv6Range'], resolve)
const Ipv6Generator = resolve => require(['@/views/Ipv6Generator'], resolve)
const IpConvert = resolve => require(['@/views/IpConvert'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/ip',
        component: Ip
    },
    {
        path: '/ip/check',
        component: Ipv6Check
    },
    {
        path: '/ip/convert',
        component: IpConvert
    },
    {
        path: '/ip/range',
        component: Ipv6Range
    },
    {
        path: '/ipv6/generator',
        component: Ipv6Generator
    },
    {
        path: '/ip/calculator',
        component: IpCalculator
    },
    {
        path: '/domain',
        component: Domain
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
        path: '/userAgent',
        component: UserAgent
    },
    {
        path: '/userAgent/make',
        component: UserAgentMake
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
        path: '/ping',
        component: Ping
    },
    {
        path: '/short_url',
        component: ShortUrl
    },
    {
        path: '/ip_to_number',
        component: IpToNumber
    },
    {
        path: '/ip/generator',
        component: IpGenerator
    },
    {
        path: '/mac/generator',
        component: MacGenerator
    },
    {
        path: '/websocket',
        component: Websocket
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
