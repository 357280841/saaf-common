/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2020-01-05 11:54:44 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2020-01-05 17:45:06
 */
/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2020-01-05 11:54:44 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2020-01-05 12:50:57
 */


<template>
    <div>
        <h3>流程图</h3>
        <div>
            <div id="SaafGooFlow"></div>
        </div>
    </div>
</template>
<script>
import * as GooFlow from '../../plugins/GooFlow/plugin/GooFlow.min'
import '../../plugins/GooFlow/plugin/GooFlow.less'
import { mapState } from 'vuex'
    export default {
      props:{
        flow: Object
      },
      components: {
      },
      data () {
        return {
        }
      },
     computed: {
        ...mapState({
            certificate: state => state.user.certificate
        }),
      },
      created(){
        
      },
      mounted () {
          GooFlow.processImageDraw(this.certificate, 'SaafGooFlow', this.flow.processInstanceId)
      },
      methods: {
          
      }
    }
</script>
<style lang="less" scoped>
.GooFlow_item.item_round.item_mark.end {
    background: url('~/GooFlowImages/logo.png') no-repeat center;
    width: 40px;
    height: 40px;
}
</style>
