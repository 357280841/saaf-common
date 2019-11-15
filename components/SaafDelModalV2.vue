/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-27 09:09:17 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-12 13:57:19
 */


<template>
    <div>
        <Modal v-model="modal" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>确认删除</span>
            </p>
            <div style="text-align:center">
                <slot name="content">删除数据谨慎操作</slot>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long @click="delData">删除</Button>
            </div>
        </Modal>
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
            modal: false,
            callback: null
        }
    },
    mounted () {

    },
    methods: {
        open(callback){
            this.callback = callback
            this.modal = true
        },
        close(){
            this.modal = false
        },
        delData(){
            this.close()
            this.callback()
        }
    }
}
</script>
<style lang="less" scoped>

</style>