<template>
    <my-page title="IP 查询">
        <div class="card">
            本机 IP： <span class="strong">113.111.7.13</span>
        </div>
        <ui-article class="article ui-article">
            <h2>工具介绍</h2>
            <p>查看本地 IP 的一个小工具</p>

            <h2>相关信息</h2>
            <p><strong>电脑查看本机 IP 方法：</strong></p>
            <p>打开命令行（cmd），在里面输入 ipconfig。</p>
        </ui-article>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        width: 320px;
        padding: 16px;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        .strong {
            color: #ff4081;
            font-size: 24px;
        }
    }
</style>
