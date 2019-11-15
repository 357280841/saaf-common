/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-14 11:06:15 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-10-14 15:00:15
 */



<template>
    <Select :value="currentResp.responsibilityId" @on-change="change" style="width:150px">
        <Option v-for="item in $store.state.user.userRespList" :value="item.responsibilityId" :key="item.value">{{ item.responsibilityName }}</Option>
    </Select>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    props:{
    },
    components: {
    },
    data () {
        return {
        }
    },
    computed: {
        ...mapState({
            userRespList: state => state.user.userRespList,
            currentResp: state => state.user.currentResp
        }),
    },
    mounted () {
        this.$store.dispatch('GET_MENU_BY_RESP')
    },
    methods: {
        change(val){
            this.userRespList.map((item,key)=>{
                if(item.responsibilityId == val){
                    this.$store.commit('CHANGE_CURRENT_RESP',item)
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>