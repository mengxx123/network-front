<template>
    <my-page title="端口扫描">
        <div id="input-box" class="row">
            <div class="col-md-6 col-sm-12">
                <div>
                    <ui-text-field v-model="domain" label="扫描网站域名或 IP：" labelFloat/>
                </div>
                <div>
                    <ui-text-field v-model="port" label="扫描端口（以英文逗号,分割）：" multiLine :rows="4" labelFloat/>
                </div>
                <div>
                    <ui-raised-button label="开始扫描" primary @click="scan" />（速度比较慢，请耐心等待）
                </div>
                <div>
                    <table class="table table-bordered">
                        <tr>
                            <th>端口</th>
                            <th>服务</th>
                            <th>响应</th>
                            <th>状态</th>
                        </tr>
                        <tr v-for="port in result.ports">
                            <td>{{ port.port }}</td>
                            <td>{{ port.service }}</td>
                            <td>{{ port.time ? port.time + 'ms' : '' }}</td>
                            <td>{{ port.opened ? '开放' : '关闭' }}</td>
                        </tr>
                    </table>
                    <div v-if="result.ports.length">扫描 {{ domain }} 端口共 {{ result.number }} 个, 耗时 {{ result.time }} 毫秒!</div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">

            </div>
        </div>
        <ui-article class="article">
            <h2>工具介绍</h2>
            <p>当前主要功能: 端口扫描 网络扫描 检查内部IP地址，在xss攻击中，为了更深一步探测信息，可以尝试着获取一下内网IP段，然后进行端口扫描。当然，神马中间人攻击、跳板exp的这里就不说了。</p>

            <h2>相关知识</h2>
            <p>对于自己的VPS服务器，检查端口开放情况非常有必要，端口是黑客攻入服务器的第一步，不同的端口对应不同的应用程序，不同的应用程序有不同的漏洞。</p>
            <p>总体来说，开放的端口越多，黑客攻入的机会越多，VPS服务器也越不安全，因此使用本工具检查之后，可以使用iptables关闭不使用的端口，保证安全。</p>

            <h3>常见端口号表</h3>
            <table class="table table-bordered">
                <tr>
                    <th>端口</th>
                    <th>服务：描述</th>
                </tr>
                <tr v-for="port in ports">
                    <td>{{ port.port }}</td>
                    <td>
                        <ul v-for="service in port.services">
                            <li>{{ service.name }}：{{ service.desc }}</li>
                        </ul>
                    </td>
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
                result: {
                    time: 0,
                    ports: []
                },
                ports: [
                    {
                        port: 21,
                        services: [
                            {
                                name: 'FTP',
                                desc: 'File Transfer Protocol（文件传输协议）'
                            }
                        ]
                    },
                    {
                        port: 22,
                        services: [
                            {
                                name: 'SSH',
                                desc: 'Secure Shell（远程登录协议）'
                            }
                        ]
                    },
                    {
                        port: 23,
                        services: [
                            {
                                name: 'Telnet',
                                desc: '远程登录'
                            },
                            {
                                name: 'TTS',
                                desc: 'Tiny Telnet Server'
                            }
                        ]
                    },
                    {
                        port: 25,
                        services: [
                            {
                                name: 'SMTP',
                                desc: '电子邮件'
                            }
                        ]
                    },
                    {
                        port: 37,
                        services: [
                            {
                                name: 'Time',
                                desc: 'Time时间协议'
                            },
                            {
                                name: 'ADM worm',
                                desc: ''
                            }
                        ]
                    },
                    {
                        port: 80,
                        services: [
                            {
                                name: 'HTTP',
                                desc: '超文本传输协议'
                            }
                        ]
                    },
                    {
                        port: 109,
                        services: [
                            {
                                name: 'POP2',
                                desc: '邮件相关协议'
                            }
                        ]
                    },
                    {
                        port: 110,
                        services: [
                            {
                                name: 'PO3',
                                desc: '电子邮件相关协议'
                            }
                        ]
                    },
                    {
                        port: 443,
                        services: [
                            {
                                name: 'HTTPS',
                                desc: '安全的超文本传输协议'
                            }
                        ]
                    },
                    {
                        port: 990,
                        services: [
                            {
                                name: 'SSL加密',
                                desc: ''
                            }
                        ]
                    },
                    {
                        port: 993,
                        services: [
                            {
                                name: 'IMAP',
                                desc: '邮箱相关协议'
                            }
                        ]
                    },
                    {
                        port: 1080,
                        services: [
                            {
                                name: 'Microsoft SQL',
                                desc: 'Microsoft SQL 服务'
                            }
                        ]
                    },
                    {
                        port: 1433,
                        services: [
                            {
                                name: 'SOCKS',
                                desc: 'Squid HTTP 代理服务器'
                            }
                        ]
                    },
                    {
                        port: 3306,
                        services: [
                            {
                                name: 'MySQL',
                                desc: 'MySQL 数据库'
                            }
                        ]
                    },
                    {
                        port: 3128,
                        services: [
                            {
                                name: 'Squid',
                                desc: 'Squid HTTP 代理服务器'
                            }
                        ]
                    },
                    {
                        port: 8080,
                        services: [
                            {
                                name: 'WWW',
                                desc: 'WWW 代理'
                            }
                        ]
                    }
                ]
            }
        },
        mounted() {
            this.$http.get('/version').then(
                response => {
                    let data = response.data
                    if (data.code === 200) {
                        console.log(data)
                        this.version = data.data
                    }
                },
                response => {
                    console.log(response)
                })
//            this.$http.post('/example', this.$qs.stringify({
//                param1: 'value1',
//                param2: 'value2'
//            })).then(
//                response => {
//                    let data = response.data
//                    if (data.code === 200) {
//                        console.log(data.data)
//                    }
//                },
//                response => {
//                    console.log(response)
//                })
        },
        methods: {
            scan: function () {
                this.$http.get('http://tool2.yunser.com/demo/port.php?port=' + this.port + '&domain=' + this.domain).then(function (response) {
                    let json = JSON.parse(response.body)
                    this.result.ports = json.data
                    this.result.time = json.time
                    this.result.number = json.number
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
