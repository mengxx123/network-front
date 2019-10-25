<template>
    <my-page title="MAC 地址生成" :page="page">
        <div class="common-container container">
            <div>
                <ui-select-field v-model="type" label="格式">
                    <ui-menu-item value="1" title="XX:XX:XX:XX:XX:XX" />
                    <ui-menu-item value="2" title="XX-XX-XX-XX-XX-XX" />
                    <ui-menu-item value="3" title="XX XX XX XX XX XX" />
                </ui-select-field>
                <br>
                <ui-text-field v-model="prefix" label="前缀" hintText="输入有效前缀，无则留空" />
                <br>
                <ui-text-field v-model="number" label="数量" hintText="1" />
                <br>
                <!-- <div id="input">
                        <table style="margin:0px; width:100%">
                        <tbody>

                        <tr><td><label>前缀：</label></td><td><input id="rd" type="text" placeholder="输入有效前缀，无则留空。"> <label id="error1"></label></td></tr>
                        </tbody></table>
                    </div> -->

                <!-- <div class="label">限制</div>
                <ui-text-field class="simple" v-model="a" label="" hintText="" /> .
                <ui-text-field class="simple" v-model="b" label="" hintText="" /> .
                <ui-text-field class="simple" v-model="c" label="" hintText="" /> .
                <ui-text-field class="simple" v-model="d" label="" hintText="" />
                <br> -->
                <ui-raised-button label="生成" primary @click="make" />
            </div>
            <div class="loading" v-if="loading">加载中...</div>
            <div class="result" v-if="!loading && detail">
                <result :text="detail" :copyable="true" />
                <!-- <div>{{ detail }}</div> -->
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                type: '1',
                prefix: '',
                number: 10,
                a: '',
                b: '',
                c: '',
                d: '',
                loading: false,
                ip: '',
                detail: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/1aacab70f70d11e9844f19f557118874',
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
                    this.ip = data
                    this.convert()
                }
                this.make()
            },
            debug() {
            },
            make() {
                function ishex(num){
                    var validChar='0123456789ABCDEF';
                    var flag=true;
                    var x=num.toUpperCase();
                    for(let idx=0;idx<x.length;idx++){
                        if(validChar.indexOf(x.charAt(idx))<0){
                            return false;
                        }
                    }
                    return true;
                }

                function makePark() {
                    let result = Math.floor(Math.random() * 256)
                    result = result.toString(16).toUpperCase()
                    if (result.length === 1)
                        result = '0' + result
                    return result
                }


                let prefix = this.prefix
                if (prefix) {
                    if (prefix.length !== 2 || !ishex(prefix)) {
                        this.$message({
                            type: 'danger',
                            text: '请输入有效前缀'
                        })
                        return
                    }
                }

                let number = this.number || 1
                let results = []
                for (let i = 0; i < number; i++) {
                    let arr = [
                        prefix || makePark(),
                        makePark(),
                        makePark(),
                        makePark(),
                        makePark(),
                        makePark(),
                    ]
                    let ran2 = makePark()
                    let ran3 = makePark()
                    let ran4 = makePark()
                    let ran5 = makePark()
                    let ran6 = makePark()

                    var res = "";

                    if(this.type === '1'){
                        res = arr.join(':')
                    }else if(this.type === '2'){
                        res = arr.join('-')
                    }else if(this.type === '3'){
                        res = arr.join(' ')
                    }
                    results.push(res)
                }
                this.detail = results.join('\n')
            },
            ip2long(ip) {
                var num = 0
                ip = ip.split('.')
                num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3])
                num = num >>> 0
                if (num === '0') {
                    this.$message({
                        type: 'danger',
                        text: '请输入正确的 IP'
                    })
                    return
                }
                return num
            }
        }
    }
</script>

<style lang="scss" scoped>
    .label {
        color: rgba(0,0,0,.54);
        font-size: 12px;
    }
    .simple {
        width: 55px;
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
    .result {
        margin-top: 16px;
    }
</style>
