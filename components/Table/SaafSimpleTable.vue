/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-27 14:02:55 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-03 14:49:18
 */

<template>
  <div ref="SaafSimpleTable">
    <SaafTable
     ref="SaafTable"
     :height="tableHeight"
     :columns="tableConfig.tableColumns"
     :events="tableConfig.tableEvents"
     :list="tableList" 
     :page.sync="tablePage"
     :getData="getData"
     :loading="loading"
     :currentRow.sync="currentRow"
     @on-current-change="onCurrentChange" />
  </div>
</template>

<script>
  
import {fetch,api} from '@/page/pageConfig/index'
import { Promise, resolve, reject } from 'q';
import { fetchTool, pageTool, tabsTool, gridButton, getUrl } from '../../index'

export default {
    props:{
      tableConfig:{
        type: Object,
        required: true,
      },
      height: String | Number
    },
    data(){
      return {
        tableList: [],
        tablePage: pageTool.createrPage(),
        tabsTool: tabsTool,
        currentRow: null,
        tableHeight: null,
        loading:false
      }
    },
    created(){
    },
    mounted(){
    },
    methods:{
      refreshData(){
        this.getPage({
          ...this.tablePage,
          nextIndex: 1,
        })
      },
      getData(){
        this.getPage(this.tablePage)
      },
      getPage(page){
        this.$refs.SaafTable.$refs.Table.clearCurrentRow()
        this.resetTableHeight()
        this.$refs.SaafTable.scrollTop()
        
        let paramForm = {}
        this.$emit('getParamForm',(val)=>{
          paramForm = val
        })
        return new Promise((resolve, reject)=>{
          this.loading = true
          // let paramForm = this.saafParamForm?this.saafParamForm.getParams():{}
          
          fetchTool.postSimpleness(api[this.tableConfig.findApi],{
            ...paramForm,
            ...this.tableConfig.searchParams,
            pageIndex: page.nextIndex,
            pageRows: page.pageSize
          }).then(res=>{
            this.loading = false
            this.tableList = res.data
            this.tablePage = pageTool.update(res,this.tablePage)
            resolve()
          }).catch(err=>{
            this.loading = false
            this.$Message.error(err.msg)
            reject(err)
          })
        })
      },
      getFirstPage(){
        this.$refs.SaafTable.getFirstPage()
      },
      resetTableHeight(){
        if(this.height){
            this.tableHeight = this.height
        }else{
            setTimeout(()=>{
                this.tableHeight = this.$store.state.system.screenHeight - $(this.$refs.SaafTable.$el).offset().top - 65
            })
        }
      },
      onCurrentChange(currentRow,oldCurrentRow){
        this.$emit('on-current-change',currentRow,oldCurrentRow)
      }
    },
    watch:{
      currentRow(val){
        this.$emit('update:currentRow',val)
      },
      "$store.state.system.screenHeight":function(val){
        this.resetTableHeight()
      },
    }
}
</script>

<style lang="less" scoped>
</style>