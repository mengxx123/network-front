<template>
    <my-page title="短网址" :page="page">
        <div>
            <ui-text-field v-model="domain" label="网址" hintText="" />
            <br>
            <div class="radio-list">
                <ui-radio class="radio" v-model="type" label="新浪短网址" name="group" nativeValue="sina" />
                <ui-radio class="radio" v-model="type" label="MRW短网址" name="group" nativeValue="mrw" />
            </div>
        </div>
        <div class="btns">
            <ui-raised-button class="btn" label="转换" primary @click="convert" />
            <!-- <ui-raised-button class="btn" label="获取短网址" primary @click="query" /> -->
            <!-- <ui-raised-button class="btn" label="短网址还原" secondary @click="back" /> -->
        </div>
        <div class="loading" v-if="loading">加载中...</div>
        <div class="result" v-if="!loading && detail">
            <result :text="detail" :copyable="true" />
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                type: 'sina',
                loading: false,
                domain: '',
                detail: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/75c38dc05c9611e89cbc311ca74b260f',
                            target: '_blank'
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
                let url = this.type === 'sina' ? ('/shortUrl?url=' + encodeURIComponent(domain)) : ('https://mrw.so/api.php?url=' + encodeURIComponent(domain))
                this.$http.get(url).then(
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
            convert() {
                if (!this.domain) {
                    this.$message({
                        type: 'danger',
                        text: '请输入网址'
                    })
                    return
                }
                if (this.domain.indexOf('t.cn') !== -1 || this.domain.indexOf('mrw.so') !== -1) {
                    this.back()
                } else {
                    this.query()
                }
            },
            back() {
                if (!this.domain) {
                    this.$message({
                        type: 'danger',
                        text: '请输入短网址'
                    })
                    return
                }

                this.loading = true
                // let url = this.type === 'sina' ? '' : ''
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
                        text: '请输入网址'
                    })
                    return
                }
                this.getDetail(this.domain)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .radio-list {
        margin-bottom: 16px;
        .radio {
            margin-right: 16px;
        }
    }
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
