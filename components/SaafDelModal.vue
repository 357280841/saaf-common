/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-27 09:09:17 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-10-17 10:38:19
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
                <Button type="error" size="large" long :loading="modal_loading" @click="delData">删除</Button>
            </div>
        </Modal>
    </div>
</template>
<script>

export default {
    props:{
        del:Function
    },
    components: {
    },
    data () {
        return {
            modal: false,
            modal_loading: false,
            params: null
        }
    },
    mounted () {

    },
    methods: {
        open(params){
            this.params = params
            this.modal = true
        },
        close(){
            this.modal = false
        },
        delData(){
            this.modal_loading = true
            this.del(this.params).then(res=>{
                this.modal_loading = false
                this.close()
            }).catch(err=>{
                this.modal_loading = false
                this.close()
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>