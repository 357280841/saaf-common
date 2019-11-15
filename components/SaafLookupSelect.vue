/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-12 17:55:42 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-10-26 17:31:39
 */



<template>
    <div>
        <Select style="width:100%" clearable :value="value" @on-change="formChange" :disabled="disabled" :readonly="readonly" :required="required" transfer>
            <Option v-for="(item,key) in $store.state.user.lookup[code]" :value="item.lookupCode" :key="key">{{ item.meaning }}</Option>
        </Select>
    </div>
    
</template>
<script>

export default {
    props:{
        code: String,
        disabled: Boolean,
        required: Boolean,
        readonly: Boolean,
        value: String
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