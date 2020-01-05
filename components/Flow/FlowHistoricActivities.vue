/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2020-01-05 11:54:44 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2020-01-05 12:50:57
 */


<template>
    <div>
        <h3>审批历史</h3>
        <div>
            <Table
                ref="Table"
                :height="height"
                :columns="tableColumns"
                :data="list"
                highlight-row
                column
                border
                size="small"
                ></Table>
        </div>
    </div>
</template>
<script>
import { flowTool } from "saaf-common"
    export default {
      props:{
        flow: Object
      },
      components: {
      },
      data () {
        return {
            height: 200,
            tableColumns:[{
              title: '节点名称',
              key: 'taskName',
              sortable:true
            },{
              title: '处理人',
              key: 'userFullName',
              sortable:true
            },{
              title: '处理结果',
              key: 'hisDetailOption',
              sortable:true
            },{
              title: '审批意见',
              key: 'hisDetailOpinion',
              sortable:true
            },{
              title: '审批开始时间',
              key: 'startTime',
              sortable:true
            },{
              title: '审批结束时间',
              key: 'endTime',
              sortable:true
            }],
            list: []
        }
      },
      created(){
          flowTool.findHistoricActivities({
              processInstanceId: this.flow.processInstanceId
          }).then(res=>{
              this.list = res.data
          })
      },
      mounted () {
      },
      methods: {
          
      }
    }
</script>
<style lang="less" scoped>
</style>
