/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-31 16:46:53 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-28 16:00:46
 */


<template>
  <div>
    <div> 
      <h2 class="pb10">菜单树</h2>
      <div class="pb20">
        <div class="pb5">选择窗</div>
        <SaafTree 
        ref="SaafTree"
        :disabled="false"
        type='select'
        :config="{
          key: 'menuId',
          parentKey: 'menuParentId',
          name: 'menuName',
          api: 'MenuManager_findMenuList',
          params: {systemCode: 'BASE'}
        }"
        :value.sync="treeItem.menuId"
        :name.sync="treeItem.menuName"
        @load-after="loadAfterTree"
        @on-change="changeTree"></SaafTree>
        {{treeItem}}
      </div>
      <div class="mb50" style="height:500px; overflow: auto;">
        <div class="pb5">可选择树，返回3个参数，list：含父节点,rows：已勾选节点,current 当前项</div>
        <SaafTree 
        type='tree'
        :config="{
          key: 'menuId',
          parentKey: 'menuParentId',
          name: 'menuName',
          api: 'MenuManager_findMenuList',
          params: {systemCode: 'BASE'}
        }"
        @on-change="checkboxChange"
        :checkbox="true"></SaafTree>
        <!-- {{treeRow}} -->
      </div>
    </div>
    <div>
      <h2 class="pb10">部门树</h2>
      <div class="pb20">
        <div class="pb5">正常操作</div>
        <SaafSelectDepartmentTree 
          v-model="row.orgName" 
          @on-change="change"></SaafSelectDepartmentTree>
      </div>
      <div class="pb20">
        <div class="pb5">@load-after函数在查询结束后回调</div>
        <SaafSelectDepartmentTree 
          ref="SaafSelectDepartmentTree"
          v-model="row.orgName" 
          @on-change="change"
          @load-after="loadAfter"></SaafSelectDepartmentTree>
      </div>
      <div class="pb20">
        <div class="pb5">部门结构树形</div>
        <SaafSelectDepartmentTree
          type='tree'
          v-model="row.orgName" 
          @on-change="change"></SaafSelectDepartmentTree>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      row: {},
      treeItem:{},
      treeRow: {},
    }
  },
  methods:{
    change(row){
      this.row = row
    },
    loadAfter(){
      this.$refs.SaafSelectDepartmentTree.treeData = [
        { title: '顶层组织架构', orgName: '顶层组织架构', orgId: 0 },
        ...this.$refs.SaafSelectDepartmentTree.treeData
      ]
      // console.log(this.$refs.SaafSelectDepartmentTree.treeData)
    },
    changeTree(row){
      // console.log(row);
      
      let data = JSON.parse(JSON.stringify(row))
      delete data.children
      this.treeRow = data
    },
    loadAfterTree(){
      this.$refs.SaafTree.treeData = [
        { title: '测试-修改树数据', menuName: '测试-修改树数据', menuId: 0 },
        ...this.$refs.SaafTree.treeData
      ]
      // console.log(this.$refs.SaafTree.treeData)
    },
    checkboxChange(list,rows,current){
      console.log(list)
      console.log(rows)
      console.log(current)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
