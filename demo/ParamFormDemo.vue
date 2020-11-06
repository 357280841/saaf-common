/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-05 15:02:02 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-15 09:36:54
 */


<i18n>
{
  "EN": {
    "list": "List",
    "query": "query",
    "lookup type": "lookup type",
    "meaning": "meaning",
    "system code": "system code",
    "level": "level",
    "description": "description",
    "parent type": "parent type",
    "dict edit": "dict edit"
  },
  "CN": {
    "list": "列表查询",
    "query": "查询",
    "lookup type": "快码类型",
    "meaning": "说明",
    "system code": "系统编码",
    "level": "应用层级",
    "description": "描述",
    "parent type": "父类型",
    "dict edit": "字典详情"
  }
}
</i18n>

<template>
  <div>

    <SaafParamForm ref="SaafParamForm" :items="searchItems">
        <template v-slot:personId="scope">
            <!-- {{scope.formValue}} -->
            <SaafSelectModal 
                slot="SaafSelectModal"
                type="radio" 
                :showInput="true"
                :selectConfig="{
                    title: '员工姓名',
                    key: 'personName'
                }" 
                :tableConfig="{
                    findApi: 'baseUsersService_findPagination',
                    searchParams:{
                        // systemCode: 'BASE',
                    },
                    tableColumns: [
                    {
                        title: '员工姓名',
                        key: 'personName',
                        sortable:true
                    },{
                        title: '员工编码',
                        key: 'employeeNumber',
                        sortable:true
                    }]
                }" 
                :value="scope.formValue.personName"
                @on-change="changeRadio($event,scope)"></SaafSelectModal>
        </template>
        <template v-slot:personIdA="scope">
            <!-- {{scope.formValue}} -->
            <SaafSelectModal 
                slot="SaafSelectModal"
                type="radio" 
                :showInput="true"
                :selectConfig="{
                    title: '员工姓名',
                    key: 'personName'
                }" 
                :tableConfig="{
                    findApi: 'baseUsersService_findPagination',
                    searchParams:{
                        // systemCode: 'BASE',
                    },
                    tableColumns: [
                    {
                        title: '员工姓名',
                        key: 'personName',
                        sortable:true
                    },{
                        title: '员工编码',
                        key: 'employeeNumber',
                        sortable:true
                    }]
                }" 
                :value="scope.formValue.personNameA"
                @on-change="changeRadioA($event,scope)"></SaafSelectModal>
        </template>
    </SaafParamForm>

    <div>
      <Button class="mr10" type="primary" @click="getParams()">打印表单数据</Button>
      <Button class="mr10" type="primary" @click="resetFormValue()">重置表单</Button>
    </div>

  </div>
</template>

<script>
import { tabsTool, getUrl } from "saaf-common";
export default {
    data() {
      return {
        searchItems:{
            lookupTypeLike:{
              label:this.$t("lookup type"), type:"text", change:(val)=>{
                // console.log(val)
                console.log(this.$refs.SaafParamForm.getParams())
              },
              value: 'testValue'
            },
            meaningLike:{
              label:this.$t("meaning"), type:"text"
            },
            start:{
              label:this.$t("start_date"), type:"datetime", value: '2020-02-02 10:00:00',change:()=>{
                this.searchItems.end.value = '2020-02-10 10:00:00'
                this.$refs.SaafParamForm.setFormValue(this.searchItems)
              }
            },
            end:{
              label:this.$t("end_date"), type:"datetime", value: ''
            },
            systemCode:{
              label:this.$t("system code"), type:"lookup", code: 'SYSTEM_CODE', value: 'BASE'
            },
            customizationLevel:{
              label:this.$t("level"), type:"lookup", code: 'CUSTOMIZATION_LEVEL'
            },
            personId:{
              label:"员工ID", type:"slot",
            },
            personIdA:{
              label:"员工IDA", type:"slot",
            },
          },
      }
    },
    computed: {

    },
    created() {
    },
    mounted(){
    },
    methods: {
      changeRadio(data, scope){
        scope.formValue.personId = data.personId
        scope.formValue.personName = data.personName
      },
      changeRadioA(data, scope){
        scope.formValue.personIdA = data.personId
        scope.formValue.personNameA = data.personName
      },
      getParams(){
        console.log(this.$refs.SaafParamForm.getParams())
      },
      resetFormValue(){
        this.$refs.SaafParamForm.resetFormValue()
      }
    }
}
</script>

<style lang="less" scoped>

</style>
