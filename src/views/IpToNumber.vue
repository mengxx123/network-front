<template>
    <my-page title="IP 转数字" :page="page">
        <div>
            <ui-text-field v-model="ip" label="IP" hintText="" />
            <br>
            <ui-raised-button label="转换" primary @click="convert" />
        </div>
        <div class="loading" v-if="loading">加载中...</div>
        <div class="result" v-if="!loading && detail">
            <result :text="detail" :copyable="true" />
            <!-- <div>{{ detail }}</div> -->
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                ip: '',
                detail: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/4494bdb00d8911e9b4c16f0404983c51',
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
                    this.ip = data
                    this.convert()
                }
                // this.convert()
            },
            convert() {
                if (!this.ip) {
                    this.$message({
                        type: 'danger',
                        text: '请输入 IP'
                    })
                    return
                }
                this.detail = this.ip2long(this.ip)
            },
            ip2long(ip) {
                var num = 0
                ip = ip.split('.')
                num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3])
                num = num >>> 0
                if (num === '0') {
                    this.$message({
                        type: 'danger',
                        text: '请输入正确的 IP'
                    })
                    return
                }
                return num
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
