<template>
    <my-page title="端口扫描 - 帮助" backable>
        <ui-article class="article">
            <h3>常见端口号表</h3>
            <table>
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
        }
    }
</script>

<style scoped>
    .article {
        max-width: 800px;
    }
</style>
