<template>
    <my-page title="Cron 表达式验证" :page="page">
        <div class="form-group">
            <ui-text-field  v-model="cron" label="Crontab 表达式" hintText="如：0 */12 * * *" />
        </div>
        <!--<div class="form-group">-->
            <!--开始时间-->
        <!--</div>-->
        <div class="form-group">
            <ui-text-field class="input-number"  v-model.number="number" label="执行次数" hintText="如：0 */12 * * *" />
            <span class="unit">次</span>
            <!--执行次数：<input type="number" v-model.number="number" readonly> 次-->
        </div>
        <div class="form-group">
            <ui-raised-button class="btn" label="执行" primary @click="run" />
        </div>
        <div class="loading" v-if="loading">记载中...</div>
        <div v-if="times.length">
            <div>执行结果：</div>
            <div>
                <ol class="time-list">
                    <li v-for="time in times">{{ time }}</li>
                </ol>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                cron: '0 */12 * * *',
                number: 10,
                times: [],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/cron/verification/help'
                        }
                    ]
                }
            }
        },
        mounted() {
        },
        methods: {
            updateTime(cron) {
                if (!this.cron) {
                    this.$message({
                        text: 'Crontab 表达式不能为空'
                    })
                    return
                }

                let num = (this.number > 50) ? 50 : this.number
                if (num < 1) {
                    this.number = num = 1
                }
                this.times = []
                this.loading = true
                let url = 'https://phpapi.yunser.com/cron.php?cron=' + this.cron + '&number=' + num
                this.$http.get(url).then(
                    response => {
                        let data = response.data
                        this.times = data.data
                        this.loading = false
                    },
                    response => {
                        console.log(response)
                        this.loading = false
                    })
            },
            run: function () {
                this.updateTime()
            }
        }
    }
</script>

<style scoped>
    .unit {
        position: relative;
        left: -16px;
    }
    .btn {
        margin-bottom: 16px;
    }
    .time-list {
        padding-left: 16px;
        list-style-type: decimal;
    }
    .time-list li {
        padding: 8px;
        list-style-type: decimal;
    }
</style>
