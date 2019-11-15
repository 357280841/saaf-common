/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-27 09:09:17 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-08 16:38:05
 */


<template>
    <DatePicker
        :format="format" 
        :type="type" 
        :disabled="disabled"
        :value="value"
        :options="options"
        @on-change="formChange"
        transfer></DatePicker>
</template>
<script>

export default {
    props:{
        format:{
            type: String,
            required: false,
            default: 'yyyy-MM-dd'
        },
        type:{
            type: String,
            required: false,
            default: 'date'
        },
        disabled:{
            type: Boolean,
            required: false,
            default: false
        },
        value: String,
        options: {
            type: Object,
            required: false
        }
    },
    model: {
        prop: 'value',
        event: 'event'
    },
    components: {
    },
    data () {
        return {
        }
    },
    mounted () {

    },
    methods: {
        formChange(val){
            this.$emit('event', val);
        }
    }
}
</script>
<style lang="less" scoped>

</style>