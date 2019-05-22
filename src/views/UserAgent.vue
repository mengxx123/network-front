<template>
    <my-page title="User Agent 分析" :page="page">
        <div class="common-container container">
            <div>UserAgent、浏览器、系统、IP信息集合；也可以解析自己的ua信息。</div>
            <div class="form-group" id="ua_info">
                您的UserAgent：
                <div>
                    <ui-text-field class="input-ua" v-model="userAgent" hintText="输入你要解析的 UserAgent 字符串" />
                </div>
                <!--<input id="ua_code" class="form-control green input-text" placeholder="" onkeyup="javascript:parse_UA()" type="text" value="" />-->
            </div>
            <ui-article v-if="result">
                <h3>浏览器系统信息</h3>
                <table>
                    <tr>
                        <th>浏览器</th>
                        <th>版本</th>
                        <th>内核</th>
                        <th>语言</th>
                        <th>分辨率</th>
                    </tr>
                    <tr>
                        <td>{{ result.browserName }}</td>
                        <td>{{ result.browserVersion }}</td>
                        <td>{{ result.browserEngine }}</td>
                        <td>zh-CN,zh;q=0.8</td>
                        <td>{{ result.screenSize }}</td>
                    </tr>
                    <tr>
                        <th>系统</th>
                        <th>CPU</th>
                        <th colspan="2">设备</th>
                        <th>时区</th>
                    </tr>
                    <tr>
                        <td>{{ result.system }}</td>
                        <td>{{ result.cpu }}</td>
                        <td colspan="2">{{ result.device }}</td>
                        <td>{{ result.tz_offset }}</td>
                    </tr>
                </table>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    const UAParser = window.UAParser

    export default {
        data () {
            return {
                userAgent: '',
                result: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/userAgent/help'
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
                this.userAgent = navigator.userAgent
                this.parse()
            },
            parse() {
                let parser = new UAParser()
                parser.setUA(this.userAgent)
                let r = parser.getResult()
                console.log(r)
                var d = new Date();
                var tzOffset = (d.getTimezoneOffset() / 60) + ' Hours';
                this.result = {
                    browserName: r.browser.name + ' ' + r.browser.major,
                    browserVersion: r.browser.version,
                    browserEngine: r.engine.name + ' ' + r.engine.version,
                    system: r.os.name + ' ' + r.os.version,
                    cpu: r.cpu.architecture,
                    device: r.device.model + ' ' + r.device.type + ' ' + r.device.vendor,
                    screenSize: screen.width + 'px X ' + screen.height + 'px',
                    tz_offset:  tzOffset
                }
            }
        },
        watch: {
            userAgent() {
                this.parse()
            }
        }
    }
</script>

<style scoped>
    .input-ua {
        width: 100%;
        max-width: 320px;
    }
    .form-control {
        display: inline-block;
        width: 300px;
        padding: 8px;
    }
</style>
