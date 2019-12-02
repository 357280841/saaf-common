/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-05 15:02:02 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-28 16:51:34
 */


<template>
  <div>
    
    <h3>注明：A=列表界面，B=编辑界面，有个别业务特殊情况，希望B页面能操作A页面的程序，包括刷新列表</h3>
    
    <div class="pt10">
      <h2>A页面绑定注册全局函数</h2>
      <p>
        <p>import { iframeTool } from "saaf-common";</p>
        <p>
          iframeTool.add('LookupListGetFristPage',(obj)=>{
            obj >>>> {a:1,b:2,c:3}
            this.$refs.SaafSuperTable.getFristPage()
          })
        </p>
      </p>
    </div>

    <div class="pt10">
      <h2>B页面使用A页面注册的函数</h2>
      <p>
        <p>import { iframeTool } from "saaf-common";</p>
        <p>
          iframeTool.run('LookupListGetFristPage',{a:1,b:2,c:3})
        </p>
      </p>
    </div>

    <p>
      <p>add时 ‘LookupListGetFristPage’ 会保存到全局函数列表中等待执行；</p>
      <p>只支持一个参数传递，可以传object格式</p>
    </p>

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
