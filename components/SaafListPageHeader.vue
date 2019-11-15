/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-17 16:28:12 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-01 11:52:55
 */


<template>
    <div class="list-page-header">
      <div class="title">{{title}}</div>
      <div class="btn-group">
        <slot></slot>
      </div>
      <div class="cb"></div>
    </div>
</template>
<script>
    export default {
      props:{
        title: String
      },
      components: {
      },
      data () {
        return {
          
        }
      },
      mounted () {

      },
      methods: {

      }
    }
</script>
<style lang="less" scoped>
.list-page-header {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f3f3f3;
}
.title {
  font-size: 16px;
  font-weight: bold;
  float: left;
}
.btn-group {
  text-align: right;
}
</style>
