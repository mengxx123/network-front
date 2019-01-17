<template>
    <my-page title="网络" :page="page">
        <app-list :data="groups" />
        <div class="tool-list">
            <div class="mu-paper list-item mu-paper-round mu-paper-1" 
                v-for="app in apps">
                <router-link class="link" :to="app.to">
                    <img :src="app.icon" class="img">
                    <div class="info">
                        <h3 class="text">{{ app.name }}</h3>
                        <div class="desc">{{ app.desc }}</div>
                    </div>
                    <i class="icon icon-heart"></i>
                </router-link>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        // name: '分类',
                        apps: [
                            {
                                name: 'IP 查询',
                                desc: '',
                                icon: '/static/img/ip.svg',
                                to: '/ip'
                            },
                            {
                                name: 'IP 计算器',
                                desc: '',
                                icon: '/static/img/ip.svg',
                                to: '/ip/calculator'
                            },
                            {
                                name: '域名查 IP',
                                desc: '',
                                icon: '/static/img/ip.svg',
                                to: '/domain'
                            },
                            {
                                name: 'IP 转数字',
                                desc: '',
                                icon: '/static/img/ip.svg',
                                to: '/ip_to_number'
                            },
                            {
                                name: 'Ping',
                                desc: '',
                                icon: '/static/img/network_ping.svg',
                                to: '/ping'
                            },
                            {
                                name: '短网址',
                                desc: '',
                                icon: '/static/img/url.svg',
                                to: '/short_url'
                            },
                            {
                                name: '端口扫描',
                                desc: '',
                                icon: '/static/img/port.svg',
                                to: '/port'
                            },
                            {
                                name: 'User Agent 分析',
                                desc: '',
                                icon: '/static/img/user_agent.svg',
                                to: '/userAgent'
                            },
                            {
                                name: 'Cron 表达式验证',
                                desc: '',
                                icon: '/static/img/crontab.svg',
                                to: '/cron/verification'
                            },
                            // {
                            //     name: 'WebSocket 测试',
                            //     desc: '',
                            //     icon: '/static/img/network.svg',
                            //     to: '/websocket'
                            // }
                            {
                                name: 'WebSocket 测试',
                                desc: '',
                                icon: '/static/img/network.svg',
                                to: 'xxx',
                                href: 'http://network-http.yunser.com/websocket',
                                target: '_blank'
                            }
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=network',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=network',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
            init() {
            },
            fileChange(e) {
            },
            sizeStr: function (size) {
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../scss/var';

.tool-list {
    max-width: 840px;
    margin: 0 auto;
    @include clearfix;
    .list-item {
        position: relative;
        float: left;
        width: 260px;
        height: 96px;
        padding: 8px;
        margin: 2px 16px 16px 2px;
        background-color: #fff;
        //border: 1px solid #ccc;
        &:hover {
            background-color: #f9f9f9;
            // box-shadow: 0 3px 10px rgba(0,0,0,.156863), 0 3px 10px rgba(0,0,0,.227451);
            //border-color: #09c;
            .icon {
                display: block;
            }
        }
        &.active {
            border: 1px solid #f00;
        }
    }
    a {
        display: block;
        height: 100%;
        color: #666;
    }
    .img {
        float: left;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        background-color: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
    }
    .info {
        float: left;
    }
    .text {
        font-size: 18px;
        color: #000;
    }
    .header {
        overflow: hidden;
    }
    .desc {
        max-width: 150px;
        margin-top: 8px;
    }
    .icon-heart {
        display: none;
        position: absolute;
        top: 8px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
    .icon-close {
        display: none;
        position: absolute;
        top: 32px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
}
@media all and (max-width: 400px){
    .tool-list {
        .list-item {
            width: 100%;
            margin-right: 0;
        }
    }
}
</style>
