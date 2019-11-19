/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-17 16:28:12 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-19 14:26:25
 */


<template>
    <div>

        <Table
          ref="Table"
          :height="height"
          :columns="tableColumns"
          :data="list"
          :loading="loading"
          highlight-row
          @on-current-change="currentChange"
          column
          border
          size="small"></Table>
          <!-- stripe -->

        <Page 
          ref="Page"
          class="pt10"
          show-elevator 
          show-sizer 
          show-total
          :current="page.pageIndex"
          :total="page.count" 
          :page-size="page.pageSize" 
          @on-change="pageChange" 
          @on-page-size-change="pageSizeChange" /> 
    </div>
</template>
<script>
import { setTimeout } from 'timers';
import pageTool from '../tool/pageTool'
    export default {
      props:{
        columns:{
          type: Array,
          required: true
        },
        page:{
          type: Object,
          required: false
        },
        list:{
          type: Array,
          required: true
        },
        getData:{
          type: Function,
          required: true
        },
        currentRow:{
          type: Object,
          required: false
        },
        height:{
          type: Number,
          required: false
        },
        loading:{
          type: Boolean,
          required: false,
          default: false
        }
      },
      components: {
      },
      data () {
        return {
          tableColumns:[]
        }
      },
      created(){
      },
      mounted () {
        this.initTable()
      },
      methods: {
        initTable(){
          let column = []
          column = [
            {
              title: '序号',
              type: 'index',
              width: 60,
              align: 'center'
            },
          ]
          this.columns.map((item)=>{
            if(item.showType == 'YN'){
              column.push({
                ...item,
                align: item.align?item.align:'center',
                render: (h, params) => {
                  let flag = params.row[item.key] == 'Y'? true : false
                    return h('div', [
                        h('Icon', {
                            props: {
                              size: '18',
                              color: flag?'#2eb52e':'#848484',
                              type: flag?'ios-checkmark-circle':'ios-close-circle'
                            }
                        })
                    ]);
                }
              })
            }else{
              column.push(item)
            }
          })
          this.tableColumns = column
        },
        currentChange(currentRow,oldCurrentRow){
          this.$emit('update:currentRow',currentRow)
        },
        pageChange(index){
          this.page.nextIndex = index
          this.$emit("update:page", this.page)
          this.getData(this.page)
        },
        pageSizeChange(size){
          this.page.pageSize = size
          this.page.pageIndex = 1
          this.page.nextIndex = 1
          this.$emit("update:page", this.page)
          // if(this.current == 1){
          //   this.page.nextIndex = 1
          //   this.$emit("update:page", this.page)
          // }
          this.getData(this.page)
        },
        getFirstPage(){
          this.$refs.Table.$el.querySelector('.ivu-table-body').scrollTop = 0
          this.page.pageIndex = 1
          this.page.nextIndex = 1
          this.$emit("update:page", this.page)
          this.getData(this.page)
        },
        refreshPage(){
          this.page.nextIndex = this.pageIndex
          this.$emit("update:page", this.page)
          this.getData(this.page)
        },
      },
      watch:{
        columns: {
          handler: function (val, oldVal) {
            this.initTable()
          },
          deep: true
        },
      }
    }
</script>
