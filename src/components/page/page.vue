<template>
    <ui-page :title="title || page.title" ref="page" :page="page" :backable="backable">
        <div slot="drawer">
            <ui-appbar title=""></ui-appbar>
            <ui-list @itemClick="toggle()">
                <ui-list-item title="IP 查询" to="/">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="IP 计算器" to="/ip/calculator">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="域名查 IP" to="/domain">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="在线 ping" to="/ping">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-divider />
                <ui-list-item title="短网址" to="/short_url">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="端口扫描" to="/port">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="User Agent 分析" to="/userAgent">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="Cron 表达式验证" to="/cron/verification">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="关于" href="http://about.yunser.com/" target="_blank">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
            </ui-list>
        </div>
        <slot></slot>
    </ui-page>
</template>

<script>
    export default {
        data() {
            return {
                embed: false,
                open: false,
                docked: true
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: 'default'
            },
            page: {
                type: Object,
                default: function () {
                    return {
                        title: '云设'
                    }
                }
            },
            backable: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.embed = this.$route.query.embed || false
        },
        methods: {
            toggle() {
                console.log(this.$refs.page)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ui-page {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .page-body {
        min-height: 500px;
    }
    .container-main {
        padding-top: 16px;
    }
    .page-content {
        position: absolute;
        top: 0;
        left: 256px;
        right: 0;
        bottom: 0;
    }
    .page-container {
        padding: 16px;
    }
    .admin-container {
        padding: 16px;
    }
</style>
