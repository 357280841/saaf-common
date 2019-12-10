/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-17 16:28:12 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-10 15:44:24
 */

<template>
  <div ref="SaafModalTableList">
    <div style="margin-bottom: 10px" v-if="selectConfig.key">
      <Input v-model="value" search enter-button @on-enter="getFirstPage" @on-search="getFirstPage" :placeholder="selectConfig.title" />
    </div>
    <div v-if="type=='checkbox'&&selectList.length>0" style="margin-bottom: 10px; border: #2d8cf0 solid 1px; padding:5px;">
      <span style="color: #2d8cf0; font-weight: bold;">选中：</span>
      <Tag color="primary" v-for="(item,key) of selectList" :key="key" closable @click.native="closeTag(item,key)" @on-close="closeTag(item,key)">{{item[selectConfig.show]}}</Tag>
    </div>
    <SaafTable
     ref="SaafTable"
     :height="tableHeight"
     :columns="tableConfig.tableColumns"
     :list="tableList" 
     :page="tablePage"
     :getData="getData"
     :currentRow.sync="currentRow"
     :loading="loading"
     />
  </div>
</template>

<script>
  
import {fetch,api} from '@/page/pageConfig/index'
import { Promise, resolve, reject } from 'q';
import { fetchTool, pageTool, tabsTool, gridButton, getUrl } from '../../index'

export default {
    props:{
      type: {
        type: String,
        required: true
      },
      tableConfig:{
        type: Object,
        required: true,
      },
      selectConfig:{
        type: Object,
        required: true,
      },
    },
    data(){
      return {
        tableList: [],
        tablePage: pageTool.createrPage(),
        searchParams: {},
        tabsTool: tabsTool,
        currentRow: null,
        tableHeight: null,
        value: '',
        selectList: [],
        loading: false
      }
    },
    created(){
    },
    mounted(){
    },
    methods:{
      refreshRow(){
        this.currentRow = null
        this.selectList = []
      },
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
        if(!api[this.tableConfig.findApi]){
          throw `tableConfig.findApi参数有误，api中没找到${this.tableConfig.findApi}`
        }
        this.resetTableHeight()
        this.$refs.SaafTable.scrollTop()
        this.$refs.SaafTable.$refs.Table.clearCurrentRow()

          let params = {
            ...this.searchParams,
            ...this.tableConfig.searchParams,
            pageIndex: page.nextIndex,
            pageRows: page.pageSize,
          }
          if(this.selectConfig.key){
            params[this.selectConfig.key] = this.value
          }
          
        return new Promise((resolve, reject)=>{
          this.loading = true
          fetchTool.postSimpleness(api[this.tableConfig.findApi],params).then(res=>{
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
        // return new Promise((resolve, reject)=>{
          // let params = {
          //   ...this.searchParams,
          //   ...this.tableConfig.searchParams,
          //   pageIndex: page.nextIndex,
          //   pageRows: page.pageSize,
          // }
          // if(this.selectConfig.key){
          //   params[this.selectConfig.key] = this.value
          // }
        //   fetch[this.tableConfig.findApi](params).then(res=>{
        //     this.tableList = res.data
        //     this.tablePage = pageTool.update(res,this.tablePage)
        //     resolve()
        //   }).catch(err=>reject(err))
        // })
      },
      getFirstPage(){
        this.$refs.SaafTable.getFirstPage()
      },
      resetTableHeight(){
        setTimeout(()=>{
          this.tableHeight = this.$store.state.system.screenHeight-this.$refs.SaafTable.$refs.Page.$el.clientHeight-200
        })
      },
      // onSelectChange(selection){
      //   // this.selectList = selection
      // },
      // onSelect(selection, row){
        
      // }
      pushData(row){
        let flag = true
        this.selectList.map((item)=>{
          if(item[this.selectConfig.pk] == row[this.selectConfig.pk]){
            flag = false
          }
        })
        if(flag){
          this.selectList.push(row)
        }
      },
      closeTag(item, key){
        this.selectList.splice(key, 1)
      }
    },
    watch:{
      currentRow(val){
        if(val){
          if(this.type==='radio'){
            this.$emit('update:currentRow',val)
          } else if(this.type === 'checkbox'){
            this.pushData(val)
          }
        }else{
          if(this.type==='radio'){
            this.$emit('update:currentRow',val)
          }
        }
      },
      "$store.state.system.screenHeight":function(val){
        this.resetTableHeight()
      }
    }
}
</script>

<style lang="less" scoped>
.select{
  margin-right: 10px;
  background: #ccc;
  display:inline-block;
}
</style>

