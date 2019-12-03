/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-17 16:28:12 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-03 10:53:40
 */

<template>
  <div ref="SaafSuperTableContent">
    <SaafListPageHeader ref="SaafListPageHeader" :title="tableConfig.pageHeader.title">
      <ButtonGroup size="small" class="mr10" v-if="!tableConfig.pageHeader.hideQueryBtn">
        <Button size="small" @click="getFirstPage()"><span class="fa fa-search pr5"></span>{{$i18n.t('搜索')}}</Button>
        <Button size="small" @click="$refs.SaafParamForm.resetFormValue()"><span class="fa fa-undo pr5"></span>{{$i18n.t('重置')}}</Button>
      </ButtonGroup>
      <div style="display: inline-block">
        <slot name="btnGroup"></slot>
      </div>
        <SaafResourceButton
        style="display: inline-block;" 
        :menuId="$route.query.menuId"
        :respId="$route.query.respId"
        :functionList="functionList">
        </SaafResourceButton>
    </SaafListPageHeader>

    <!-- <SaafListHeader :pageHeader="tableConfig.pageHeader" :currentRow="currentRow">
      <template v-slot:btnGroup><slot name="btnGroup"></slot></template>
    </SaafListHeader> -->

    <SaafParamForm ref="SaafParamForm" :items="tableConfig.searchItems">
      <template v-for="(item,key) in tableConfig.searchItems" v-slot:[key]="scope">
        <slot :name="key" v-if="item.type === 'slot'" v-bind="scope"></slot>
      </template>
    </SaafParamForm>

    <!-- <SaafTable
     ref="SaafTable"
     :height="tableHeight"
     :columns="tableConfig.tableColumns"
     :events="tableConfig.tableEvents"
     :list="tableList" 
     :page.sync="tablePage"
     :getData="getData"
     :loading="loading"
     :currentRow.sync="currentRow" /> -->

    <SaafSimpleTable
     ref="SaafSimpleTable" 
     :tableConfig="tableConfig" 
     :currentRow.sync="currentRow"
     :saafParamForm="$refs.SaafParamForm"></SaafSimpleTable>

    <SaafDelModalV2 ref="SaafDelModalV2"></SaafDelModalV2>
  </div>
</template>

<script>
  
import {fetch,api} from '@/page/pageConfig/index'
import { Promise, resolve, reject } from 'q';
import { fetchTool, pageTool, tabsTool, gridButton, getUrl, btnGroupTool } from '../../index'

export default {
    props:{
      tableConfig:{
        type: Object,
        required: true,
      }
    },
    data(){
      return {
        tableList: [],
        tablePage: pageTool.createrPage(),
        tabsTool: tabsTool,
        currentRow: null,
        tableHeight: null,
        functionList: {},
        loading:false
      }
    },
    created(){
    },
    mounted(){
      this.formatFunctionList()
    },
    methods:{
      refreshData(){
        // this.getPage({
        //   ...this.tablePage,
        //   nextIndex: 1,
        // })
        this.$refs.SaafSimpleTable.refreshData()
      },
      getData(){
        // this.getPage(this.tablePage)
        this.$refs.SaafSimpleTable.getData(this.$refs.SaafSimpleTable.tablePage)
      },
      getPage(page){
        this.$refs.SaafSimpleTable.getPage(page)
        // this.$refs.SaafTable.$refs.Table.clearCurrentRow()
        // this.resetTableHeight()
        // this.$refs.SaafTable.scrollTop()
        // return new Promise((resolve, reject)=>{
        //   this.loading = true
        //   fetchTool.postSimpleness(api[this.tableConfig.findApi],{
        //     ...this.$refs.SaafParamForm.getParams(),
        //     ...this.tableConfig.searchParams,
        //     pageIndex: page.nextIndex,
        //     pageRows: page.pageSize
        //   }).then(res=>{
        //     this.loading = false
        //     this.tableList = res.data
        //     this.tablePage = pageTool.update(res,this.tablePage)
        //     resolve()
        //   }).catch(err=>{
        //     this.loading = false
        //     this.$Message.error(error.msg)
        //     reject(err)
        //   })
        // })
      },
      getFirstPage(){
        // this.$refs.SaafTable.getFirstPage()
        this.$refs.SaafSimpleTable.getFirstPage()
      },
      resetTableHeight(){
        setTimeout(()=>{
          // this.tableHeight = this.$store.state.system.screenHeight-this.$refs.SaafListPageHeader.$el.clientHeight-this.$refs.SaafParamForm.$el.clientHeight-this.$refs.SaafTable.$refs.Page.$el.clientHeight-20-15
        })
      },
      formatFunctionList(){
        let val = this.tableConfig.pageHeader.functionList
        let functionList = {}
        for(let key in val){
          if((key == 'btnModify') && !val[key].disabled){
            functionList[key] = {
              fun: val[key],
              disabled: ()=>{ return this.currentRow ? false : true },
              ...val[key]
            }
          }else if((key == 'btnDel') && !val[key].disabled){
            let fun = null
            if(val[key] && val[key].fun){
              fun = val[key].fun
            }else{
              fun = val[key]
            }
            functionList[key] = {
              fun: ()=>{
                this.$refs.SaafDelModalV2.open(()=>{fun();this.currentRow=null;})
              },
              disabled: ()=>{ return this.currentRow ? false : true },
              ...val[key]
            }
          }else{
            functionList[key] = val[key]
          }
        }
        this.functionList = functionList
      },
    },
    watch:{
      currentRow(val){
        this.$emit('update:currentRow',val)
      },
      // "$store.state.system.screenHeight":function(val){
      //   this.resetTableHeight()
      // },
      "tableConfig.pageHeader.functionList": function(val){
        this.formatFunctionList()
      }
    }
}
</script>

<style lang="less" scoped>
</style>

