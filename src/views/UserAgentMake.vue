<template>
    <my-page title="User Agent 生成" :page="page">
        <div class="common-container container">
            <ui-select-field v-model="type" label="类型">
                <ui-menu-item value="random" title="随机生成"/>
                <ui-menu-item value="custom" title="自定义生成"/>
            </ui-select-field>
            <br>
            <div class="form-group" id="ua_info">
                <div>
                    <ui-text-field class="input-ua" v-model="number" label="数量" hintText="1" />
                </div>
            </div>
            <div v-if="type === 'custom'">
                <ui-select-field v-model="os" label="操作系统">
                    <ui-menu-item value="" title="无限制"/>
                    <ui-menu-item :value="item.value" :title="item.label" v-for="item, index in osList" :key="index" />
                </ui-select-field>
                <br>
                <ui-select-field v-model="browser" label="浏览器">
                    <ui-menu-item value="" title="无限制"/>
                    <ui-menu-item :value="item.value" :title="item.label" v-for="item, index in browserList" :key="index" />
                </ui-select-field>
                <br>
            </div>

            <ui-raised-button class="btn" primary label="生成" @click="make" />
            <br>
            <textarea class="textarea" v-model="result" rows="16" v-if="result"></textarea>
            <!-- <copy-btn :text="userAgent" /> -->

        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    // https://developers.whatismybrowser.com/
    // import UserAgent from 'user-agents'
    const randomUseragent = require('random-useragent')

    export default {
        data () {
            return {
                // type: 'random',
                type: 'custom',
                // os: 'win10',
                os: '',
                browser: '',
                number: 10,
                userAgent: '',
                result: null,
                osList: [
                    {
                        label: 'PC 浏览器',
                        value: 'pc',
                        code: '',
                    },
                    {
                        label: '移动端浏览器',
                        value: 'mobile',
                        code: '',
                    },
                    {
                        label: 'Windows',
                        value: 'windows',
                        code: '',
                    },
                    {
                        label: 'Linux',
                        value: 'linux',
                        code: 'X11',
                    },
                    {
                        label: 'Mac',
                        value: 'mac',
                        code: 'Macintosh',
                    },
                    {
                        label: 'Android',
                        value: 'android',
                        code: 'Macintosh',
                    },
                    {
                        label: 'iPhone',
                        value: 'iphone',
                        code: 'Macintosh',
                    },
                ],
                browserList: [
                    {
                        label: 'Chrome',
                        value: 'chrome',
                        code: 'Chrome/67.0.3396.87',
                    },
                    {
                        label: 'Firefox',
                        value: 'firefox',
                        code: 'Firefox/42.0',
                    },
                    {
                        label: 'Edge',
                        value: 'edge',
                        code: 'Firefox/42.0',
                    },
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/513af4e09b0911e99db4c5f911656178',
                            target: '_blank'
                        },
                    ]
                }
            }
        },
        mounted() {
            this.init()
            this.debug()
        },
        methods: {
            init() {
            },
            debug() {
                this.make()
            },
            make() {
                if (this.type === 'random') {
                    let result = []
                    for (let i = 0; i < (this.number || 1); i++) {
                        result.push(randomUseragent.getRandom())
                    }
                    this.result = result.join('\n')
                    return
                }

                function random(min, max) {
                    return Math.round(min + Math.random() * (max - min))
                }

                function randomItem(arr) {
                    return arr[random(0, arr.length - 1)]
                }

                let result = []
                for (let i = 0; i < (this.number || 1); i++) {
                    // 操作系统
                    let os
                    let mozillaVersion = random(4, 5)
                    console.log('this.os', this.os, this.osList)
                    if (this.os) {
                        os = this.osList.find(item => item.value === this.os)
                    } else {
                        console.log('随机os')
                        os = randomItem(this.osList)
                    }
                    console.log('os', os)
                    let osCode = os.code
                    let osValue = os.value
                    if (osValue === 'pc') {
                        osValue = randomItem([
                            'windows',
                            'mac',
                            'linux',
                        ])
                    }
                    if (osValue === 'mobile') {
                        osValue = randomItem([
                            'android',
                            'iphone',
                        ])
                    }
                    if (osValue === 'android') {
                        osCode = `Linux; Android ${random(4, 9)}.${random(0, 3)}.${random(0, 3)}`
                    }
                    if (osValue === 'iphone') {
                        osCode = `iPhone; CPU iPhone OS ${random(10, 13)}_${random(0, 5)}_${random(0, 5)} like Mac OS X`
                    }
                    if (osValue === 'windows') {
                        osCode = randomItem([
                            'Windows NT 10.0', // Windows 10
                            'Windows NT 6.1', // Windows 7
                            'Windows NT 6.0', // Windows Vista
                            'Windows NT 5.2', // Windows 2003

                        ])
                    }
                    if (osValue === 'linux') {
                        osCode = `X11`
                    }
                    if (osValue === 'mac') {
                        osCode = `Macintosh`
                    }

                    // 浏览器
                    let browser
                    if (this.browser) {
                        browser = this.browserList.find(item => item.value === this.browser)
                    } else {
                        browser = randomItem(this.browserList)
                    }
                    let browserCode = browser.code
                    console.log('browser', browser)
                    if (browser.value === 'chrome') {
                        browserCode = `Chrome/${random(46, 74)}.${random(0, 3)}.${random(1000, 5000)}.${random(50, 500)}`
                    }
                    if (browser.value === 'firefox') {
                        browserCode = `Firefox/${random(20, 67)}.0`
                    }
                    if (browser.value === 'edge') {
                        browserCode = `Edge/${random(13, 18)}.${random(10000, 20000)}`
                    }
                    

                    result.push(`Mozilla/${mozillaVersion}.0 (${osCode}) AppleWebKit/${random(0, 100)}.${random(0, 100)} (KHTML, like Gecko) ${browserCode} Safari/${random(100, 600)}.${random(0, 100)}`)
                }
                this.result = result.join('\n')
            }
        },
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
    .btn {
        margin-bottom: 16px;
    }
    textarea.textarea {
        height: auto;
    }
    .textarea {
        display: block;
        width: 100%;
        /* max-width: 400px; */
        height: 400px;
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
</style>
