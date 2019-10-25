<template>
    <my-page title="网络" :page="page">
        <div class="common-container container">
            <app-list :data="groups" />
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                groups: [
                    {
                        name: 'IP 端口',
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
                                name: 'IP 生成',
                                desc: '',
                                icon: '/static/img/ip.svg',
                                to: '/ip/generator'
                            },
                            {
                                name: 'MAC 地址生成',
                                desc: '',
                                icon: '/static/img/ip.svg',
                                to: '/mac/generator'
                            },
                            {
                                name: 'Ping',
                                desc: '',
                                icon: '/static/img/network_ping.svg',
                                to: '/ping'
                            },
                            {
                                name: '端口扫描',
                                desc: '',
                                icon: '/static/img/port.svg',
                                to: '/port'
                            },
                        ]
                    },
                    {
                        name: 'User Agent',
                        apps: [
                            {
                                name: 'User Agent',
                                desc: '',
                                icon: '/static/img/user_agent.svg',
                                to: '/userAgent'
                            },
                            {
                                name: 'User Agent 生成',
                                desc: '',
                                icon: '/static/img/user_agent.svg',
                                to: '/userAgent/make'
                            },
                        ]
                    },
                    {
                        name: '其他',
                        apps: [

                            {
                                name: '短网址',
                                desc: '',
                                icon: '/static/img/url.svg',
                                to: '/short_url'
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

</style>
