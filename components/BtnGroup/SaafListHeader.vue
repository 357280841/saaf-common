/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-02 18:00:16 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-03 10:32:06
 */



<template>
    <div>
        <SaafListPageHeader ref="SaafListPageHeader">
            <ButtonGroup size="small" class="mr10" v-if="!pageHeader.hideQueryBtn">
                <Button size="small" @click="getFirstPage()"><span class="fa fa-search pr5"></span>{{$i18n.t('搜索')}}</Button>
                <Button size="small" @click="$refs.SaafParamForm.resetFormValue()"><span class="fa fa-undo pr5"></span>{{$i18n.t('重置')}}</Button>
            </ButtonGroup>
            <div style="display: inline-block">
                <slot name="btnGroup"></slot>
            </div>
            <SaafResourceButton
            style="display: inline-block;" 
            :menuId="$route.query.menuId"
            :respId="$route.query.respId"
            :functionList="functionList">
            </SaafResourceButton>
        </SaafListPageHeader>
        <SaafDelModalV2 ref="SaafDelModalV2"></SaafDelModalV2>
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
          currentRow: {
              type: Object,
              required: false
          }
      },
      components: {
      },
      data () {
        return {
          functionList: {},
        }
      },
      mounted () {
          this.functionList = btnGroupTool.formatFunctionList(this.pageHeader.functionList, this.currentRow, this.$refs.SaafDelModalV2)
      },
      methods: {

      }
    }
</script>
<style lang="less" scoped>

</style>
