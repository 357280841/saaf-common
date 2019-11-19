/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-14 11:06:15 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-18 18:04:54
 */


<i18n>
{
  "EN": {
      "Responsibility": "Responsibility"
  },
  "CN": {
      "Responsibility": "职责"
  }
}
</i18n>

<template>
    <!-- <Select :value="currentResp.responsibilityId" @on-change="change" style="width:150px">
        <Option v-for="item in $store.state.user.userRespList" :value="item.responsibilityId" :key="item.value">{{ item.responsibilityName }}</Option>
    </Select> -->
    <Poptip v-model="visible" transfer>
        <span>
            {{$t('Responsibility')}}:
            <span v-for="item in userRespList" v-if="currentResp.responsibilityId == item.responsibilityId">
                {{item.responsibilityName}}
            </span>
        </span>
        <template slot="content">
            <div class="select-item" v-for="item in userRespList" @click="change(item)">
                <Icon v-if="currentResp.responsibilityId == item.responsibilityId" size="16" color="#2d8cf0" type="ios-checkmark-circle" />
                <Icon v-if="currentResp.responsibilityId != item.responsibilityId" size="16" type="ios-checkmark-circle" />
                {{item.responsibilityName}}
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
            visible: false
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
        change(item){
            // this.userRespList.map((item,key)=>{
            //     if(item.responsibilityId == val){
            //         this.$store.commit('CHANGE_CURRENT_RESP',item)
            //     }
            // })
            this.$store.commit('CHANGE_CURRENT_RESP',item)
            this.visible = false
        }
    }
}
</script>
<style lang="less" scoped>

</style>