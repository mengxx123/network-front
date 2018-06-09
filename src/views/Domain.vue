<template>
    <my-page title="域名查 IP" :page="page">
        <div>
            <ui-text-field v-model="domain" label="域名" hintText="xxx.com" />
            <br>
            <ui-raised-button label="查询" primary @click="query" />
        </div>
        <div class="loading" v-if="loading">记载中...</div>
        <div class="result" v-if="!loading && detail">
            <div>IP：{{ detail }}</div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                domain: '',
                detail: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/domain/help'
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
                let data = this.$route.query.data
                if (data) {
                    this.domain = data
                    this.query()
                }
            },
            getDetail(domain) {
                this.loading = true
                this.$http.get('https://phpapi.yunser.com/host.php?host=' + domain).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.detail = data
                        this.loading = false
                    },
                    response => {
                        console.log(response)
                        this.loading = false
                    })
            },
            query() {
                if (!this.domain) {
                    this.$message({
                        type: 'danger',
                        text: '请输入域名'
                    })
                    return
                }
                this.getDetail(this.domain)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loading {
        margin-top: 16px;
    }
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
