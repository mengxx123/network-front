<template>
    <my-page title="MAC 地址生成" :page="page">
        <div class="common-container container">
            <div>
                <ui-select-field v-model="type" label="连接符">
                    <ui-menu-item value="1" title=":" />
                    <ui-menu-item value="2" title="-" />
                    <ui-menu-item value="3" title="空格" />
                </ui-select-field>
                <br>
                <br>
                <div class="label">前缀</div>
                <div>
                    <ui-text-field class="input" v-model="prefix1" hintText="" />
                    <span class="split">:</span>
                    <ui-text-field class="input" v-model="prefix2" hintText="" />
                    <span class="split">:</span>
                    <ui-text-field class="input" v-model="prefix3" hintText="" />
                    <span class="split">:</span>
                    <ui-text-field class="input" v-model="prefix4" hintText="" />
                    <span class="split">:</span>
                    <ui-text-field class="input" v-model="prefix5" hintText="" />
                    <span class="split">:</span>
                    <span>XX</span>
                </div>
                <ui-text-field v-model="number" label="数量" hintText="1" />
                <br>
                <ui-checkbox class="checkbox" v-model="isLowerCase" label="字母小写" />
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
                <div>
                    <ui-raised-button class="btn" label="随机生成" primary @click="make" />
                    <ui-raised-button class="btn" label="顺序生成" secondary @click="makeOrder" />
                </div>
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
    /* eslint-disable */
    export default {
        data () {
            return {
                isLowerCase: false,
                type: '1',
                prefix1: '',
                prefix2: '',
                prefix3: '',
                prefix4: '',
                prefix5: '',
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
                // this.make()
                this.makeOrder()
            },
            debug() {
            },
            makeOrder() {
                let _this = this

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
                    if (result.length === 1) {
                        result = '0' + result
                    }
                    if (_this.isLowerCase) {
                        return result.toLowerCase()
                    }
                    return result
                }


                let prefix1 = this.prefix1
                if (prefix1) {
                    if (prefix1.length !== 2 || !ishex(prefix1)) {
                        this.$message({
                            type: 'danger',
                            text: '请输入有效前缀'
                        })
                        return
                    }
                }
                if (this.prefix2) {
                    if (this.prefix2.length !== 2 || !ishex(this.prefix2)) {
                        this.$message({
                            type: 'danger',
                            text: '请输入有效前缀'
                        })
                        return
                    }
                }
                if (this.prefix3) {
                    if (this.prefix3.length !== 2 || !ishex(this.prefix3)) {
                        this.$message({
                            type: 'danger',
                            text: '请输入有效前缀'
                        })
                        return
                    }
                }
                if (this.prefix4) {
                    if (this.prefix4.length !== 2 || !ishex(this.prefix4)) {
                        this.$message({
                            type: 'danger',
                            text: '请输入有效前缀'
                        })
                        return
                    }
                }
                if (this.prefix5) {
                    if (this.prefix5.length !== 2 || !ishex(this.prefix5)) {
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
                        prefix1 || makePark(),
                        this.prefix2 || makePark(),
                        this.prefix3 || makePark(),
                        this.prefix4 || makePark(),
                        this.prefix5 || makePark(),
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
            make() {
                let _this = this

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
                    if (result.length === 1) {
                        result = '0' + result
                    }
                    if (_this.isLowerCase) {
                        return result.toLowerCase()
                    }
                    return result
                }


                if (this.prefix1) {
                    if (this.prefix1.length !== 2 || !ishex(this.prefix1)) {
                        this.$message({
                            type: 'danger',
                            text: '请输入有效前缀'
                        })
                        return
                    }
                }
                if (this.prefix2) {
                    if (this.prefix2.length !== 2 || !ishex(this.prefix2)) {
                        this.$message({
                            type: 'danger',
                            text: '请输入有效前缀'
                        })
                        return
                    }
                }
                if (this.prefix3) {
                    if (this.prefix3.length !== 2 || !ishex(this.prefix3)) {
                        this.$message({
                            type: 'danger',
                            text: '请输入有效前缀'
                        })
                        return
                    }
                }
                if (this.prefix4) {
                    if (this.prefix4.length !== 2 || !ishex(this.prefix4)) {
                        this.$message({
                            type: 'danger',
                            text: '请输入有效前缀'
                        })
                        return
                    }
                }
                if (this.prefix5) {
                    if (this.prefix5.length !== 2 || !ishex(this.prefix5)) {
                        this.$message({
                            type: 'danger',
                            text: '请输入有效前缀'
                        })
                        return
                    }
                }

                let prefix1 = this.prefix1 || '00'
                let prefix2 = this.prefix2 || '00'
                let prefix3 = this.prefix3 || '00'
                let prefix4 = this.prefix4 || '00'
                let prefix5 = this.prefix5 || '00'
                let prefix6 = '00'

                function plug(mac) {
                    
                }

                let number = this.number || 1
                let results = []
                let mac = `${prefix1}:${prefix2}:${prefix3}:${prefix4}:${prefix5}:${prefix6}`
                for (let i = 0; i < number; i++) {
                    // let arr = [
                    //     prefix1 || makePark(),
                    //     this.prefix2 || makePark(),
                    //     this.prefix3 || makePark(),
                    //     this.prefix4 || makePark(),
                    //     this.prefix5 || makePark(),
                    //     makePark(),
                    // ]
                    // let ran2 = makePark()
                    // let ran3 = makePark()
                    // let ran4 = makePark()
                    // let ran5 = makePark()
                    // let ran6 = makePark()

                    // var res = "";

                    // if(this.type === '1'){
                    //     res = arr.join(':')
                    // }else if(this.type === '2'){
                    //     res = arr.join('-')
                    // }else if(this.type === '3'){
                    //     res = arr.join(' ')
                    // }
                    results.push(mac)
                    mac = plug(mac)
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
    .input {
        width: 32px;
    }
    .split {
        display: inline-block;
        margin: 0 8px;
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
    .btn {
        margin-right: 8px;
    }
    .checkbox {
        margin-bottom: 8px;
    }
</style>
