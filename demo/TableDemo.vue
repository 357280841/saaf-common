/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-12 14:06:20 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-15 09:37:39
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
    <SaafTable></SaafTable>
    <SaafSuperTable ref="SaafSuperTable" :tableConfig="tableConfig" :currentRow.sync="currentRow">
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
            :value="scope.formValue.personName"
            @on-change="changeRadio($event,scope)"></SaafSelectModal>
      </template>
    </SaafSuperTable>

  </div>
</template>

<script>
import { tabsTool, getUrl } from "saaf-common";
export default {
    data() {
      return {
        tableConfig:{
          findApi: 'baseLookupTypeService_find',
          searchParams:{
            // systemCode: 'BASE',
          },
          pageHeader:{
            title: this.$t('list'),
            functionList:{
              btnNew: this.add,
              btnModify: this.modify
            }
          },
          searchItems:{
            lookupTypeLike:{
              label:this.$t("lookup type"), type:"text", change:(val)=>{
                // console.log(val)
                console.log(this.$refs.SaafSuperTable.searchParams)
              }
            },
            meaningLike:{
              label:this.$t("meaning"), type:"text"
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
          },
          tableColumns: [
            {
              title: this.$t("lookup type"),
              key: 'lookupType',
              sortable:true
            },{
              title: this.$t("level"),
              key: 'customizationLevelMeaning',
              sortable:true
            },{
              title: this.$t("system code"),
              key: 'systemName',
              sortable:true
            },{
              title: this.$t("description"),
              key: 'description',
              sortable:true
            },{
              title: this.$t("meaning"),
              key: 'meaning',
              sortable:true
            },{
              title: this.$t("parent type"),
              key: 'pLookupType',
              sortable:true
            }
          ]
        },
        currentRow:null
      }
    },
    computed: {

    },
    created() {
    },
    mounted(){
      this.getFirstPage()
      // this.$refs.SaafSuperTable.getData()
      // setTimeout(()=>{
      //   this.$refs.SaafSuperTable.refreshData()
      // },5000)
    },
    methods: {
      getFirstPage(){
        this.$refs.SaafSuperTable.getFirstPage()
      },
      add(){

        tabsTool.openTab({url: `/LookupTypeEdit?id=0`, name:`${this.$t('dict edit')}:0`})
      },
      modify(){
        tabsTool.openTab({url: `/LookupTypeEdit?id=${this.currentRow.lookupTypeId}`, name:`${this.$t('dict edit')}:${this.currentRow.lookupTypeId}`})
      },
      changeRadio(data, scope){
        scope.formValue.personId = data.personId
        scope.formValue.personName = data.personName
      }
    }
}
</script>

<style lang="less" scoped>

</style>
