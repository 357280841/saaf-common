/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-31 16:24:45 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-04 16:07:43
 */


<template>
  <div><Tree :data="treeData" @on-select-change="selectChange"></Tree></div>
</template>
<script>
    import {fetch} from "@/page/pageConfig"
    export default {
      props:{
        value: String
      },
      model: {
        prop: 'value',
        event: 'event'
      },
      components: {
      },
      data () {
        return {
          // list: [],
          treeData: [],
          visible:false
        }
      },
      created(){
        this.organizationFind()
      },
      mounted () {
      },
      methods: {
        checkChild(list,currentItem){
          list.map((item,key)=>{
            if(!currentItem.children){
              currentItem.children = []
            }
            if(currentItem.orgId === item.parentOrgId){
              item.title = item.orgName
              item.expand = false
              currentItem.children.push(item)
              this.checkChild(list,item)
            }
          })
        },
        organizationFind(){
          fetch.organizationFind({
            deleteFlag: 0,
            treeType: '业务组织',
            pageIndex: 1,
            pageRows: 9999
          }).then(res=>{
            let tree = []
            // this.list = JSON.parse(JSON.stringify(res.data))
            res.data.map((item,key)=>{
              if(item.parentOrgId === 0){
                item.title = item.orgName
                item.expand = true
                tree.push(item)
                this.checkChild(res.data,item)
              }
            })
            this.treeData = tree
            this.$emit('load-after')
          })
        },
        selectChange(list,row){
          this.$emit('on-change',list,row)
        }
      },
      watch:{
      }
    }
</script>

<style lang="less" scoped>
.tree-box {
  max-height: 300px;
}
</style>