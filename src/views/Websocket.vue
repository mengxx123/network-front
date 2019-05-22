<template>
    <my-page title="WebSocket 测试" :page="page">
        <div class="common-container container">
            <ui-text-field class="url" v-model="url" label="WebSocket 地址" hintText="" />
            <div class="btns">
                <ui-raised-button class="btn" label="连接" primary @click="open" />
                <ui-raised-button class="btn" label="关闭" secondary @click="close" />
            </div>
            <textarea class="form-control result" v-model="result" rows="6" wrap="off" placeholder="结果"></textarea>
            <div class="search-box">
                <input class="input" v-model="text" placeholder="要发送的文本">
                <ui-icon-button class="icon" icon="send" @click="send" />
            </div>
            <!-- <div class="loading" v-if="loading">加载中...</div> -->
        </div>
    </my-page>
</template>

<script>
    const moment = window.moment

    export default {
        data () {
            return {
                loadingState: 'unload',
                url: 'ws://123.207.167.163:9010/ajaxchattest',
                result: '',
                text: '',
                userIp: '加载中...',
                ip: '',
                isLinked: false,
                detail: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/d10e5cc00d8d11e9b4c16f0404983c51',
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
            },
            open(ip) {
                // this.loading = true
                if (!this.url) {
                    this.$message({
                        text: '请输入地址'
                    })
                    return
                }
                this.socket = new WebSocket(this.url)
                this.socket.onopen = e => {
                    console.log('onopen')
                    this.addResult('连接成功，现在你可以发送信息啦！！！')
                    this.isLinked = true
                }
                this.socket.onmessage = e => {
                    console.log('onmessage', e)
                    this.addResult('收到消息：' + e.data)
                }
                this.socket.onerror = e => {
                    console.log('onerror')
                    this.isLinked = false
                }
                this.socket.onclose = e => {
                    console.log('onclose')
                    this.addResult('websocket连接已断开!!!')
                    this.isLinked = false
                }
            },
            send() {
                if (!this.isLinked) {
                    this.$message({
                        type: 'danger',
                        // text: 'WebSocket 还没有连接，或者连接失败，请检测'
                        text: 'WebSocket 没有连接'
                    })
                    return
                }
                if (!this.text) {
                    this.$message({
                        text: '请输入地址要发送的文本'
                    })
                    return
                }
                // WebSocket 已经关闭，请重新连接
                this.socket.send(this.text)
                this.addResult('发送：' + this.text)
                this.text = ''
            },
            addResult(text) {
                let time = moment().format('YYYY-MM-DD HH:mm:ss')
                this.result = `[${time}] ${text}\n` + this.result
            },
            close() {
                if (this.socket) {
                    this.socket.close()
                    this.$message({
                        text: '已关闭'
                    })
                } else {
                    this.$message({
                        text: '没有连接的 WebSocket'
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .url {
        width: 100%;
    }
    .btns {
        margin-bottom: 16px;
        .btn {
            margin-right: 8px;
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
    .form-control {
        display: block;
        width: 100%;
        // max-width: 400px;
        height: 320px;
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
    .result {
        // width: 100%;
        margin-bottom: 16px;
        overflow-x: auto;
    }
    .search-box {
        display: flex;
        height: 48px;
        margin-bottom: 16px;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        .input {
            height: 48px;
            padding-left: 16px;
            flex-grow: 1;
            border: none;
            outline: none;
        }
    }
    .container {
        max-width: 1024px;
    }
</style>
