<template>
    <my-page title="Cron 表达式验证 - 帮助" backable>
        <ui-article class="article">
            <h2>介绍</h2>
            <p>熟悉 Unix 和 Linux 的朋友都知道 Crontab 表达式，通过 crontab 指令可以周期性调用或执行某个程序。</p>
            <p>但是大家写完 crontab 表达式后，心里总是担心表达式写的不对，又没法去验证。比如你的周期定的比较长，
                一天一周一月或者更久，那么等到那个时候通过去看程序是否运行来判断表达式的正确性是不实际的。</p>
            <p>这个工具就是用来校验 crontab 表达式的。这里你只需要输入你要执行的 crontab
                表达式<!--、开始时间-->和执行次数，就可以帮你计算出未来 n 次的时间。</p>
        </ui-article>
    </my-page>
</template>

<style scoped>
    .article {
        max-width: 800px;
    }
</style>
