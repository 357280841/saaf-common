/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-12 17:55:42 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-26 17:21:00



<template>
    <ButtonGroup size="small">
        <!-- <slot name="btnGroup"></slot> -->
        <Button 
        size="small"
        v-for="(item,key) in btnList" 
        v-if="functionList[item.resourceCode]&&(functionList[item.resourceCode].show?functionList[item.resourceCode].show():true)"
        :disabled="functionList[item.resourceCode].disabled?functionList[item.resourceCode].disabled():false"
        @click="btnFun(item)"
        :key="key"
        ><span class="pr5" :class="item.resIcon"></span>{{item.resourceName}}</Button>
    </ButtonGroup>
</template>
<script>
import {fetch} from '@/page/pageConfig/index'
import { mapState, mapMutations } from 'vuex'
import * as lodash from 'lodash'
import systemHook from "@/config/systemHook";
export default {
    props:{
        menuId: {
          type: String | Number,
          required: true
        },
        respId: {
          type: String | Number,
          required: true
        },
        functionList:{
          type: Object,
          required: true
        },
    },
    components: {
    },
    data () {
        return {
            btnList: [],
            btnMap: {},
            menuResource: {},
            currentMenu: null
        }
    },
    computed: {
        ...mapState({
            tabList: state => state.tabs.tabList,
            currentResp: state => state.user.currentResp,
        }),
    },
    created(){
        // this.currentMenu = this.tabList["/"+window.location.hash]
    },
    mounted () {
        this.findBaseResourceByRespMenuId()
    },
    methods: {
        btnFun:lodash.debounce(function(item) {
            this.functionList[item.resourceCode].fun?this.functionList[item.resourceCode].fun():this.functionList[item.resourceCode]()
        },systemHook.debounceTime?systemHook.debounceTime:500,{leading: true,trailing: false}),
        findBaseResourceByRespMenuId(){
            // let query = this.$route.query
            fetch.baseResourceService_findBaseResourceByRespMenuId({
                menuId: this.menuId,
                respId: this.respId
            }).then(res=>{
                this.btnList = res.data
                res.data.map((item)=>{
                    this.btnMap[item.resourceCode] = item
                })
                this.menuResource = this.btnMap;
            })
        }
    },
    watch: {
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