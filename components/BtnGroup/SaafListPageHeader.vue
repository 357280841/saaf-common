/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-17 16:28:12 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-27 15:22:18
 */


<template>
    <div class="list-page-header">
      <div class="title">
        <!-- {{title}} -->
        <ButtonGroup size="small">
          <Button type="error" size="small" icon="ios-albums-outline" @click="fullscreen">数据全屏</Button>
        </ButtonGroup>
      </div>
      <div class="btn-group">
        <slot></slot>
      </div>
      <div class="cb"></div>
    </div>
</template>
<script>
    import {iframeTool} from '../../index'
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
        fullscreen(){
          iframeTool.run('FULLSCREEN')
        }
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
  // font-size: 16px;
  // font-weight: bold;
  float: left;
}
.btn-group {
  text-align: right;
}
</style>
