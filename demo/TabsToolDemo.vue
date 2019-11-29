/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-05 15:02:02 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-29 10:00:01
 */


<template>
  <div>
    <h2 class="p5">当前框架窗口唯一标示是url，所以对tabs的操作都以url为准，而非menucode</h2>
    <p class="p5">import { tabsTool } from "saaf-common";</p>
    <p class="p5">打开界面：tabsTool.openTab({url: `/LookupTypeEdit?id=0`, name:`${this.$t('dict edit')}:新增`})</p>
    <p class="p5">关闭当前界面：tabsTool.closeCurrentTab()</p>
    <p class="p5">关闭指定界面：tabsTool.closeTab({url: `/#/iframeBox/lookuptype?menuId=1872&respId=390006`}) 【通过host取得当前路径；】</p>
  </div>
</template>

<script>
import { tabsTool, getUrl } from "saaf-common";
export default {
    data() {
      return {
        
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
