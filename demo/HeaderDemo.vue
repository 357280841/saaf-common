/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-02 17:59:25 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-04 17:22:54
 */


<template>
  <div>
    <div class="pb30">
      <h3 class="pb10">列表页使用 SaafListHeader</h3>
      <SaafListHeader
       :pageHeader="pageHeaderList"
       @find="find"
       @reset="reset"></SaafListHeader>
    </div>

    <div class="pb30">
      <h3 class="pb10">编辑页使用 pageHeaderEdit</h3>
      <SaafEditHeader :pageHeader="pageHeaderEdit"></SaafEditHeader>
    </div>


    <div class="pb30">
      <h3 class="pb10">流程页使用 SaafFlowHeader</h3>
      <SaafFlowHeader :pageHeader="pageHeaderFlow" :flow="flow"></SaafFlowHeader>
    </div>
    
    
  </div>
</template>

<script>
import { tabsTool, getUrl } from "saaf-common";
export default {
    data() {
      return {
        pageHeaderList:{
          functionList:{
            btnNew:()=>{alert('btnNew')},
            btnModify:()=>{alert('btnModify')},
            btnDel:()=>{alert('btnDel')}
          }
        },
        pageHeaderEdit:{
          functionList:{
            btnSave: ()=>{alert('btnSave')}
          }
        },
        pageHeaderFlow:{
          functionList:{
            btnSave: ()=>{alert('btnSave')}
          }
        },
        flow:{
          processDefinitionKey: '',
          businessKey: '',
          responsibilityId: ''
        }
      }
    },
    computed: {

    },
    created() {
    },
    mounted(){
      
    },
    methods: {
      find(){
        alert('find')
      },
      reset(){
        alert('reset')
      }
    }
}
</script>

<style lang="less" scoped>

</style>
