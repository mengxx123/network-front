<template>
    <my-page title="IP 计算器" :page="page">
        <form id="form" name="calculator" method="post">
            <ui-article>
                <table class="table table-bordered">
                    <caption>子网掩码计算器</caption>
                    <tr bgcolor="#ffffff">
                        <td width="250" align="right">输入 TCP/IP 地址:</td>
                        <td width="360" align="right">
                            <input type="text" name="oct1" size="3"  maxlength="3"  onkeyup="Jump();">
                            <input type="text" name="oct2" size="3"  maxlength="3" onkeyup="Jump();">
                            <input type="text" name="oct3" size="3"  maxlength="3" onkeyup="Jump();">
                            <input type="text" name="oct4" size="3"  maxlength="3">
                        </td>
                        <td width="100" align="left">
                            <input id="ClearAll" class="btn btn-default" type="button" value=" 清除 ">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">选择网络类型:</td>
                        <td align="right">
                            <input type="radio" value="1" name="cf" checked="">默认
                            <input type="radio" value="2" name="cf">A类网
                            <input type="radio" value="3" name="cf">B类网
                            <input type="radio" value="4" name="cf">C类网
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td align="right">请选择子网的ip数量:</td>
                        <td align="right">
                            <select id="EmptyHosts" name="network" size="1">
                                <option value="0"></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="4">4</option>
                                <option value="8">8</option>
                                <option value="16">16</option>
                                <option value="32">32</option>
                                <option value="64">64</option>
                                <option value="128">128</option>
                                <option value="256">256</option>
                                <option value="512">512</option>
                                <option value="1024">1024</option>
                                <option value="2048">2048</option>
                                <option value="4096">4096</option>
                                <option value="8192">8192</option>
                                <option value="16384">16384</option>
                                <option value="32768">32768</option>
                                <option value="65536">65536</option>
                                <option value="131072">131072</option>
                                <option value="262144">262144</option>
                                <option value="524288">524288</option>
                                <option value="1048576">1048576</option>
                                <option value="2097152">2097152</option>
                                <option value="4194304">4194304</option>
                                <option value="8388608">8388608</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td align="right">或 选择每个网络所需的<br>节点/主机数(含广播地址):</td>
                        <td align="right">
                            <select id="EmptyNetwork" name="node" size="1">
                                <option value="0"></option>
                                <option value="2">2</option>
                                <option value="4">4</option>
                                <option value="8">8</option>
                                <option value="16">16</option>
                                <option value="32">32</option>
                                <option value="64">64</option>
                                <option value="128">128</option>
                                <option value="256">256</option>
                                <option value="512">512</option>
                                <option value="1024">1024</option>
                                <option value="2048">2048</option>
                                <option value="4096">4096</option>
                                <option value="8192">8192</option>
                                <option value="16384">16384</option>
                                <option value="32768">32768</option>
                                <option value="65536">65536</option>
                                <option value="131072">131072</option>
                                <option value="262144">262144</option>
                                <option value="524288">524288</option>
                                <option value="1048576">1048576</option>
                                <option value="2097152">2097152</option>
                                <option value="4194304">4194304</option>
                                <option value="8388608">8388608</option>
                                <option value="16777216">16777216</option>
                                <option value="33554432">33554432</option>
                                <option value="67108864">67108864</option>
                                <option value="134217728">134217728</option>
                                <option value="268435456">268435456</option>
                                <option value="536870912">536870912</option>
                                <option value="1073741824">1073741824</option>
                                <option value="2147483648">2147483648</option>
                            </select>
                        </td>
                        <td align="left">
                            <input id="compute2" class="btn btn-default" type="button" value=" 计算 ">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">网络类型:</td>
                        <td align="right">
                            <input type="text" name="nwclass" size="7" maxlength="7">
                            <input type="text" name="subsuper" size="14" maxlength="14">
                            <input type="text" name="nwclass1" size="7" maxlength="7"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td align="right">子网掩码:</td>
                        <td align="right"><input type="text" name="snm1" size="3" maxlength="3">
                            <input type="text" name="snm2" size="3" maxlength="3">
                            <input type="text" name="snm3" size="3" maxlength="3">
                            <input type="text" name="snm4" size="3" maxlength="3"> 或
                            <input type="text" name="snmbits" size="3" maxlength="3">
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td align="right">子网:</td>
                        <td align="right"><input type="text" name="nwquant" size="10" maxlength="8"></td>
                        <td align="left">
                            <input id="listsubnets" class="btn btn-default" type="button" value="网络列表">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">每个网络的节点/主机数<br><font size="-2">(含网络和广播地址)***</font>:</td>
                        <td align="right"><input type="text" name="nodequant" size="10" maxlength="8"></td>
                        <td align="left"></td>
                    </tr>
                </table>
                <table class="table table-bordered">
                    <caption>网络/节点计算器</caption>
                    <tr>
                        <td width="250" align="right">请输入子网掩码:</td>
                        <td width="360" align="right">
                            <input type="text" name="snm1a" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm2a" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm3a" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm4a" size="3" maxlength="3" onkeyup="Jump();">
                        </td>
                        <td width="100"></td>
                    </tr>
                    <tr>
                        <td align="right">请输入 TCP/IP 地址:</td>
                        <td align="right">
                            <input type="text" name="oct1a" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="oct2a" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="oct3a" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="oct4a" size="3" maxlength="3" onkeyup="Jump();">
                        </td>
                        <td align="left">
                            <input id="compute" class="btn btn-default" type="button" value=" 计算 ">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"><hr></td>
                    </tr>
                    <tr>
                        <td align="right">网络:</td>
                        <td align="right">
                            <input type="text" name="nw1a" size="3" maxlength="3">
                            <input type="text" name="nw2a" size="3" maxlength="3">
                            <input type="text" name="nw3a" size="3" maxlength="3">
                            <input type="text" name="nw4a" size="3" maxlength="3">
                        </td>
                        <td></td>
                    </tr>

                    <tr>
                        <td align="right">节点/主机:</td>
                        <td align="right">
                            <input type="text" name="node1a" size="3" maxlength="3">
                            <input type="text" name="node2a" size="3" maxlength="3">
                            <input type="text" name="node3a" size="3" maxlength="3">
                            <input type="text" name="node4a" size="3" maxlength="3">
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td align="right">广播地址:</td>
                        <td align="right">
                            <input type="text" name="broad1a" size="3" maxlength="3">
                            <input type="text" name="broad2a" size="3" maxlength="3">
                            <input type="text" name="broad3a" size="3" maxlength="3">
                            <input type="text" name="broad4a" size="3" maxlength="3">
                        </td>
                        <td align="left"></td>
                    </tr>
                </table>
                <table class="table table-bordered">
                    <caption>IP 地址转换器</caption>
                    <tr>
                        <td width="250" align="right">请输入点格式十进制 TCP/IP 地址:</td>
                        <td width="360" align="right">
                            <input type="text" name="oct1b" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="oct2b" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="oct3b" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="oct4b" size="3" maxlength="3" onkeyup="Jump();">
                        </td>
                        <td width="100" align="left">
                            <input id="compute3" class="btn btn-default" type="button" value=" 计算 ">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">或 输入二进制 TCP/IP 地址:</td>
                        <td align="right">
                            <input type="text" name="bin1b" size="8" maxlength="8" onkeyup="Jump();">
                            <input type="text" name="bin2b" size="8" maxlength="8" onkeyup="Jump();">
                            <input type="text" name="bin3b" size="8" maxlength="8" onkeyup="Jump();">
                            <input type="text" name="bin4b" size="8" maxlength="8" onkeyup="Jump();">
                        </td>
                        <td align="left">
                            <input class="btn btn-default" id="compute4" type="button" value=" 计算 " >
                        </td>
                    </tr>
                    <tr>
                        <td align="right">或 输入十六进制 TCP/IP 地址:</td>
                        <td align="right">
                            <input type="text" name="hex1b" size="2" maxlength="2" onkeyup="Jump();">
                            <input type="text" name="hex2b" size="2" maxlength="2" onkeyup="Jump();">
                            <input type="text" name="hex3b" size="2" maxlength="2" onkeyup="Jump();">
                            <input type="text" name="hex4b" size="2" maxlength="2" onkeyup="Jump();">
                        </td>
                        <td align="left">
                            <input class="btn btn-default" id="compute5" type="button" value=" 计算 ">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">或 输入十进制 TCP/IP 地址:</td>
                        <td align="right"><input type="text" name="dec1b" size="10" maxlength="10"></td>
                        <td align="left"><input class="btn btn-default" id="compute6" type="button" value=" 计算 "></td>
                    </tr>
                </table>
                <table class="table table-bordered">
                    <caption>子网掩码换算器</caption>
                    <tr>
                        <td class="td-left">请输入点格式十进制子网掩码:</td>
                        <td class="td-center">
                            <input type="text" name="snm1c" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm2c" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm3c" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm4c" size="3" maxlength="3" onkeyup="Jump();">
                        </td>
                        <td class="td-right">
                            <input class="btn btn-default" id="computeSNMA" type="button" value=" 计算 ">
                        </td>
                    </tr>
                    <tr>
                        <td class="td-left">或 输入子网掩码的位元数:</td>
                        <td class="td-center">/ <input type="text" name="snmbitsc" size="2" maxlength="2"></td>
                        <td class="td-right"><input class="btn btn-default" id="computeSNMB" type="button" value=" 计算 "></td>
                    </tr>
                </table>
                <table class="table table-bordered">
                    <caption>子网掩码逆算器</caption>
                    <tr>
                        <td width="250" align="right">请输入点格式十进制子网掩码:</td>
                        <td width="360" align="right">
                            <input type="text" name="snm1d" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm2d" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm3d" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm4d" size="3" maxlength="3" onkeyup="Jump();">
                        </td>
                        <td width="100" align="left">
                            <input class="btn btn-default" id="computeINV1" type="button" value=" 计算 ">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">输入要逆算的子网掩码:</td>
                        <td align="right">
                            <input type="text" name="snm1e" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm2e" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm3e" size="3" maxlength="3" onkeyup="Jump();">
                            <input type="text" name="snm4e" size="3" maxlength="3" onkeyup="Jump();">
                        </td>
                        <td align="right">&nbsp;</td>
                    </tr>
                </table>
            </ui-article>
            
        </form>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                loading: false,
                userIp: '加载中...',
                ip: '',
                detail: null,
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/487d9b300d8a11e9b4c16f0404983c51',
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
                var f = document.forms[0];
                var l = f.elements.length;
                function EmptyHosts() {
                    f.node.options.selectedIndex = 0;
                }
                document.getElementById('EmptyHosts').addEventListener('change', EmptyHosts)
                function EmptyNetwork() {
                    f.network.options.selectedIndex = 0;
                }
                document.getElementById('EmptyNetwork').addEventListener('change', EmptyNetwork)
                function SetOrder() {
                    var c;
                    var k = 0;
                    for (var i = 0; i < l - 1; i++) {
                        c = f.elements[i];
                        f.elements[i].taborder = i;
                    }
                    return;
                }
                function Jump() {
                    var c = window.event.srcElement;
                    var code = window.event.keyCode;
                    var newc;
                    if (c.type !== "text" || c.value.length < c.maxLength || code < 32 || (code >= 33 && code <= 40) || c.taborder === null) {
                        return;
                    }
                    var k = c.taborder;
                    while (f.elements[k + 1].name == c.name) {
                        k++;
                        if (k >= l - 1)return;
                    }
                    newc = f.elements[k + 1];
                    if (newc.type != "hidden") newc.focus();
                    if (newc.type == "text") newc.select();
                }

                /**/

                function d2h(decimal) {
                    var j = decimal;
                    var hexchars = "0123456789ABCDEF";
                    var hv = "";
                    for (var i = 0; i < 2; i++) {
                        let k = j & 15;
                        hv = hexchars.charAt(k) + hv;
                        j = j >> 4;
                    }
                    return (hv);
                }
                function h2d(hex) {
                    var j = hex.toUpperCase();
                    var d = 0;
                    var ch = ' ';
                    var hexchars = "0123456789ABCDEF";
                    while (j.length < 4)j = 0 + j;
                    for (var i = 0; i < 4; i++) {
                        ch = j.charAt(i);
                        d = d * 16 + hexchars.indexOf(ch);
                    }
                    return (d);
                }
                function d2b(decimal) {
                    var bit8 = 0, bit7 = 0, bit6 = 0, bit5 = 0, bit4 = 0, bit3 = 0, bit2 = 0, bit1 = 0;
                    if (decimal & 128) {
                        bit8 = 1
                    }
                    if (decimal & 64) {
                        bit7 = 1
                    }
                    if (decimal & 32) {
                        bit6 = 1
                    }
                    if (decimal & 16) {
                        bit5 = 1
                    }
                    if (decimal & 8) {
                        bit4 = 1
                    }
                    if (decimal & 4) {
                        bit3 = 1
                    }
                    if (decimal & 2) {
                        bit2 = 1
                    }
                    if (decimal & 1) {
                        bit1 = 1
                    }
                    return ("" + bit8 + bit7 + bit6 + bit5 + bit4 + bit3 + bit2 + bit1);
                }
                function d2bits(decimal) {
                    var bits = 0;
                    if (decimal & 128) {
                        bits = bits + 1
                    }
                    if (decimal & 64) {
                        bits = bits + 1
                    }
                    if (decimal & 32) {
                        bits = bits + 1
                    }
                    if (decimal & 16) {
                        bits = bits + 1
                    }
                    if (decimal & 8) {
                        bits = bits + 1
                    }
                    if (decimal & 4) {
                        bits = bits + 1
                    }
                    if (decimal & 2) {
                        bits = bits + 1
                    }
                    if (decimal & 1) {
                        bits = bits + 1
                    }
                    return (bits);
                }
                function snmcorrect(decimal) {
                    let snmcorr = decimal;
                    if (decimal > 255) snmcorr = 255;
                    if (decimal == 253) snmcorr = 254;
                    if ((decimal > 248) && (decimal < 252)) snmcorr = 252;
                    if ((decimal > 240) && (decimal < 248)) snmcorr = 248;
                    if ((decimal > 224) && (decimal < 240)) snmcorr = 240;
                    if ((decimal > 192) && (decimal < 224)) snmcorr = 224;
                    if ((decimal > 128) && (decimal < 192)) snmcorr = 192;
                    if ((decimal > 0) && (decimal < 128)) snmcorr = 128;
                    if (decimal < 0) snmcorr = 0;
                    return (snmcorr);
                }
                function b2d(binary) {
                    var decimal = 0;
                    while (binary.length < 8) {
                        binary = "0" + binary;
                    }
                    if (binary.substring(7, 8) == "1") {
                        decimal++
                    }
                    if (binary.substring(6, 7) == "1") {
                        decimal = decimal + 2
                    }
                    if (binary.substring(5, 6) == "1") {
                        decimal = decimal + 4
                    }
                    if (binary.substring(4, 5) == "1") {
                        decimal = decimal + 8
                    }
                    if (binary.substring(3, 4) == "1") {
                        decimal = decimal + 16
                    }
                    if (binary.substring(2, 3) == "1") {
                        decimal = decimal + 32
                    }
                    if (binary.substring(1, 2) == "1") {
                        decimal = decimal + 64
                    }
                    if (binary.substring(0, 1) == "1") {
                        decimal = decimal + 128
                    }
                    return (decimal);
                }
                function bits2d(binary) {
                    var decimal = 0;
                    if (binary > 0) {
                        decimal = decimal + 128
                    }
                    if (binary > 1) {
                        decimal = decimal + 64
                    }
                    if (binary > 2) {
                        decimal = decimal + 32
                    }
                    if (binary > 3) {
                        decimal = decimal + 16
                    }
                    if (binary > 4) {
                        decimal = decimal + 8
                    }
                    if (binary > 5) {
                        decimal = decimal + 4
                    }
                    if (binary > 6) {
                        decimal = decimal + 2
                    }
                    if (binary > 7) {
                        decimal = decimal + 1
                    }
                    return (decimal);
                }
                function initPage() {
                    var f = document.forms[0];
                    if (f.elements.length) {
                        SetOrder();
                    }
                }

                /**/

                var code = 'unknown';
                var version = 0;
                var platform = 'Win';
                var j = 0;
                var i = navigator.userAgent.indexOf('MSIE');
                if (i >= 0 && j == 0) {
                    code = 'MSIE';
                    version = parseFloat(navigator.userAgent.substring(i + 5, i + 9));
                    j = 1;
                }
                i = navigator.userAgent.indexOf('Opera');
                if (i >= 0 && j == 0) {
                    code = 'Opera';
                    version = parseFloat(navigator.userAgent.substring(i + 5, i + 11));
                    j = 1;
                }
                i = navigator.userAgent.indexOf('Mozilla/');
                if (i >= 0 && j == 0) {
                    code = 'NS';
                    version = parseFloat(navigator.userAgent.substring(i + 8, i + 12));
                }
                if (navigator.userAgent.indexOf('Mac') >= 0) {
                    platform = 'Mac';
                }
                if (navigator.userAgent.indexOf('OS/2') >= 0) {
                    platform = 'OS/2';
                }
                if (navigator.userAgent.indexOf('X11') >= 0) {
                    platform = 'UNIX';
                }
                function ClearAll(f) {
                    f.node.options.selectedIndex = 0;
                    f.network.options.selectedIndex = 0;
                    f.cf[0].checked = true;
                    f.oct1.value = "";
                    f.oct2.value = "";
                    f.oct3.value = "";
                    f.oct4.value = "";
                    f.snm1.value = "";
                    f.snm2.value = "";
                    f.snm3.value = "";
                    f.snm4.value = "";
                    f.snm1a.value = "";
                    f.snm2a.value = "";
                    f.snm3a.value = "";
                    f.snm4a.value = "";
                    f.snm1c.value = "";
                    f.snm2c.value = "";
                    f.snm3c.value = "";
                    f.snm4c.value = "";
                    f.snm1d.value = "";
                    f.snm2d.value = "";
                    f.snm3d.value = "";
                    f.snm4d.value = "";
                    f.snm1e.value = "";
                    f.snm2e.value = "";
                    f.snm3e.value = "";
                    f.snm4e.value = "";
                    f.oct1a.value = "";
                    f.oct2a.value = "";
                    f.oct3a.value = "";
                    f.oct4a.value = "";
                    f.oct1b.value = "";
                    f.oct2b.value = "";
                    f.oct3b.value = "";
                    f.oct4b.value = "";
                    f.hex1b.value = "";
                    f.hex2b.value = "";
                    f.hex3b.value = "";
                    f.hex4b.value = "";
                    f.bin1b.value = "";
                    f.bin2b.value = "";
                    f.bin3b.value = "";
                    f.bin4b.value = "";
                    f.nw1a.value = "";
                    f.nw2a.value = "";
                    f.nw3a.value = "";
                    f.nw4a.value = "";
                    f.node1a.value = "";
                    f.node2a.value = "";
                    f.node3a.value = "";
                    f.node4a.value = "";
                    f.nwclass.value = "";
                    f.nwclass1.value = "";
                    f.subsuper.value = "";
                    f.nwquant.value = "";
                    f.nodequant.value = "";
                    f.snmbits.value = "";
                    f.broad1a.value = "";
                    f.broad2a.value = "";
                    f.broad3a.value = "";
                    f.broad4a.value = "";
                    f.snmbitsc.value = "";
                    f.dec1b.value = "";
                }
                document.getElementById('ClearAll').addEventListener('click', () => {
                    ClearAll(form)
                })

                function listsubnets(f) {
                    compute(f);
                    if (f.nwclass.value != "Illegal") {
                        let SubnetWindow = window.open("", "SubnetWindow", "width=600px,scrollbars=yes,menubar=yes,status=yes,resizable=yes");
                        SubnetWindow.document.write("<h1>网络列表<\/h1>");
                        let networks = f.nwquant.value;
                        let nodes = f.nodequant.value + 2;
                        SubnetWindow.status = "正在生成表格";
                        if (f.subsuper.value == "子网是") {
                            var count = 0;
                            SubnetWindow.status = "正在生成表格";
                            if (f.nwclass1.value == "C类网") {
                                SubnetWindow.document.write("<h2>(网络 " + f.nw1a.value + "." + f.nw2a.value + "." + f.nw3a.value + ".0，掩码");
                                SubnetWindow.document.write(" " + f.snm1.value + "." + f.snm2.value + "." + f.snm3.value + "." + f.snm4.value + ")<\/h2>");
                                SubnetWindow.document.write("<table border=1>");
                                SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络<\/b><\/td><td colspan=2 align=center><b>主机<\/b><\/td><td rowspan=2 align=center><b>广播地址<\/b><\/td><\/tr>");
                                SubnetWindow.document.write("<tr><td align=center><b>起始<\/b><\/td><td align=center><b>结束<\/b><\/td><\/tr>");
                                nodes = ((256 / networks));
                                for (var i = 0; i < 256; i = i + nodes) {
                                    j = i + 1;
                                    let topi = (i + nodes - 1) & 255;
                                    let topj = topi - 1;
                                    if (networks == 128) {
                                        j = i;
                                        topi = (i + nodes - 1) & 255;
                                        topj = topi;
                                    }
                                    SubnetWindow.document.write("<tr><td>" + f.oct1.value + "." + f.oct2.value + "." + f.oct3.value + "." + i + "<\/td><td>" + f.oct1.value + "." + f.oct2.value + "." + f.oct3.value + "." + j + "<\/td><td>" + f.oct1.value + "." + f.oct2.value + "." + f.oct3.value + "." + topj + "<\/td><td>" + f.oct1.value + "." + f.oct2.value + "." + f.oct3.value + "." + topi + "<\/td><\/tr>");
                                }
                            }
                            if (f.nwclass1.value == "B类网") {
                                SubnetWindow.document.write("<h2>(网络 " + f.nw1a.value + "." + f.nw2a.value + ".0.0，掩码");
                                SubnetWindow.document.write(" " + f.snm1.value + "." + f.snm2.value + "." + f.snm3.value + "." + f.snm4.value + ")<\/h2>");
                                SubnetWindow.document.write("<table border=1>");
                                SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络<\/b><\/td><td colspan=2 align=center><b>主机<\/b><\/td><td rowspan=2 align=center><b>广播地址<\/b><\/td><\/tr>");
                                SubnetWindow.document.write("<tr><td align=center><b>起始<\/b><\/td><td align=center><b>结束<\/b><\/td><\/tr>");
                                nodes = ((65536 / networks));
                                for (var i = 0; i < 65536; i = i + nodes) {
                                    count = count + 1;
                                    i4 = i & 255;
                                    i3 = (i / 256) & 255;
                                    j = i4 + 1;
                                    topi4 = ((i + nodes) - 1) & 255;
                                    topi3 = (((i + nodes) - 1) / 256) & 255;
                                    topj = topi4 - 1;
                                    if (networks == 32768) {
                                        j = i4;
                                        topi4 = (i + nodes - 1) & 255;
                                        topj = topi4;
                                    }
                                    SubnetWindow.document.write("<tr><td>" + f.oct1.value + "." + f.oct2.value + "." + i3 + "." + i4 + "<\/td><td>" + f.oct1.value + "." + f.oct2.value + "." + i3 + "." + j + "<\/td><td>" + f.oct1.value + "." + f.oct2.value + "." + topi3 + "." + topj + "<\/td><td>" + f.oct1.value + "." + f.oct2.value + "." + topi3 + "." + topi4 + "<\/td><\/tr>");
                                    if ((count == 256) && (networks > 512)) {
                                        SubnetWindow.document.write("<tr><td>..<\/td><td>..<\/td><td>..<\/td><td>..<\/td><\/tr>");
                                        i = 65536 - (count * nodes);
                                    }
                                }
                            }
                            if (f.nwclass1.value == "A类网") {
                                SubnetWindow.document.write("<h2>(网络 " + f.nw1a.value + ".0.0.0，掩码");
                                SubnetWindow.document.write(" " + f.snm1.value + "." + f.snm2.value + "." + f.snm3.value + "." + f.snm4.value + ")<\/h2>");
                                SubnetWindow.document.write("<table border=1>");
                                SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络<\/b><\/td><td colspan=2 align=center><b>主机<\/b><\/td><td rowspan=2 align=center><b>广播地址<\/b><\/td><\/tr>");
                                SubnetWindow.document.write("<tr><td align=center><b>起始<\/b><\/td><td align=center><b>结束<\/b><\/td><\/tr>");
                                nodes = ((16777216 / networks));
                                for (var i = 0; i < 16777216; i = i + nodes) {
                                    count = count + 1;
                                    i4 = i & 255;
                                    i3 = (i / 256) & 255;
                                    i2 = (i / 65536) & 255;
                                    j = i4 + 1;
                                    topi4 = ((i + nodes) - 1) & 255;
                                    topi3 = (((i + nodes) - 1) / 256) & 255;
                                    topi2 = (((i + nodes) - 1) / 65536) & 255;
                                    topj = topi4 - 1;
                                    if (networks == 8388608) {
                                        j = i4;
                                        topi4 = (i + nodes - 1) & 255;
                                        topj = topi4;
                                    }
                                    SubnetWindow.document.write("<tr><td>" + f.oct1.value + "." + i2 + "." + i3 + "." + i4 + "<\/td><td>" + f.oct1.value + "." + i2 + "." + i3 + "." + j + "<\/td><td>" + f.oct1.value + "." + topi2 + "." + topi3 + "." + topj + "<\/td><td>" + f.oct1.value + "." + topi2 + "." + topi3 + "." + topi4 + "<\/td><\/tr>");
                                    if ((count == 256) && (networks > 512)) {
                                        SubnetWindow.document.write("<tr><td>..<\/td><td>..<\/td><td>..<\/td><td>..<\/td><\/tr>");
                                        i = 16777216 - (count * nodes);
                                    }
                                }
                            }
                        }
                        if (f.subsuper.value == "Supernetted") {
                            SubnetWindow.document.write("<h2>(网络 " + f.nw1a.value + "." + f.nw2a.value + "." + f.nw3a.value + ".0，掩码");
                            SubnetWindow.document.write(" " + f.snm1.value + "." + f.snm2.value + "." + f.snm3.value + "." + f.snm4.value + ")<\/h2>");
                            SubnetWindow.document.write("<table border=1>");
                            SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络<\/b><\/td><td colspan=2 align=center><b>主机<\/b><\/td><td rowspan=2 align=center><b>广播地址<\/b><\/td><\/tr>");
                            SubnetWindow.document.write("<tr><td align=center><b>起始<\/b><\/td><td align=center><b>结束<\/b><\/td><\/tr>");
                            i = f.nw4a.value + 1;
                            j = f.broad4a.value - 1;
                            SubnetWindow.document.write("<tr><td>" + f.nw1a.value + "." + f.nw2a.value + "." + f.nw3a.value + "." + f.nw4a.value + "<\/td><td>" + f.nw1a.value + "." + f.nw2a.value + "." + f.nw3a.value + "." + i + "<\/td><td>" + f.broad1a.value + "." + f.broad2a.value + "." + f.broad3a.value + "." + j + "<\/td><td>" + f.broad1a.value + "." + f.broad2a.value + "." + f.broad3a.value + "." + f.broad4a.value + "<\/td><\/tr>");
                        }
                        SubnetWindow.document.write("<\/table>");
                        SubnetWindow.status = "完成";
                    }
                }
                document.getElementById('listsubnets').addEventListener('click', () => {
                    listsubnets(form)
                })
                function compute2(f) {
                    var cf = 1;
                    if (f.cf[1].checked == "1") cf = f.cf[1].value;
                    if (f.cf[2].checked == "1") cf = f.cf[2].value;
                    if (f.cf[3].checked == "1") cf = f.cf[3].value;
                    if (code == "MSIE") {
                        var node = f.node.value;
                        var nw = f.network.value;
                        if (node > 0) {
                            nw = 0;
                            f.network.options.selectedIndex = 0;
                            node = eval(eval(node));
                        }
                    } else {
                        var i = f.node.selectedIndex;
                        var node = parseInt(f.node.options[i].value);
                        var j = f.network.selectedIndex;
                        var nw = parseInt(f.network.options[j].value);
                        if (node > 0) {
                            nw = 0;
                            f.network.options.selectedIndex = 0;
                            node = eval(eval(node));
                        }
                    }
                    if ((nw == 0) && (node == 0)) nw = 1;
                    var power2 = 2;
                    if (f.oct1.value > 255) f.oct1.value = 255;
                    if (f.oct2.value > 255) f.oct2.value = 255;
                    if (f.oct3.value > 255) f.oct3.value = 255;
                    if (f.oct4.value > 255) f.oct4.value = 255;
                    if ((f.oct1.value > 0) && (f.oct1.value < 127)) f.nwclass.value = "A类网";
                    if ((f.oct1.value > 127) && (f.oct1.value < 192)) f.nwclass.value = "B类网";
                    if ((f.oct1.value > 191) && (f.oct1.value < 224)) f.nwclass.value = "C类网";
                    if ((f.oct1.value < 1) || (f.oct1.value > 223)) {
                        f.nwclass.value = "Illegal";
                        f.nwclass1.value = "";
                        f.subsuper.value = "";
                        f.nwquant.value = 0;
                        f.nodequant.value = 0;
                        f.snm1.value = 0;
                        f.snm2.value = 0;
                        f.snm3.value = 0;
                        f.snm4.value = 0;
                        f.snmbits.value = 0;
                    }
                    if (((f.nwclass.value == "A类网") && (cf == 1)) || ((cf == 2) && (f.nwclass.value != "Illegal"))) {
                        if (nw >= 1) node = 16777216 / nw;
                        var nwtemp;
                        if (node > 16777216) {
                            f.nwclass1.value = "";
                            nw = 1073741824 / node;
                            nwtemp = nw;
                            f.snm1.value = (~((64 / nw) - 1) & 255);
                            f.snm2.value = 0;
                            f.snm3.value = 0;
                            f.snm4.value = 0;
                            f.subsuper.value = "Supernetted";
                            nw = 1;
                        } else {
                            f.nwclass1.value = "A类网";
                            nw = 16777216 / node;
                            nwtemp = nw;
                            f.snm1.value = 255;
                            f.snm2.value = (~((256 / nw) - 1) & 255);
                            f.snm3.value = (~((65536 / nw) - 1) & 255);
                            f.snm4.value = (~((16777216 / nw) - 1) & 255);
                            f.subsuper.value = "子网是";
                            power2 = power2 + 6;
                        }
                        while (nwtemp > 1) {
                            nwtemp = nwtemp / 2;
                            power2 = power2 + 1;
                        }
                        f.nodequant.value = node;
                        f.nwquant.value = nw;
                        f.snmbits.value = "/" + power2;
                    }
                    if (((f.nwclass.value == "B类网") && (cf == 1)) || ((cf == 3) && (f.nwclass.value != "Illegal"))) {
                        if (nw > 32768) nw = 32768;
                        if (nw >= 1) node = 65536 / nw;
                        var nwtemp;
                        if (node > 65536) {
                            f.nwclass1.value = "";
                            nw = 1073741824 / node;
                            nwtemp = nw;
                            f.snm1.value = (~((64 / nw) - 1) & 255);
                            f.snm2.value = (~((16384 / nw) - 1) & 255);
                            f.snm3.value = 0;
                            f.snm4.value = 0;
                            f.subsuper.value = "Supernetted";
                            nw = 1;
                        } else {
                            f.nwclass1.value = "B类网";
                            nw = 65536 / node;
                            nwtemp = nw;
                            f.snm1.value = 255;
                            f.snm2.value = 255;
                            f.snm3.value = (~((256 / nw) - 1) & 255);
                            f.snm4.value = (~((65536 / nw) - 1) & 255);
                            f.subsuper.value = "子网是";
                            power2 = power2 + 14;
                        }
                        while (nwtemp > 1) {
                            nwtemp = nwtemp / 2;
                            power2 = power2 + 1;
                        }
                        f.nodequant.value = node;
                        f.nwquant.value = nw;
                        f.snmbits.value = "/" + power2;
                    }
                    if (((f.nwclass.value == "C类网") && (cf == 1)) || ((cf == 4) && (f.nwclass.value != "Illegal"))) {
                        if (nw > 128) nw = 128;
                        if (nw >= 1) node = 256 / nw;
                        var nwtemp;
                        if (node > 256) {
                            f.nwclass1.value = "";
                            nw = 1073741824 / node;
                            nwtemp = nw;
                            f.snm1.value = (~((64 / nw) - 1) & 255);
                            f.snm2.value = (~((16384 / nw) - 1) & 255);
                            f.snm3.value = (~((4194304 / nw) - 1) & 255);
                            f.snm4.value = 0;
                            f.subsuper.value = "Supernetted";
                            nw = 1;
                        } else {
                            f.nwclass1.value = "C类网";
                            nw = 256 / node;
                            nwtemp = nw;
                            f.snm1.value = 255;
                            f.snm2.value = 255;
                            f.snm3.value = 255;
                            f.snm4.value = (~((256 / nw) - 1) & 255);
                            f.subsuper.value = "子网是";
                            power2 = power2 + 22;
                        }
                        while (nwtemp > 1) {
                            nwtemp = nwtemp / 2;
                            power2 = power2 + 1;
                        }
                        f.nodequant.value = node;
                        f.nwquant.value = nw;
                        f.snmbits.value = "/" + power2;
                    }
                    f.snm1a.value = f.snm1.value;
                    f.snm2a.value = f.snm2.value;
                    f.snm3a.value = f.snm3.value;
                    f.snm4a.value = f.snm4.value;
                    f.oct1a.value = f.oct1.value;
                    f.oct2a.value = f.oct2.value;
                    f.oct3a.value = f.oct3.value;
                    f.oct4a.value = f.oct4.value;
                    f.oct1b.value = f.oct1.value;
                    f.oct2b.value = f.oct2.value;
                    f.oct3b.value = f.oct3.value;
                    f.oct4b.value = f.oct4.value;
                    compute(f);
                    compute3(f);
                    f.snm1c.value = f.snm1.value;
                    f.snm2c.value = f.snm2.value;
                    f.snm3c.value = f.snm3.value;
                    f.snm4c.value = f.snm4.value;
                    computeSNMA(f);
                    f.snm1d.value = f.snm1.value;
                    f.snm2d.value = f.snm2.value;
                    f.snm3d.value = f.snm3.value;
                    f.snm4d.value = f.snm4.value;
                    computeINV1(f);
                    if (((f.nw1a.value == 0) && (f.nw2a.value == 0) && (f.nw3a.value == 0) && (f.nw4a.value == 0)) || ((f.broad1a.value == 255) && (f.broad2a.value == 255) && (f.broad3a.value == 255) && (f.broad4a.value == 255))) {
                        f.nwclass.value = "Illegal";
                        f.nwclass1.value = "";
                        f.subsuper.value = "";
                        f.nwquant.value = 0;
                        f.nodequant.value = 0;
                        f.snm1.value = 0;
                        f.snm2.value = 0;
                        f.snm3.value = 0;
                        f.snm4.value = 0;
                        f.snmbits.value = 0;
                    }
                }
                document.getElementById('compute2').addEventListener('click', () => {
                    compute2(form)
                })

                function compute(f) {
                    if (f.oct1a.value > 255) f.oct1a.value = 255;
                    if (f.oct2a.value > 255) f.oct2a.value = 255;
                    if (f.oct3a.value > 255) f.oct3a.value = 255;
                    if (f.oct4a.value > 255) f.oct4a.value = 255;
                    if (f.snm1a.value > 255) f.snm1a.value = 255;
                    if (f.snm2a.value > 255) f.snm2a.value = 255;
                    if (f.snm3a.value > 255) f.snm3a.value = 255;
                    if (f.snm4a.value > 255) f.snm4a.value = 255;
                    f.nw1a.value = eval(f.snm1a.value & f.oct1a.value);
                    f.nw2a.value = eval(f.snm2a.value & f.oct2a.value);
                    f.nw3a.value = eval(f.snm3a.value & f.oct3a.value);
                    f.nw4a.value = eval(f.snm4a.value & f.oct4a.value);
                    f.node1a.value = eval(~f.snm1a.value & f.oct1a.value);
                    f.node2a.value = eval(~f.snm2a.value & f.oct2a.value);
                    f.node3a.value = eval(~f.snm3a.value & f.oct3a.value);
                    f.node4a.value = eval(~f.snm4a.value & f.oct4a.value);
                    f.broad1a.value = ((f.nw1a.value) ^ (~f.snm1a.value) & 255);
                    f.broad2a.value = ((f.nw2a.value) ^ (~f.snm2a.value) & 255);
                    f.broad3a.value = ((f.nw3a.value) ^ (~f.snm3a.value) & 255);
                    f.broad4a.value = ((f.nw4a.value) ^ (~f.snm4a.value) & 255);
                }
                document.getElementById('compute').addEventListener('click', () => {
                    compute(form)
                })

                function compute3(f) {
                    if (f.oct1b.value > 255) f.oct1b.value = 255;
                    if (f.oct2b.value > 255) f.oct2b.value = 255;
                    if (f.oct3b.value > 255) f.oct3b.value = 255;
                    if (f.oct4b.value > 255) f.oct4b.value = 255;
                    f.bin1b.value = d2b(f.oct1b.value);
                    f.bin2b.value = d2b(f.oct2b.value);
                    f.bin3b.value = d2b(f.oct3b.value);
                    f.bin4b.value = d2b(f.oct4b.value);
                    f.hex1b.value = d2h(f.oct1b.value);
                    f.hex2b.value = d2h(f.oct2b.value);
                    f.hex3b.value = d2h(f.oct3b.value);
                    f.hex4b.value = d2h(f.oct4b.value);
                    f.dec1b.value = eval(f.oct1b.value * 16777216) + eval(f.oct2b.value * 65536) + eval(f.oct3b.value * 256) + eval(f.oct4b.value);
                }
                document.getElementById('compute3').addEventListener('click', () => {
                    compute3(form)
                })

                function compute4(f) {
                    f.oct1b.value = b2d(f.bin1b.value);
                    f.oct2b.value = b2d(f.bin2b.value);
                    f.oct3b.value = b2d(f.bin3b.value);
                    f.oct4b.value = b2d(f.bin4b.value);
                    f.hex1b.value = d2h(f.oct1b.value);
                    f.hex2b.value = d2h(f.oct2b.value);
                    f.hex3b.value = d2h(f.oct3b.value);
                    f.hex4b.value = d2h(f.oct4b.value);
                    f.dec1b.value = eval(f.oct1b.value * 16777216) + eval(f.oct2b.value * 65536) + eval(f.oct3b.value * 256) + eval(f.oct4b.value);
                }
                document.getElementById('compute4').addEventListener('click', () => {
                    compute4(form)
                })

                function compute5(f) {
                    f.oct1b.value = h2d(f.hex1b.value);
                    f.oct2b.value = h2d(f.hex2b.value);
                    f.oct3b.value = h2d(f.hex3b.value);
                    f.oct4b.value = h2d(f.hex4b.value);
                    f.bin1b.value = d2b(f.oct1b.value);
                    f.bin2b.value = d2b(f.oct2b.value);
                    f.bin3b.value = d2b(f.oct3b.value);
                    f.bin4b.value = d2b(f.oct4b.value);
                    f.dec1b.value = eval(f.oct1b.value * 16777216) + eval(f.oct2b.value * 65536) + eval(f.oct3b.value * 256) + eval(f.oct4b.value);
                }
                document.getElementById('compute5').addEventListener('click', () => {
                    compute5(form)
                })

                function compute6(f) {
                    f.oct1b.value = f.dec1b.value >>> 24;
                    f.oct2b.value = (f.dec1b.value << 8) >>> 24;
                    f.oct3b.value = (f.dec1b.value << 16) >>> 24;
                    f.oct4b.value = (f.dec1b.value << 24) >>> 24;
                    f.bin1b.value = d2b(f.oct1b.value);
                    f.bin2b.value = d2b(f.oct2b.value);
                    f.bin3b.value = d2b(f.oct3b.value);
                    f.bin4b.value = d2b(f.oct4b.value);
                    f.hex1b.value = d2h(f.oct1b.value);
                    f.hex2b.value = d2h(f.oct2b.value);
                    f.hex3b.value = d2h(f.oct3b.value);
                    f.hex4b.value = d2h(f.oct4b.value);
                }
                document.getElementById('compute6').addEventListener('click', () => {
                    compute6(form)
                })

                function computeSNMA(f) {
                    f.snm1c.value = snmcorrect(f.snm1c.value);
                    if (f.snm1c.value < 255) {
                        f.snm2c.value = 0;
                        f.snm3c.value = 0;
                        f.snm4c.value = 0;
                    } else {
                        f.snm2c.value = snmcorrect(f.snm2c.value);
                        if (f.snm2c.value < 255) {
                            f.snm1c.value = 255;
                            f.snm3c.value = 0;
                            f.snm4c.value = 0;
                        } else {
                            f.snm3c.value = snmcorrect(f.snm3c.value);
                            if (f.snm3c.value < 255) {
                                f.snm1c.value = 255;
                                f.snm2c.value = 255;
                                f.snm4c.value = 0;
                            } else {
                                f.snm4c.value = snmcorrect(f.snm4c.value);
                            }
                        }
                    }
                    let bits = 0;
                    bits = bits + d2bits(f.snm1c.value);
                    bits = bits + d2bits(f.snm2c.value);
                    bits = bits + d2bits(f.snm3c.value);
                    bits = bits + d2bits(f.snm4c.value);
                    f.snmbitsc.value = bits;
                }
                document.getElementById('computeSNMA').addEventListener('click', () => {
                    computeSNMA(form)
                })

                function computeSNMB(f) {
                    if (f.snmbitsc.value < 0) f.snmbitsc.value = 0;
                    if (f.snmbitsc.value > 32) f.snmbitsc.value = 32;
                    f.snm1c.value = bits2d(f.snmbitsc.value);
                    f.snm2c.value = bits2d(f.snmbitsc.value - 8);
                    f.snm3c.value = bits2d(f.snmbitsc.value - 16);
                    f.snm4c.value = bits2d(f.snmbitsc.value - 24);
                }
                document.getElementById('computeSNMB').addEventListener('click', () => {
                    computeSNMB(form)
                })

                function computeINV1(f) {
                    f.snm1e.value = ~(f.snm1d.value) & 255;
                    f.snm2e.value = ~(f.snm2d.value) & 255;
                    f.snm3e.value = ~(f.snm3d.value) & 255;
                    f.snm4e.value = ~(f.snm4d.value) & 255;
                }
            },
            getDetail(ip) {
                this.loading = true
                this.$http.get('https://nodeapi.yunser.com/ip?ip=' + ip).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.loading = false
                        this.detail = data
                    },
                    response => {
                        this.loading = false
                        console.log(response)
                    })
            },
            query() {
                if (!this.ip) {
                    this.$message({
                        text: '请输入 IP'
                    })
                    return
                }
                this.getDetail(this.ip)
            }
        }
    }
</script>

<style lang="scss" scoped>
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
