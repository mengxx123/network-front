<template>
    <my-page title="IP 转数字 - 帮助" backable>
        <ui-article class="article">
            <h2>说明</h2>
            <p>转换后需要数字前加上<code>http://</code>才能访问。</p>
            <p>转换前：<code>http://119.29.115.211</code></p>
            <p>转换后：<code>http://1998418899</code></p>
            <b>原理</b>
            <p>只要把 IP 中的这 4 组数字分别转换成十六进制然后把这些十六进制的数据组合成一组，最后把这组数据转换成十进制。</p>
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th style="text-align:center">IP段</th>
                    <th style="text-align:center">十六进制</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align:center">182</td>
                        <td style="text-align:center">B6</td>
                    </tr>
                    <tr>
                        <td style="text-align:center">254</td>
                        <td style="text-align:center">FE</td>
                    </tr>
                    <tr>
                        <td style="text-align:center">223</td>
                        <td style="text-align:center">DF</td>
                    </tr>
                    <tr>
                        <td style="text-align:center">192</td>
                        <td style="text-align:center">C0</td>
                    </tr>
                </tbody>
            </table>
        </ui-article>
    </my-page>
</template>
