<template>
    <my-page title="端口扫描 - 帮助" backable>
        <ui-article class="article">
            <h2>工具介绍</h2>
            <p>当前主要功能: 端口扫描 网络扫描 检查内部IP地址，在xss攻击中，为了更深一步探测信息，可以尝试着获取一下内网IP段，然后进行端口扫描。当然，神马中间人攻击、跳板exp的这里就不说了。</p>

            <h2>相关知识</h2>
            <p>对于自己的VPS服务器，检查端口开放情况非常有必要，端口是黑客攻入服务器的第一步，不同的端口对应不同的应用程序，不同的应用程序有不同的漏洞。</p>
            <p>总体来说，开放的端口越多，黑客攻入的机会越多，VPS服务器也越不安全，因此使用本工具检查之后，可以使用iptables关闭不使用的端口，保证安全。</p>

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
