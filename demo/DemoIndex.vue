/*
 * @Author: zhengxiaowen 
 * @Date: 2019-05-24 17:55:36 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-27 14:48:12
 */

<template>
  <div>
    <h1 class="page-title">Demo页面</h1>
    <Row>
        <Col span="4" class="list-box">
          <router-link v-for="item in routerList.children" class="item" :to="`${routerList.path}/${item.url?item.url:item.path}`" v-html="item.urlName"></router-link>
        </Col>
        <Col span="20">
          <div class="page-content">
            <div>
              <router-view></router-view>
            </div>
          </div>
        </Col>
    </Row>

  </div>
</template>

<script>
import { initApp } from 'saaf-common'
import routerList from './config/router'
export default {
    data(){
        return {
          routerList: routerList[0]
        }
    },
    methods: {
    },
    created(){
        initApp.initIframe()
    }
}
</script>

<style lang="less" scoped>
.page-title {
  border-bottom: #ccc 1px solid;
  padding: 10px;
}
.list-box {
  // border-right:  #ccc 1px solid;
  .item {
    width: 100%;
    // text-align: center;
    display: block;
    padding: 10px;
    font-size: 16px;
  }
}
.page-content {
  margin: 15px;
}
</style>
