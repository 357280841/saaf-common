/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-14 11:06:15 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-18 18:05:00
 */


<i18n>
{
  "EN": {
      "Language": "Language"
  },
  "CN": {
      "Language": "语言"
  }
}
</i18n>

<template>
    <!-- <Select v-model="language" @on-change="change">
        <Option v-for="item in languageList" :value="item.lookupCode" :key="item.lookupCode">{{ item.lookupCode }}</Option>
    </Select> -->
    <Poptip v-model="visible" transfer>
        <span>
            {{$t('Language')}}:
            <span v-for="item in languageList" v-if="language == item.lookupCode">
                {{item.lookupCode}}
            </span>
        </span>
        <template slot="content">
            <div class="select-item" v-for="item in languageList" @click="change(item)">
                <Icon v-if="language == item.lookupCode" size="16" color="#2d8cf0" type="ios-checkmark-circle" />
                <Icon v-if="language != item.lookupCode" size="16" type="ios-checkmark-circle" />
                {{item.lookupCode}}
            </div>
        </template>
    </Poptip>
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
            language: null,
            visible: false
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
        change(item){
            // this.$i18n.locale = val
            // this.languageList.map((item)=>{
            //     if(item.lookupCode == val){
            //         this.$store.commit('CHANGE_LANGUAGE', item)
            //     }
            // })
            this.$i18n.locale = item.lookupCode
            this.$store.commit('CHANGE_LANGUAGE', item)
            this.visible = false
        }
    }
}
</script>
<style lang="less" scoped>

</style>