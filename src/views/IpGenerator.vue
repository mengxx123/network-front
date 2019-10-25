<template>
    <my-page title="IP 生成" :page="page">
        <div class="common-container container">
            <div>
                <ui-text-field v-model="number" label="数量" hintText="1" />
                <br>
                <div class="label">限制</div>
                <ui-text-field class="simple" v-model="a" label="" hintText="" /> .
                <ui-text-field class="simple" v-model="b" label="" hintText="" /> .
                <ui-text-field class="simple" v-model="c" label="" hintText="" /> .
                <ui-text-field class="simple" v-model="d" label="" hintText="" />
                <br>
                <ui-raised-button label="生成" primary @click="make" />
            </div>
            <div class="loading" v-if="loading">加载中...</div>
            <div class="result" v-if="!loading && detail">
                <result :text="detail" :copyable="true" />
                <!-- <div>{{ detail }}</div> -->
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                number: 10,
                a: '',
                b: '',
                c: '',
                d: '',
                loading: false,
                ip: '',
                detail: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/da2e2d60f70411e9844f19f557118874',
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
            make() {
                // if (!this.ip) {
                //     this.$message({
                //         type: 'danger',
                //         text: '请输入 IP'
                //     })
                //     return
                // }
                let number = this.number || 10
                let results = []
                function random(min, max) {
                    return Math.floor(min + Math.random() * (max - min))
                }
                for (let i = 0; i < number; i++) {
                    let a
                    if (this.a) {
                        a = this.a
                    } else {
                        a = random(1, 255)
                    }
                    let b = this.b || random(1, 255)
                    let c = this.c || random(1, 255)
                    let d = this.d || random(1, 255)
                    results.push(`${a}.${b}.${c}.${d}`)
                }
                this.detail = results.join('\n')
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
    .label {
        color: rgba(0,0,0,.54);
        font-size: 12px;
    }
    .simple {
        width: 55px;
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
