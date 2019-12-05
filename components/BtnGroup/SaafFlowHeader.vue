/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-02 18:00:16 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-05 08:54:05
 */



<template>
    <div>
        <SaafListPageHeader ref="SaafListPageHeader">
            <div style="display: inline-block">
                <slot name="btnGroup"></slot>
            </div>
            <SaafResourceButton
            style="display: inline-block;" 
            :menuId="$route.query.menuId"
            :respId="$route.query.respId"
            :functionList="pageHeader.functionList">
            </SaafResourceButton>

            <ButtonGroup size="small" class="pl10">
                <Button size="small"><span class="pr5 fa fa-paper-plane-o"></span>提交</Button>
                <Button size="small"><span class="pr5 fa fa-undo"></span>撤回</Button>

                <Button size="small"><span class="pr5 fa fa-gavel"></span>通过</Button>
                <Button size="small"><span class="pr5 fa fa-undo"></span>驳回</Button>
                <Button size="small"><span class="pr5 fa fa-undo"></span>驳回重审</Button>
                <Button size="small"><span class="pr5 fa fa-comment-o"></span>发消息</Button>
                <Button size="small"><span class="pr5 fa fa-address-book-o"></span>增加助审</Button>
            </ButtonGroup>
        </SaafListPageHeader>
    </div>
</template>
<script>
    import {btnGroupTool} from 'saaf-common'
    // import {btnGroupTool} from 'saaf-flow'
    export default {
      props:{
          pageHeader: {
              type: Object,
              required: false
          },
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
      },
      watch:{
      }
    }
</script>
<style lang="less" scoped>

</style>
