/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-14 11:06:15 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-10-18 09:30:59
 */



<template>
    <Select v-model="language" @on-change="change">
        <Option v-for="item in languageList" :value="item.lookupCode" :key="item.lookupCode">{{ item.lookupCode }}</Option>
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
            language: null
        }
    },
    computed: {
        ...mapState({
            languageList: state => state.user.languageList,
            currentLanguage: state => state.user.currentLanguage
        }),
    },
    mounted () {
        this.language = this.currentLanguage.lookupCode
    },
    methods: {
        change(val){
            this.$i18n.locale = val
            this.languageList.map((item)=>{
                if(item.lookupCode == val){
                    this.$store.commit('CHANGE_LANGUAGE', item)
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>