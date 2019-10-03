<template>
    <my-page title="User Agent 生成" :page="page">
        <div class="common-container container">
            <div class="form-group" id="ua_info">
                <div>
                    <ui-text-field class="input-ua" v-model="number" label="数量" hintText="1" />
                </div>
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
    // import UserAgent from 'user-agents'
    const randomUseragent = require('random-useragent')

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
                let result = []
                for (let i = 0; i < (this.number || 1); i++) {
                    // const userAgent = new UserAgent()
                    // console.log(userAgent.toString());
                    // result.push(userAgent.toString())
                    result.push(randomUseragent.getRandom())
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
