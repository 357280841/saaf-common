/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-02 18:00:16 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2020-07-30 20:24:01
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
                <Button size="small" v-if="stateTree.submit" @click="submit"><span class="pr5 fa fa-paper-plane-o"></span>提交</Button>
                <Button size="small" v-if="stateTree.revoke" @click="revoke"><span class="pr5 fa fa-undo"></span>撤回</Button>
                <Button size="small" v-if="stateTree.pass" @click="open('pass')"><span class="pr5 fa fa-gavel"></span>通过</Button>
                <Button size="small" v-if="stateTree.reject" @click="open('reject')"><span class="pr5 fa fa-undo"></span>驳回</Button>
                <Button size="small" v-if="stateTree.retrial" @click="open('retrial')"><span class="pr5 fa fa-undo"></span>驳回重审</Button>
                <Button size="small" v-if="stateTree.message" @click="open('message')"><span class="pr5 fa fa-comment-o"></span>发消息</Button>
                <Button size="small" v-if="stateTree.addSubTask" @click="open('addSubTask')"><span class="pr5 fa fa-address-book-o"></span>增加助审</Button>
            </ButtonGroup>
        </SaafListPageHeader>
        <Modal
        v-if="type"
        v-model="modal"
        :title="typeObj[type].title"
        @on-ok="ok">
            <Form ref="formValidate" :model="formItem" :rules="ruleValidate" :label-width="80">
                <FormItem label="意见" prop="opinion">
                    <Input v-model="formItem.opinion" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder=""></Input>
                </FormItem>
                <!-- <FormItem label="快捷回复">
                    <Select v-model="formItem.select">
                        <Option value="s">New</Option>
                    </Select>
                </FormItem> -->
                <FormItem label="接收人" prop="receiverId" v-if="type == 'message'">
                    <Select v-model="formItem.receiverId" clearable>
                        <Option v-for="item in historyActivities" :value="item.userId" :key="item.userId">{{item.userName}} - {{item.userFullName}}</Option>
                    </Select>
                </FormItem>
                <FormItem label="选择节点" prop="taskDefinitionId" v-if="type == 'retrial'">
                    <Select v-model="formItem.taskDefinitionId" clearable>
                        <Option v-for="row in typeObj.retrial.nodes" :value="row.taskDefinitionId" :key="row.taskDefinitionId">{{row.taskName}}</Option>
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
    import {mapState} from 'vuex'
    import {btnGroupTool, flowTool} from 'saaf-common'
    // import {btnGroupTool} from 'saaf-flow'
    export default {
      props:{
          pageHeader: {
              type: Object,
              required: false
          },
          flow: Object,
          historyActivities: {
              type: Array,
              default() {
                  return []
              }
          }
      },
      components: {
      },
      computed: {
        ...mapState({
            currentResp: state => state.user.currentResp,
            userInfo: state => state.user.userInfo,
        }),
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
            stateTree:{
                submit: false,
                revoke: false,
                pass: false,
                reject: false,
                retrial: false,
                message: false,
                addSubTask: false
            },
            isStartUser: false,
            formItem: {
                opinion:'',
                receiverId: '',
                subTaskerId: '',
                taskDefinitionId: ''
            },
            ruleValidate: {
                opinion: [
                    {
                        required: true,
                        message: '请输入内容',
                        trigger: 'change'
                    }
                ],
                receiverId: [
                    {
                        required: true,
                        message: '请选择接收人',
                        trigger: 'blur'
                    }
                ],
                taskDefinitionId: [
                    {
                        required: true,
                        message: '请选择节点人',
                        trigger: 'blur'
                    }
                ]
            }
        }
      },
      mounted () {
          this.getFlowInstance(true);
      },
      methods: {
          //查询流程实例
          getFlowInstance(isInit, action){
              flowTool.getFlowInstance({
                  procDefKey: this.flow.processDefinitionKey,
                  businessKey: this.flow.businessKey,
                  processInstanceId: this.flow.processInstanceId
              }).then(res => {
                  if(res.data && res.data.variables) {
                      this.flow.processDefinitionKey = res.data.procDefKey;
                      this.flow.businessKey = res.data.businessKey;
                      this.flow.processInstanceId = res.data.procInstId;
                      this.flow.auditStatus=res.data.result;
                      let resArr = JSON.parse(res.data.variables)
                      let startUserId = 0
                      resArr.map(item => {
                          if(item.name === 'startUserId') {
                              startUserId = item.value
                          }
                      })
                      if(startUserId == this.userInfo.userId) {
                          this.isStartUser = true
                      }
                  }
                  if(!isInit){
                      if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.afterMethod){
                          this.pageHeader.flowFunctionList.afterMethod(action);
                      }
                  }
                  this.checkState();
              })
          },
          // 提交
          submit(){
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.submit){
                  this.pageHeader.flowFunctionList.submit();
              }else{
                  throw '请绑定提交程序'
              }
          },
          // 撤回
          revoke(){
              let action = 'revoke';
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.befortMethod){
                  let result = this.pageHeader.flowFunctionList.befortMethod(action);
                  if(result === false){
                      return;
                  }
              }

              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.revoke){
                  this.pageHeader.flowFunctionList.revoke()
              }else{
                  flowTool.revoke({
                      processInstanceId: this.flow.processInstanceId
                  }).then(res => {
                      if(res.status === 'S') {
                        this.$Message.success({
                            content: '操作成功',
                            duration: 2
                        });
                        this.getFlowInstance(false, action);
                      }
                  }).catch(err => {
                      this.$Message.error(err.msg);
                  })
              }
          },
          // 驳回
          reject(){
              let action = 'reject';
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.befortMethod){
                  let result = this.pageHeader.flowFunctionList.befortMethod(action);
                  if(result === false){
                      return;
                  }
              }

              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.reject){
                  this.pageHeader.flowFunctionList.reject()
              }else{
                  flowTool.reject({
                    properties: {
                        opinion: this.formItem.opinion,
                        option: "RJ",
                        menucode: "DB"
                    },
                    responsibilityId: this.flow.responsibilityId,
                    taskId: this.flow.taskId,
                    saveonly: false
                  }).then(res => {
                      if(res.status === 'S') {
                        this.$Message.success({
                            content: '操作成功',
                            duration: 2
                        });
                          this.getFlowInstance(false, action);
                      }
                  }).catch(err => {
                      this.$Message.error(err.msg);
                  })
              }
          },
          // 驳回重审
          retrial(){
              let action = 'retrial';
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.befortMethod){
                  let result = this.pageHeader.flowFunctionList.befortMethod(action);
                  if(result === false){
                      return;
                  }
              }

              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.retrial){
                  this.pageHeader.flowFunctionList.retrial()
              }else{
                  flowTool.retrial({
                    properties: {
                        opinion: this.formItem.opinion,
                        option: "RT",
                        menucode: "DB",
                        taskDefinitionId: this.formItem.taskDefinitionId
                    },
                    responsibilityId: this.flow.responsibilityId,
                    taskId: this.flow.taskId,
                    saveonly: false
                  }).then(res => {
                      if(res.status === 'S') {
                        this.$Message.success({
                            content: '操作成功',
                            duration: 2
                        });
                          this.getFlowInstance(false, action);
                      }
                  }).catch(err => {
                      this.$Message.error(err.msg);
                  })
              }
          },
          // 发消息
          message(){
              let action = 'message';
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.befortMethod){
                  let result = this.pageHeader.flowFunctionList.befortMethod(action);
                  if(result === false){
                      return;
                  }
              }

              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.message){
                  this.pageHeader.flowFunctionList.message()
              }else{
                  let taskId = ''
                  this.historyActivities.map(item => {
                      if(item.userId === this.formItem.receiverId) {
                          taskId = item.taskId
                      }
                  })
                  let params = {
                      taskId: taskId,
                      type: 'COMMON',
                      receiverId: this.formItem.receiverId,
                      content: this.formItem.opinion
                  }
                  flowTool.message(params).then(res => {
                      if(res.status === 'S') {
                        this.$Message.success({
                            content: '操作成功',
                            duration: 2
                        });
                          if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.afterMethod){
                              this.pageHeader.flowFunctionList.afterMethod();
                          }
                      }
                  }).catch(err => {
                      this.$Message.error(err.msg);
                  })
              }
          },
          // 通过
          pass(){
              let action = 'pass';
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.befortMethod){
                  let result = this.pageHeader.flowFunctionList.befortMethod(action);
                  if(result === false){
                      return;
                  }
              }

              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.pass){
                  this.pageHeader.flowFunctionList.pass()
              }else{
                  flowTool.pass({
                    properties: {
                        opinion: this.formItem.opinion,
                        option: "Y",
                        menucode: "DB"
                    },
                    responsibilityId: this.flow.responsibilityId,
                    taskId: this.flow.taskId,
                    saveonly: false
                  }).then(res => {
                      if(res.status === 'S') {
                        this.$Message.success({
                            content: '操作成功',
                            duration: 2
                        });
                          this.getFlowInstance(false, action);
                      }
                  }).catch(err => {
                      this.$Message.error(err.msg);
                  })
              }
          },
          // 增加助审
          addSubTask(){
              let action = 'addSubTask';
              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.befortMethod){
                  let result = this.pageHeader.flowFunctionList.befortMethod(action);
                  if(result === false){
                      return;
                  }
              }

              if(this.pageHeader.flowFunctionList && this.pageHeader.flowFunctionList.addSubTask){
                  this.pageHeader.flowFunctionList.addSubTask()
              }else{
                  let taskName = ''
                  this.historyActivities.map(item => {
                      if(item.taskId === this.flow.taskId) {
                          taskName = item.taskName
                      }
                  })
                  let params = {
                      taskId: this.flow.taskId,
                      taskName: taskName,
                      description: this.formItem.opinion,
                      userId: this.formItem.subTaskerId
                  }
                  flowTool.addSubTask(params).then(res => {
                      if(res.status === 'S') {
                        this.$Message.success({
                            content: '操作成功',
                            duration: 2
                        });
                      }
                  }).catch(err => {
                      this.$Message.error(err.msg);
                  })
              }
          },
          open(type){
              type === 'pass' ? this.formItem.opinion = '审批通过' : this.formItem.opinion = ''
              this.type = type
              if(type === 'retrial') {
                  this.findTaskNodes()
              }
              this.modal = true
          },
          ok(){
              if(this.formValidate()) {
                  this[this.type]()
              } else {
                  this.$Message.error('请检查必填项')
              }
          },
          formValidate() {
              switch(this.type) {
                case 'pass':
                    return this.formItem.opinion ? true : false
                    break
                case 'reject':
                    return this.formItem.opinion ? true : false
                    break
                case 'message':
                    return this.formItem.opinion && this.formItem.receiverId ? true : false
                    break
                case 'addSubTask':
                    return this.formItem.opinion && this.formItem.subTaskerId ? true : false
                    break
                case 'retrial':
                    return this.formItem.opinion && this.formItem.taskDefinitionId ? true : false
                    break
                default: 
                    return false 
              }
          },
          findTaskNodes(){
              flowTool.findTaskNodes({
                  taskId: this.flow.taskId,
                  type: 1
              }).then(res=>{
                  this.typeObj.retrial.nodes = res.data
              })
          },
          addTaskMember(row){
              this.formItem.subTaskerId = row.userId
              this.typeObj.addSubTask.member = row
          },
          getStartUrl(){
              flowTool.getStartUrl(this.flow)
          },
          checkState(){
              for(let key in this.stateTree){
                  this.stateTree[key]=false
              }
              // 新建/草稿单据
              if(this.flow.auditStatus == 'DRAFT'){
                  this.stateTree.submit = true
              }
              // 驳回重新提交
              if(this.flow.auditStatus == 'REFUSAL' && this.isStartUser){
                  this.stateTree.submit = true
              }
              if(this.flow.auditStatus == 'APPROVAL'){
                if(this.isStartUser) {
                    this.stateTree.revoke = true
                    // this.stateTree.submit = true
                } else {
                    if(this.flow.taskId) {
                        this.stateTree = {
                            ...this.stateTree,
                            pass: true,
                            reject: true,
                            retrial: true,
                            message: true,
                            addSubTask: true,
                        }
                    }
                }
              }
          }
      },
      watch:{
        flow: {
          handler: function (val, oldVal) {
            this.checkState()
          },
          deep: true
        },
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
