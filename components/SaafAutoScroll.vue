/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-20 16:43:10 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-03 10:18:43
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

        <!-- :style="{height: boxHeight}" -->
    <GeminiScrollbar 
        :class="{'type-x':type=='x','type-y':type=='y','type-auto':type=='auto',}"
        ref="SaafAutoScroll" >
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
        height:{
            type: Number | String,
            required: false,
            default: null
        },
        type: String,  // x,y,auto 
    },
    components: {
    },
    data () {
        return {
            key: 'SaafScroll'+new Date().getTime(),
            boxHeight: 'auto'
        }
    },
    computed: {
        ...mapState({
        }),
    },
    mounted () {
        onresizeTool.addFunction({key:this.key, fun:()=>{
            this.changeHeight()
        }})
        this.changeHeight()
    },
    created(){

    },
    destroyed() {
        onresizeTool.removeFunction(this.key)
    },
    methods: {
        setHeight(){
            this.boxHeight = $(window).innerHeight() - $(this.$refs.SaafAutoScroll.$el).offset().top +'px'
            // console.log()
            // this.$refs.SaafAutoScroll.height = 100
        },
        changeHeight(){
            if(typeof this.height == 'string'){
                this.boxHeight = this.height
            }else if(typeof this.height == 'number'){
                this.boxHeight = this.height + 'px'
            }else{
                this.setHeight()
            }
            $(this.$refs.SaafAutoScroll.$el).height(this.boxHeight)
            $(this.$refs.SaafAutoScroll.$el.querySelector('.gm-scroll-view')).height((this.boxHeight))
            // if(this.type == 'x'){
            //     $(this.$refs.SaafAutoScroll.$el.querySelector('.gm-scrollbar-container')).addClass('type-x')
            // }else if(this.type == 'y'){
            //     $(this.$refs.SaafAutoScroll.$el.querySelector('.gm-scrollbar-container')).addClass('type-y')
            // }else if(this.type == 'auto'){
            //     $(this.$refs.SaafAutoScroll.$el.querySelector('.gm-scrollbar-container')).addClass('auto')
            // }
        }
    },
    watch:{
        height(val){
            this.changeHeight()
        }
    }
}
</script>
<style lang="less" scoped>
    .type-x {
        overflow-x: auto;
        overflow-y: hidden;
        white-space:nowrap;
    }
    .type-y {
        overflow-x: hidden;
        overflow-y: auto;
    }
    .type-auto {
        overflow: auto;
    }
    .type-hidden {}
</style>