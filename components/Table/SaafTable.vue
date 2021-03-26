/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-17 16:28:12 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-25 09:14:21
 */


<template>
    <div ref="SaafTable">
        <Table
          ref="Table"
          :height="height"
          :columns="tableColumns"
          :data="list"
          :loading="loading"
          :row-class-name="rowClassFunc"
          highlight-row
          @on-current-change="currentChange"
          column
          border
          size="small"
          @on-select="onSelect"
          @on-select-cancel="onSelectCancel"
          @on-select-all="onSelectAll"
          @on-select-all-cancel="onSelectAllCancel"
          @on-selection-change="onSelectionChange"
          @on-sort-change="onSortChange"
          @on-filter-change="onFilterChange"
          @on-row-click="onRowClick"
          @on-row-dblclick="onRowDblclick"
          ></Table>
          
        <Page 
          v-if="simple"
          ref="Page"
          class="pt10"
          :simple="simple"
          :show-elevator="!simple"
          :show-sizer="!simple"
          :show-total="!simple"
          :current="page.pageIndex"
          :total="page.count" 
          :page-size="page.pageSize" 
          @on-change="pageChange" 
          @on-page-size-change="pageSizeChange"
           /> 

          <Page 
          v-if="!simple"
          ref="Page"
          class="pt10"
          show-elevator
          show-sizer
          show-total
          :current="page.pageIndex"
          :total="page.count" 
          :page-size="page.pageSize" 
          @on-change="pageChange" 
          @on-page-size-change="pageSizeChange"
           /> 
           
    </div>
</template>
<script>
// import { setTimeout } from 'timers';
// import pageTool from '../../tool/pageTool'
import systemHook from '@/config/systemHook'

    export default {
      props:{
        columns:{
          type: Array,
          required: true
        },
        events:{
          type: Object,
          required: false,
          // default:{}
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
        },
        rowClassFunc:{
          type: Function,
          required: false
        },
        indexColumn:{
          type: Object,
          required: false
        }
      },
      components: {
      },
      data () {
        return {
          tableColumns:[],
          simple: false,
          indexObj: {}
        }
      },
      created() {
          if(!this.indexColumn){
              this.indexObj = {
                  show: systemHook.showTableIndex === undefined || systemHook.showTableIndex === null ? true : systemHook.showTableIndex,
                  fixed: systemHook.fixedTableIndex === undefined || systemHook.fixedTableIndex === null ? false : systemHook.fixedTableIndex,
                  continue: systemHook.continueTableIndex === undefined || systemHook.continueTableIndex === null ? true : systemHook.continueTableIndex,
              }
          }

        // console.log(this.$refs.SaafTable.clientWidth)
      },
      mounted () {
        this.initTable()
        if(this.$refs.SaafTable.clientWidth < 500 && this.$refs.SaafTable.clientWidth!=0){
          this.simple = true
        }
      },
      methods: {
        initTable(){
          let column = [];
          if(this.indexObj && this.indexObj.show){
              if(this.indexObj.fixed){
                  column = this.indexObj.continue 
                  ? [
                    {
                      title: this.$i18n.t("序号"),
                      key: "index",
                      width: 70,
                      align: "center",
                      fixed: "left",
                      render: (h, params) => {
                        return h(
                          "span",
                          {},
                          (this.page.curIndex - 1) * this.page.pageSize +
                            params.index +
                            1
                        );
                      },
                    },
                  ] 
                  : [
                      {
                          title: this.$i18n.t('序号'),
                          type: 'index',
                          width: 70,
                          align: 'center',
                          fixed: "left"
                      },
                    ]
              }else{
                  column = this.indexObj.continue 
                  ? [
                      {
                        title: this.$i18n.t("序号"),
                        key: "index",
                        width: 70,
                        align: "center",
                        render: (h, params) => {
                          return h(
                            "span",
                            {},
                            (this.page.curIndex - 1) * this.page.pageSize +
                              params.index +
                              1
                          );
                        },
                      },
                    ]
                  : [
                      {
                          title: this.$i18n.t('序号'),
                          type: 'index',
                          width: 70,
                          align: 'center'
                      },
                    ]
              }
          }


          this.columns.map((item)=>{
            if(item.showType == 'YN'){
              column.push({
                ...item,
                align: item.align?item.align:'center',
                render: (h, params) => {
                  let flag = params.row[item.key] == 'Y' || params.row[item.key] === true ? true : false
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
          this.$emit('on-current-change',currentRow,oldCurrentRow)
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
        scrollTop(){
          this.$refs.Table.$el.querySelector('.ivu-table-body').scrollTop = 0
        },

        onSelect(selection, row){
          if(this.events && this.events['on-select']){
            this.events['on-select'](selection, row)
          }
        },
        onSelectCancel(selection, row){
          if(this.events && this.events['on-select-cancel']){
            this.events['on-select-cancel'](selection, row)
          }
        },
        onSelectAll(selection){
          if(this.events && this.events['on-select-all']){
            this.events['on-select-all'](selection)
          }
        },
        onSelectAllCancel(selection){
          if(this.events && this.events['on-select-all-cancel']){
            this.events['on-select-all-cancel'](selection)
          }
        },
        onSelectionChange(selection){
          if(this.events && this.events['on-selection-change']){
            this.events['on-selection-change'](selection)
          }
        },


        onSortChange(column, key, order){
          if(this.events && this.events['on-sort-change']){
            this.events['on-sort-change'](column, key, order)
          }
        },
        onFilterChange(selection){
          if(this.events && this.events['on-filter-change']){
            this.events['on-filter-change'](selection)
          }
        },
        onRowClick(selection, index){
          if(this.events && this.events['on-row-click']){
            this.events['on-row-click'](selection, index)
          }
        },
        onRowDblclick(selection){
          if(this.events && this.events['on-row-dblclick']){
            this.events['on-row-dblclick'](selection)
          }
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
