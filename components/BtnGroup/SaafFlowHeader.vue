/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-02 18:00:16 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-10 15:24:16
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
                <Button size="small" @click="open('submit')"><span class="pr5 fa fa-paper-plane-o"></span>提交</Button>
                <Button size="small" @click="open('revoke')"><span class="pr5 fa fa-undo"></span>撤回</Button>
                <Button size="small" @click="open('pass')"><span class="pr5 fa fa-gavel"></span>通过</Button>
                <Button size="small" @click="open('reject')"><span class="pr5 fa fa-undo"></span>驳回</Button>
                <Button size="small" @click="open('retrial')"><span class="pr5 fa fa-undo"></span>驳回重审</Button>
                <Button size="small" @click="open('message')"><span class="pr5 fa fa-comment-o"></span>发消息</Button>
                <Button size="small" @click="open('addSubTask')"><span class="pr5 fa fa-address-book-o"></span>增加助审</Button>
            </ButtonGroup>
        </SaafListPageHeader>
        <Modal
        v-if="type"
        v-model="modal"
        :title="typeObj[type].title"
        @on-ok="ok">
            <Form :model="formItem" :label-width="80">
                <FormItem label="意见">
                    <Input v-model="formItem.opinion" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder=""></Input>
                </FormItem>
                <FormItem label="快捷回复">
                    <Select v-model="formItem.select">
                        <Option value="s">New</Option>
                    </Select>
                </FormItem>
            </Form>
            <div>备注：{{typeObj[type].description}}</div>
        </Modal>
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
            modal: false,
            type: '',
            typeObj: {
                submit:{
                    title: '通过',
                    description: '',
                },
                reject:{
                    title: '驳回',
                    description: '只能将单据驳回到提交人，提交人再次提交后将重新调用系统中配置的审批流，所有审批人都需要进行审批操作。',
                },
            },
            formItem: {
                opinion:''
            }
        }
      },
      mounted () {
      },
      methods: {
          submit(){
              alert(1)
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
          },
          open(type){
              this.type = type
              this.modal = true
          },
          ok(){
              this[this.type]()
          }
      },
      watch:{
      }
    }
</script>
<style lang="less" scoped>

</style>
