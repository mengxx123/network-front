<template>
    <my-page title="Ping" :page="page">
        <div class="common-container container">
            <div>
                <ui-text-field v-model="domain" label="域名或 IP" hintText="" />
                <br>
                <ui-raised-button label="ping" primary @click="query" />
            </div>
            <div class="loading" v-if="loading">加载中...</div>
            <div class="result" v-if="!loading && detail">
                <ul class="result-list" v-for="item, index in detail">
                    <li class="item">
                        <ui-badge class="badge" :content="'' + (index + 1)" />
                        <span class="time" v-if="item.alive">
                            {{ item.time }}ms
                        </span>
                        <ui-icon class="icon success" value="check_circle" v-if="item.alive" />
                        <ui-icon class="icon error" value="cancel" v-else />
                        <!-- <span v-if="item.alive === true">ping 成功</span> -->
                        <!-- <span v-if="item.alive === false">ping 失败</span> -->
                    </li> 
                </ul>
                <div class="tip">服务器节点：广东深圳（阿里云）</div>
            </div>
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
                // detail: [{"alive":true,"time":297},{"alive":true,"time":56},{"alive":true,"time":65}],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/7487d6c00d8d11e9b4c16f0404983c51',
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
                this.$http.get('/ping?host=' + domain).then(
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
    .result-list {
        .item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
        }
        .badge {
            margin-right: 8px;
        }
        .time {
            margin-right: 8px;
        }
        .icon {
            font-size: 16px;
        }
        .success {
            color: #34a853;
        }
        .error {
            color: #ea4335;
        }
    }
    .tip {
        margin-top: 16px;
        color: #999;
    }
</style>
