/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-02 18:00:12 
 * @Last Modified by:   zhengxiaowen 
 * @Last Modified time: 2019-12-02 18:00:12 
 */



<template>
    <div>
        <SaafListPageHeader ref="SaafListPageHeader">
            <ButtonGroup size="small" class="mr10" v-if="!tableConfig.pageHeader.hideQueryBtn">
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
    </div>
</template>
<script>

    export default {
      props:{

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

      }
    }
</script>
<style lang="less" scoped>

</style>
