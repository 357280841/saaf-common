/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-02 18:00:16 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-11 15:01:34
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
                <!-- <FormItem label="快捷回复">
                    <Select v-model="formItem.select">
                        <Option value="s">New</Option>
                    </Select>
                </FormItem> -->
                <FormItem label="选择节点" v-if="type == 'retrial'">
                    <Select v-model="formItem.taskItem" clearable>
                        <Option v-for="row in typeObj.retrial.nodes" :value="row.taskDefinitionId">{{row.taskName}}</Option>
                    </Select>
                </FormItem>

                <FormItem label="助审人" v-if="type == 'addSubTask'">
                    <SaafSelectModal
                        type="radio" 
                        :showInput="true"
                        :selectConfig="{
                            title: '姓名或职位',
                            key: 'keyword'
                        }" 
                        :tableConfig="{
                            findApi: 'baseOrgStructureService_findAllInfoOnlyOnePosition',
                            searchParams:{
                                // systemCode: '',
                            },
                            tableColumns: [
                            {
                                title: '工号',
                                key: 'employeeNumber',
                                sortable:true
                            },{
                                title: '姓名',
                                key: 'personName',
                                sortable:true
                            },{
                                title: '职位',
                                key: 'positionName',
                                sortable:true
                            }]
                        }" 
                        :value="typeObj.addSubTask.member.personName"
                        @on-change="addTaskMember"></SaafSelectModal>
                </FormItem>
            </Form>
            <div class="description" v-if="typeObj[type].description"><span class="red strong">备注：</span>{{typeObj[type].description}}</div>
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
                reject:{
                    title: '驳回',
                    description: '只能将单据驳回到提交人，提交人再次提交后将重新调用系统中配置的审批流，所有审批人都需要进行审批操作。',
                },
                retrial: {
                    title: '驳回重审',
                    description: '可将单据驳回到当前操作人之前的任意节点，包括提交人和审批人。被驳回人再次提交（或审批通过）时可提交（或审批通过）到之前已经审批过的任意节点。',
                    nodes: [
                        // {taskDefinitionId:1,taskName:'111'},{taskDefinitionId:2,taskName:'222'}
                    ]
                },
                message: {
                    title: '发消息'
                },
                pass: {
                    title: '审批'
                },
                addSubTask: {
                    title: '增加助审',
                    member: {
                        personName: ''
                    }
                }
            },
            formItem: {
                opinion:''
            }
        }
      },
      mounted () {
      },
      methods: {
          // 提交
          submit(){
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.submit){
                  this.pageHeader.flowFunctionList.submit()
              }else{
                  throw '请绑定提交程序'
              }
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
          },
          findTaskNodes(){
              flowTool.findTaskNodes({
                  taskId: '',
                  type: 1
              }).then(res=>{
                  this.typeObj.retrial.nodes = res.data
              })
          },
          addTaskMember(row){
              this.typeObj.addSubTask.member = row
          }
      },
      watch:{
      }
    }
</script>
<style lang="less" scoped>
.description {
    font-size: 14px;
    background-color: #f1f1f1;
    padding: 10px;
}
</style>
