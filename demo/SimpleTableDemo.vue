/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-27 14:18:18 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-27 14:38:34
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
    

    <div>
        <div><Button @click="getFirstPage">查询</Button></div>
        <div class="p10">传入height参数，会根据参数固定table内容列；不传即自动根据屏幕剩余高度显示；</div>
    </div>

    <SaafSimpleTable class="mb30" ref="SaafSimpleTable" :height="100" :tableConfig="tableConfig" :currentRow.sync="currentRow"></SaafSimpleTable>

    <SaafSimpleTable ref="SaafSimpleTable2" :tableConfig="tableConfig" :currentRow.sync="currentRow"></SaafSimpleTable>
    

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
            aaa: '111',
            bbb: '222'
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
    },
    methods: {
      getFirstPage(){
        this.$refs.SaafSimpleTable.getFirstPage()
        this.$refs.SaafSimpleTable2.getFirstPage()
      },
    }
}
</script>

<style lang="less" scoped>

</style>
