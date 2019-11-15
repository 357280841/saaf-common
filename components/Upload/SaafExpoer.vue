/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-13 11:48:59 
 * @Last Modified by:   zhengxiaowen 
 * @Last Modified time: 2019-11-13 11:48:59 
 */



<template>
    <div>SaafFileUpload</div>
</template>
<script>

export default {
    props:{
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