<template>
    <my-page title="域名查 IP">
        <div>
            <ui-text-field v-model="domain" label="域名" hintText="输入域名" />
            <br>
            <ui-raised-button label="查询" primary @click="query" />
        </div>
        <div class="result" v-if="detail">
            <div>IP：{{ detail }}</div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                domain: 'yunser.com',
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
                this.query()
            },
            getDetail(domain) {
                this.$http.get('http://php.api.yunser.com/host.php?host=' + domain).then(
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
                this.getDetail(this.domain)
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
