<template>
    <my-page title="IP 查询" :page="page">
        <div class="card">
            本机 IP： <span class="strong">{{ ip }}</span>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                ip: '加载中...',
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
                    },
                    response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        width: 320px;
        padding: 16px;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        .strong {
            color: #ff4081;
            font-size: 24px;
        }
    }
</style>
