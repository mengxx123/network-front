<template>
    <my-page title="新浪短网址" :page="page">
        <div>
            <ui-text-field v-model="domain" label="网址" hintText="" />
            <br>
        </div>
        <div class="btns">
            <ui-raised-button class="btn" label="获取短网址" primary @click="query" />
            <ui-raised-button class="btn" label="短网址还原" secondary @click="back" />
        </div>
        <div class="loading" v-if="loading">加载中...</div>
        <div class="result" v-if="!loading && detail">
            {{ detail }}
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
                        // {
                        //     type: 'icon',
                        //     icon: 'help',
                        //     to: '/domain/help'
                        // }
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
                this.$http.get('/shortUrl?url=' + domain).then(
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
            back() {
                if (!this.domain) {
                    this.$message({
                        type: 'danger',
                        text: '请输入域名或 IP'
                    })
                    return
                }

                this.loading = true
                this.$http.get('/longUrl?url=' + this.domain).then(
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
                        text: '请输入域名或 IP'
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
    .btns {
        .btn {
            margin-right: 8px;
        }
    }
</style>
