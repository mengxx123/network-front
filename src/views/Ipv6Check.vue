<template>
    <my-page title="IPv6 地址校验" :page="page">
        <div class="common-container container">
            <div>
                <textarea class="textarea" v-model="ip" rows="6" wrap="off" placeholder="IPv6"></textarea>
                <!-- <ui-text-field v-model="ip" label="ip" hintText="" /> -->
                <br>
                <ui-raised-button label="校验" primary @click="check" />
            </div>
            <!-- <div class="loading" v-if="loading">加载中...</div> -->
            <div class="result" v-if="result">
                <result :text="result" />
            </div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    const Address6 = require('ip-address').Address6

    export default {
        data () {
            return {
                loading: false,
                ip: '',
                result: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/3a1ffa80113311ea8210f36f0efe8dc6',
                            target: '_blank'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
            // this.debug()
        },
        methods: {
            debug() {
                this.ip = '2001:0:ce49:7601:e866:efff:62c3:fffe'
            },
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
            check() {
                if (!this.ip) {
                    this.$message({
                        type: 'danger',
                        text: '请输入 IPv6'
                    })
                    return
                }
                let address = new Address6(this.ip)
                let isValid = address.isValid()
                this.result = isValid ? '校验通过' : '校验不通过'
                // this.getDetail(this.domain)
            }
        }
    }
</script>

<style lang="scss" scoped>
    textarea.textarea {
        height: auto;
    }
    .textarea {
        display: block;
        width: 100%;
        /* max-width: 400px; */
        height: 400px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42;
        color: #55595c;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 2px;
        outline: none;
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
</style>
