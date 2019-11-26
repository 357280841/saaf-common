/*
 * @Author: zhengxiaowen 
 * @Date: 2019-05-24 17:55:36 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-15 09:34:03
 */

<template>
    <div class="p10">
        <router-view></router-view>
    </div>
</template>

<script>
import { initApp } from 'saaf-common'
export default {
    data(){
        return {
        }
    },
    methods: {
    },
    created(){
        initApp.initIframe()
        // this.$store.commit('INIT_USER_INFO')
        // this.$store.commit('INIT_LOOKUP')
    }
}
</script>

<style lang="less" scoped>
</style>
