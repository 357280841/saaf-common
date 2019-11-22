/*
 * @Author: zhengxiaowen 
 * @Date: 2019-05-24 17:55:36 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-22 15:41:04
 */

<template>
  <div>
    <h2>Axios 框架请求工具类使用</h2>
    
    <h3 class="pt50">POST</h3>
    <div class="box">
      <Button class="button" @click="fetch()">fetch函数使用</Button>
      自动把api接口自动转化成普通请求函数，方便常规使用时候节省更多代码
    </div>
    <div class="box">
      <Button class="button" @click="fetchToolPost()">fetchTool.post函数使用</Button>
      封装好的带加载提示、报错提示
    </div>
    <div class="box">
      <Button class="button" @click="fetchToolPostSimpleness()">fetchTool.postSimpleness函数使用</Button>
      静默请求，不带加载提示和报错提示
    </div>

    <h3 class="pt50">GET</h3>
    <div class="box">
      <Button class="button" @click="get()">fetchTool.get函数使用</Button>
      封装好的带加载提示、报错提示
    </div>
    <div class="box">
      <Button class="button" @click="getSimpleness()">fetchTool.getSimpleness函数使用</Button>
      静默请求，不带加载提示和报错提示
    </div>
    

  </div>
</template>

<script>
import {fetchTool} from 'saaf-common'
import fetch from './config/fetch'
import api from './config/api'
export default {
  methods:{
    fetch(){
      fetch.baseLookupTypeService_find().then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    fetchToolPost(){
      fetchTool.post(api.baseLookupTypeService_find,{}).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    fetchToolPostSimpleness(){
      fetchTool.postSimpleness(api.baseLookupTypeService_find,{}).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    get(){
      fetchTool.get(api.baseLookupTypeService_find,{
        a:1,
        b:2
      })
    },
    getSimpleness(){
      fetchTool.getSimpleness(api.baseLookupTypeService_find,{
        a:1,
        b:2
      })
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  border-bottom: #ccc solid 1px;
  padding: 10px;
}
.button {
  margin: 10px
}
</style>
