/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-20 16:43:10 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-21 09:44:39
 */


<i18n>
{
  "EN": {
  },
  "CN": {
  }
}
</i18n>

<template>
    <GeminiScrollbar class="scroll-box scroll" ref="SaafScroll" :style="{height: height+'px'}">
        <div ref="Content">
            <slot></slot>
        </div>
    </GeminiScrollbar>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { onresizeTool } from 'saaf-common'
export default {
    props:{
    },
    components: {
    },
    data () {
        return {
            key: 'SaafScroll'+new Date(),
            height: 0
        }
    },
    computed: {
        ...mapState({
        }),
    },
    mounted () {
        
        onresizeTool.addFunction({key:this.key, fun:()=>{
            this.setHeight()
        }})
        this.setHeight()
    },
    created(){

    },
    methods: {
        setHeight(){
            this.height = $(window).innerHeight() - $(this.$refs.SaafScroll.$el).offset().top
        },
    }
}
</script>
<style lang="less" scoped>
.scroll-box {
}
</style>