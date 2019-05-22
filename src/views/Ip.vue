<template>
    <my-page title="IP 查询" :page="page">
        <div class="common-container container">
            <div class="card">
                <result title="你的 IP" :text="userIp" :copyable="true" />
            </div>
            <div>
                <ui-text-field v-model="ip" label="IP 地址" hintText="输入 IP 地址" />
                <br>
                <ui-raised-button label="查询" primary @click="query" />
            </div>
            <div class="loading" v-if="loading">加载中...</div>
            <div class="result" v-if="!loading && detail">
                <div>所在地区：{{ detail.country }} {{ detail.region }} {{ detail.city }}</div>
                <div>{{ detail.isp }}</div>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                userIp: '加载中...',
                ip: '',
                detail: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/b8a33ab05c5911e888a50737631f72f2',
                            target: '_blank'
                        }
                    ]
                }
            }
        },
        mounted() {
            let data = this.$route.query.data
            if (data) {
                this.ip = data
                this.getDetail()
            }
            this.init()
        },
        methods: {
            init() {
                this.$http.get('https://phpapi.yunser.com/ip.php').then(
                    response => {
                        let data = response.data
                        if (!this.ip) {
                            this.ip = data
                        }
                        this.userIp = data
                        this.getDetail(this.ip)
                    },
                    response => {
                        console.log(response)
                    })
            },
            getDetail(ip) {
                this.loading = true
                this.$http.get('https://nodeapi.yunser.com/ip?ip=' + ip).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.loading = false
                        this.detail = data
                    },
                    response => {
                        this.loading = false
                        console.log(response)
                    })
            },
            query() {
                if (!this.ip) {
                    this.$message({
                        text: '请输入 IP'
                    })
                    return
                }
                this.getDetail(this.ip)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loading {
        margin-top: 16px;
    }
    .card {
        margin-bottom: 16px;
        // padding: 16px;
        // box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        // .strong {
        //     color: #ff4081;
        //     font-size: 24px;
        // }
    }
    .result {
        margin-top: 16px;
    }
</style>
