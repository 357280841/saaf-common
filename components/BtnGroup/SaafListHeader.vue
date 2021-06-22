/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-02 18:00:16 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-12 16:05:36
 */



<template>
    <div>
        <SaafListPageHeader ref="SaafListPageHeader">
            <ButtonGroup size="small" class="mr10" v-if="!pageHeader.hideQueryBtn">
                <Button size="small" @click="find()"><span class="fa fa-search pr5"></span>{{$i18n.t('搜索')}}</Button>
                <Button size="small" @click="reset()"><span class="fa fa-undo pr5"></span>{{$i18n.t('重置')}}</Button>
            </ButtonGroup>
            <div style="display: inline-block">
                <slot name="btnGroup"></slot>
            </div>
            <SaafResourceButton
            ref="SaafResourceButton"
            style="display: inline-block;"
            :menuId="$route.query.menuId"
            :respId="$route.query.respId"
            :functionList="functionList"
            @changeResourceData="changeResourceData($event)">
            </SaafResourceButton>
        </SaafListPageHeader>
        <SaafDelModalV2 ref="SaafDelModalV2"></SaafDelModalV2>
    </div>
</template>
<script>
    import {btnGroupTool} from 'saaf-common'
    import * as lodash from 'lodash'
    import systemHook from "@/config/systemHook";
    export default {
      props:{
          pageHeader: {
              type: Object,
              required: false
          },
          currentRow: {
              type: Object,
              required: false
          },
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
          functionList: {},
          menuResource: {},
        }
      },
      mounted () {
        //   console.log(this.saafSimpleTable)
        //   setInterval(()=>{console.log(this.currentRow)},2000)
        this.formatFunctionList()
      },
      methods: {
          find:lodash.debounce(function() {
            this.$emit('find')
          },systemHook.debounceTime?systemHook.debounceTime:500,{leading: true,trailing: false}),
          reset:lodash.debounce(function() {
            this.$emit('reset')
          },1500,{leading: true,trailing: false}),
          formatFunctionList(){
            //   this.functionList = btnGroupTool.formatFunctionList(this.pageHeader.functionList, this.currentRow, this.$refs.SaafDelModalV2)
            let val = this.pageHeader.functionList
            let functionList = {}
            for(let key in val){
                if((key == 'btnModify') && val[key].disabled === undefined){
                    functionList[key] = {
                    fun: val[key],
                    disabled: ()=>{ return this.currentRow ? false : true },
                    ...val[key]
                    }
                }else if((key == 'btnDel') && val[key].disabled === undefined){
                    let fun = null
                    if(val[key] && val[key].fun){
                    fun = val[key].fun
                    }else{
                    fun = val[key]
                    }
                    functionList[key] = {
                    fun: ()=>{
                        this.$refs.SaafDelModalV2.open(()=>{fun(); this.currentRow=null;})
                    },
                    disabled: ()=>{ return this.currentRow ? false : true },
                    ...val[key]
                    }
                }else{
                    functionList[key] = val[key]
                }
            }
            this.functionList = functionList
          },
          changeResourceData(menuResource){
              this.menuResource = menuResource
          }
      },
      watch:{
          'pageHeader.functionList': (val)=>{
              this.formatFunctionList()
          },
          menuResource: {
              handler(val, oldVal) {
                  this.$emit('changeResourceData', this.menuResource)
              },
              deep: true
          }
      }
    }
</script>
<style lang="less" scoped>

</style>
