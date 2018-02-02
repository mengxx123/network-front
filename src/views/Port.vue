<template>
    <my-page title="端口扫描" :page="page">
        <div>
            <ui-text-field v-model="domain" label="扫描网站域名或 IP：" labelFloat/>
        </div>
        <div>
            <ui-text-field v-model="port" label="扫描端口（以英文逗号,分割）：" multiLine :rows="4" labelFloat/>
        </div>
        <div>
            <ui-raised-button label="开始扫描" primary @click="scan" />（速度比较慢，请耐心等待）
        </div>
        <ui-article v-if="result">
            <h2>扫描结果</h2>
            <p v-if="result.data.length">扫描 {{ domain }} 端口共 {{ result.number }} 个, 耗时 {{ result.time }} 毫秒!</p>
            <table>
                <tr>
                    <th>端口</th>
                    <th>服务</th>
                    <th>响应</th>
                    <th>状态</th>
                </tr>
                <tr v-for="port in result.data">
                    <td>{{ port.port }}</td>
                    <td>{{ port.service }}</td>
                    <td>{{ port.time ? port.time + 'ms' : '' }}</td>
                    <td>{{ port.opened ? '开放' : '关闭' }}</td>
                </tr>
            </table>
        </ui-article>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                port: ' 80,8080,3128,8081,9080,1080,21,23,443,69,22,25,110,7001,9090,3389,1521,1158,2100,1433,3306',
                domain: 'www.baidu.com',
                result: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/port/help'
                        }
                    ]
                }
            }
        },
        mounted() {

        },
        methods: {
            scan: function () {
                let url = 'http://tool2.yunser.com/demo/port.php?port=' + this.port + '&domain=' + this.domain
                this.$http.get(url).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.result = data
                    },
                    response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style scoped>
    .domain {
        display: inline-block;
        width: 160px;
    }
</style>
