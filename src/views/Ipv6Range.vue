<template>
    <my-page title="IPv6 地址范围" :page="page">
        <div class="common-container container">
            <div>
                <textarea class="textarea" v-model="ip" rows="6" wrap="off" placeholder="IPv6"></textarea>
                <br>
                <ui-text-field v-model.number="mask" type="number" label="掩码位" hintText="" />
                <br>
                <ui-raised-button label="计算" primary @click="make" />
            </div>
            <!-- <div class="loading" v-if="loading">加载中...</div> -->
            <div class="result" v-if="result">
                <result :text="result" />
            </div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    const Address6 = require('ip-address').Address6

    export default {
        data () {
            return {
                loading: false,
                ip: '',
                mask: null,
                result: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/8a7a5a20113311ea8210f36f0efe8dc6',
                            target: '_blank'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
            // this.debug()
        },
        methods: {
            debug() {
                this.ip = '1234:ffff:ffff:ffff:ffff:ffff:ffff:ffff'
                // this.ip = '2001:0:ce49:7601:e866:efff:62c3:fffe'
                this.mask = 17
                this.make()
            },
            init() {
                let data = this.$route.query.data
                if (data) {
                    this.domain = data
                    this.query()
                }
            },
            make() {
                if (!this.ip) {
                    this.$message({
                        type: 'danger',
                        text: '请输入 IPv6'
                    })
                    return
                }
                if (!this.mask) {
                    this.mask = 0
                }
                
                let address = new Address6(this.ip)
                let isValid = address.isValid()
                if (!isValid) {
                    this.$message({
                        type: 'danger',
                        text: 'IPv6 输入不正确'
                    })
                    return
                }
                // this.result = isValid ? '校验通过' : '校验不通过'
                var BIN_TOTAL = 128;
                var buildIp = function(binaryBaseIp, char) {
                    var completeNum = BIN_TOTAL - binaryBaseIp.length;
                    var binaryIp = binaryBaseIp + completeChar(completeNum, char);
                    var hexIp = binToHex( binaryIp );
                    return hexIp.match(/\w{4}/g).join(':');
                };
                var completeChar = function( num, character ) {
                    return new Array(num+1).join(character);
                };
                var binToHex = function (bin) {
                    var hex = '';
                    var binArr = bin.match(/\w{1,4}/g);
                    for( var i=0; i<binArr.length; i++ ) {
                        hex += parseInt(binArr[i], 2).toString(16).toUpperCase();
                    }
                    return hex;
                };
                var hexToBin = function (hex) {
                    var bin = '';
                    for(var i=0; i<hex.length; i++){
                        var b = parseInt(hex[i], 16).toString(2)
                        bin += completeChar(4-b.length, '0') + b;
                    }
                    return bin;
                };

                let ip = this.ip.replace(/:/g, '')
                console.log('do ip', ip)
                let mask = this.mask
                console.log('ip', ip)
                console.log('mask', mask)
                let baseIp = hexToBin(ip).substr(0, mask);
                let minIp = buildIp(baseIp, '0');
                let maxIp = buildIp(baseIp, '1');

                console.log('minIp', minIp)
                console.log('maxIp', maxIp)
                this.result = `${minIp}\n到\n${maxIp}`
            }
        }
    }
</script>

<style lang="scss" scoped>
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
