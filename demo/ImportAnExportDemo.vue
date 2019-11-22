/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-06 14:10:06 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-14 11:13:23
 */



<template>
    <div>
        <Button @click="click">导入</Button>
        <SaafImportExcel v-model="show" :templetId="139"></SaafImportExcel>
    </div>
</template>
<script>

export default {
    props:{
    },
    components: {
    },
    data () {
        return {
            show: false
        }
    },
    mounted () {
    },
    methods: {
        click(){
            this.show = true
        }
    }
}
</script>
<style lang="less" scoped>

</style>