<template>
    <div class="result" v-if="text">
        <ui-raised-button class="btn btn-copy" label="复制" />
    </div>
</template>

<script>
    const ClipboardJS = window.ClipboardJS

    export default {
        data() {
            return {
            }
        },
        props: {
            text: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            copyable: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.clipboard = new ClipboardJS('.btn-copy', {
                target(trigger) {
                    return trigger
                },
                text: trigger => {
                    return this.text
                }
            })
            this.clipboard.on('success', e => {
                this.$message({
                    type: 'success',
                    text: '已复制'
                })
                e.clearSelection()
            })
            this.clipboard.on('error', e => {
                console.error('Action:', e.action)
                console.error('Trigger:', e.trigger)
            })
        },
        destroyed() {
            this.clipboard.destroy()
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
</style>
