/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-05 15:02:02 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-22 14:10:15
 */


<template>
  <div>
    <h2>saaf6.0国际化使用：</h2>
    <br/>
    <h3>框架已经内置部分通用语言包，开发过程中，较为通用的名称可以单独做成全局配置；</h3>
    <br/>
    <p>1、全局配置参考：/src/plugins/i18n.js，该目录已引用saaf框架自带语言包，可根据项目需要继续添加语言包；</p>
    <br/>
    <p>2、业务界面语言包，为了应对复杂场景业务，或者组件有更好的隔离性，会再页面单独设定语言包，做局部使用，可参考 {数据字典} LookupType.vue</p>
  </div>
</template>

<script>
import { tabsTool, getUrl } from "saaf-common";
export default {
    data() {
      return {
        html1 : `
        <i18n>
        {
          "EN": {
            "list": "List",
            "query": "query",
            "lookup type": "lookup type"
          },
          "CN": {
            "list": "列表查询",
            "query": "查询",
            "lookup type": "快码类型"
          }
        }
        </i18n>`
      }
    },
    computed: {

    },
    created() {
    },
    mounted(){
    },
    methods: {
      changeRadio(data, scope){
        scope.formValue.personId = data.personId
        scope.formValue.personName = data.personName
      },
      changeRadioA(data, scope){
        scope.formValue.personIdA = data.personId
        scope.formValue.personNameA = data.personName
      },
      getParams(){
        console.log(this.$refs.SaafParamForm.getParams())
      },
      resetFormValue(){
        this.$refs.SaafParamForm.resetFormValue()
      }
    }
}
</script>

<style lang="less" scoped>

</style>
