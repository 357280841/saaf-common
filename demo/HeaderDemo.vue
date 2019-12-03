/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-02 17:59:25 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-03 09:11:49
 */


<template>
  <div>
    <SaafFlowHeader :pageHeader="pageHeader"></SaafFlowHeader>
    <SaafEditHeader :pageHeader="pageHeader"></SaafEditHeader>
    <SaafEditHeader :pageHeader="pageHeader"></SaafEditHeader>
  </div>
</template>

<script>
import { tabsTool, getUrl } from "saaf-common";
export default {
    data() {
      return {
        pageHeader:{}
      }
    },
    computed: {

    },
    created() {
    },
    mounted(){
      
    },
    methods: {
      
    }
}
</script>

<style lang="less" scoped>

</style>
