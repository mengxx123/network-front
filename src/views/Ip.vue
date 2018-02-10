<template>
    <my-page title="IP 查询" :page="page">
        <div class="card">
            你的 IP： <span class="strong">{{ ip }}</span>
        </div>
        <div>
            <ui-text-field v-model="ip" label="IP 地址" hintText="输入 IP 地址" />
            <br>
            <ui-raised-button label="查询" primary @click="query" />
        </div>
        <div class="result" v-if="detail">
            <div>所在地区：{{ detail.country }} {{ detail.region }} {{ detail.city }}</div>
            <div>{{ detail.isp }}</div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                ip: '加载中...',
                detail: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/ip/help'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.$http.get('http://tool2.yunser.com/demo/ip.php').then(
                    response => {
                        let data = response.data
                        this.ip = data
                        this.getDetail(this.ip)
                    },
                    response => {
                        console.log(response)
                    })
            },
            getDetail(ip) {
                this.$http.get('http://node.api.yunser.com/ip?ip=' + ip).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.detail = data
                    },
                    response => {
                        console.log(response)
                    })
            },
            query() {
                this.getDetail(this.ip)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        width: 320px;
        margin-bottom: 16px;
        padding: 16px;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        .strong {
            color: #ff4081;
            font-size: 24px;
        }
    }
    .result {
        margin-top: 16px;
    }
</style>
