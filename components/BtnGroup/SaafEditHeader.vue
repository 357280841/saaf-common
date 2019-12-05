/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-02 18:00:16 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-04 16:41:20
 */



<template>
    <div>
        <SaafListPageHeader ref="SaafListPageHeader">
            <!-- <ButtonGroup size="small" class="mr10" v-if="!pageHeader.hideQueryBtn">
                <Button size="small" @click="$emit('getFirstPage')"><span class="fa fa-search pr5"></span>{{$i18n.t('搜索')}}</Button>
                <Button size="small" @click="$emit('resetFormValue')"><span class="fa fa-undo pr5"></span>{{$i18n.t('重置')}}</Button>
            </ButtonGroup> -->
            <div style="display: inline-block">
                <slot name="btnGroup"></slot>
            </div>
            <SaafResourceButton
            style="display: inline-block;" 
            :menuId="$route.query.menuId"
            :respId="$route.query.respId"
            :functionList="pageHeader.functionList">
            </SaafResourceButton>
        </SaafListPageHeader>
        <!-- <SaafDelModalV2 ref="SaafDelModalV2"></SaafDelModalV2> -->
    </div>
</template>
<script>
    import {btnGroupTool} from 'saaf-common'
    export default {
      props:{
          pageHeader: {
              type: Object,
              required: false
          },
        //   currentRow: {
        //       type: Object,
        //       required: false
        //   },
        //   saafTable: {
        //       type: Object,
        //       required: false
        //   },
        //   saafParamForm: {
        //       type: Object,
        //       required: false
        //   }
      },
      components: {
      },
      data () {
        return {
        //   functionList: {},
        }
      },
      mounted () {
        //   console.log(this.saafSimpleTable)
        //   setInterval(()=>{console.log(this.currentRow)},2000)
        // this.formatFunctionList()
      },
      methods: {
        //   formatFunctionList(){
        //     //   this.functionList = btnGroupTool.formatFunctionList(this.pageHeader.functionList, this.currentRow, this.$refs.SaafDelModalV2)
        //     let val = this.pageHeader.functionList
        //     let functionList = {}
        //     for(let key in val){
        //         if((key == 'btnModify') && !val[key].disabled){
        //             functionList[key] = {
        //             fun: val[key],
        //             disabled: ()=>{ return this.currentRow ? false : true },
        //             ...val[key]
        //             }
        //         }else if((key == 'btnDel') && !val[key].disabled){
        //             let fun = null
        //             if(val[key] && val[key].fun){
        //             fun = val[key].fun
        //             }else{
        //             fun = val[key]
        //             }
        //             functionList[key] = {
        //             fun: ()=>{
        //                 this.$refs.SaafDelModalV2.open(()=>{fun(); this.currentRow=null;})
        //             },
        //             disabled: ()=>{ return this.currentRow ? false : true },
        //             ...val[key]
        //             }
        //         }else{
        //             functionList[key] = val[key]
        //         }
        //     }
        //     this.functionList = functionList
        //   }
      },
      watch:{
        //   'pageHeader.functionList': (val)=>{
        //       this.formatFunctionList()
        //   }
      }
    }
</script>
<style lang="less" scoped>

</style>
