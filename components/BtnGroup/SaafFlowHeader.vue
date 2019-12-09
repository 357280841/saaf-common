/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-02 18:00:16 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-09 15:23:29
 */



<template>
    <div>
        <SaafListPageHeader ref="SaafListPageHeader">
            <div style="display: inline-block">
                <slot name="btnGroup"></slot>
            </div>
            <SaafResourceButton
            style="display: inline-block;" 
            :menuId="$route.query.menuId"
            :respId="$route.query.respId"
            :functionList="pageHeader.functionList">
            </SaafResourceButton>

            <ButtonGroup size="small" class="pl10">
                <Button size="small" @click="submit"><span class="pr5 fa fa-paper-plane-o"></span>提交</Button>
                <Button size="small" @click="revoke"><span class="pr5 fa fa-undo"></span>撤回</Button>
                <Button size="small" @click="pass"><span class="pr5 fa fa-gavel"></span>通过</Button>
                <Button size="small" @click="reject"><span class="pr5 fa fa-undo"></span>驳回</Button>
                <Button size="small" @click="retrial"><span class="pr5 fa fa-undo"></span>驳回重审</Button>
                <Button size="small" @click="message"><span class="pr5 fa fa-comment-o"></span>发消息</Button>
                <Button size="small" @click="addSubTask"><span class="pr5 fa fa-address-book-o"></span>增加助审</Button>
            </ButtonGroup>
        </SaafListPageHeader>
    </div>
</template>
<script>
    import {btnGroupTool, flowTool} from 'saaf-common'
    // import {btnGroupTool} from 'saaf-flow'
    export default {
      props:{
          pageHeader: {
              type: Object,
              required: false
          },
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
          submit(){
              
          },
          // 撤回
          revoke(){
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.revoke){
                  this.pageHeader.flowFunctionList.revoke()
              }else{
                  flowTool.revoke()
              }
          },
          // 驳回
          reject(){
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.reject){
                  this.pageHeader.flowFunctionList.reject()
              }else{
                  flowTool.reject()
              }
          },
          // 驳回重审
          retrial(){
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.retrial){
                  this.pageHeader.flowFunctionList.retrial()
              }else{
                  flowTool.retrial()
              }
          },
          // 发消息
          message(){
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.message){
                  this.pageHeader.flowFunctionList.message()
              }else{
                  flowTool.message()
              }
          },
          // 通过
          pass(){
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.pass){
                  this.pageHeader.flowFunctionList.pass()
              }else{
                  flowTool.pass()
              }
          },
          // 增加助审
          addSubTask(){
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.addSubTask){
                  this.pageHeader.flowFunctionList.addSubTask()
              }else{
                  flowTool.addSubTask()
              }
          }
      },
      watch:{
      }
    }
</script>
<style lang="less" scoped>

</style>
