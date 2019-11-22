/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-05 17:29:04 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-15 09:37:30
 */


<template>
  <div>
      <div class="pt20">
        <h3 class="pb10">单选/显示input</h3>
        <SaafSelectModal 
        class="w200"
        type="radio" 
        :showInput="true"
        :selectConfig="{
            title: '员工姓名',
            key: 'personName'
        }"
            :tableConfig="{
            findApi: 'baseUsersService_findPagination',
            searchParams:{
                // systemCode: 'BASE',
            },
            tableColumns: [
            {
                title: '员工姓名',
                key: 'personName',
                sortable:true
            },{
                title: '员工编码',
                key: 'employeeNumber',
                sortable:true
            }]
        }"
        :value="data1.name"
        @on-change="change1"></SaafSelectModal>
      </div>

      <div class="pt30">
        <h3 class="pb10">函数方式激活 :showInput="false"</h3>
        <Button @click="clickOpen2">打开</Button>
        <div>data2:{{data2}}</div>
        <SaafSelectModal 
        ref="SaafSelectModal2"
        type="radio" 
        :showInput="false"
        :selectConfig="{
            title: '员工姓名',
            key: 'personName'
        }"
            :tableConfig="{
            findApi: 'baseUsersService_findPagination',
            searchParams:{
                // systemCode: 'BASE',
            },
            tableColumns: [
            {
                title: '员工姓名',
                key: 'personName',
                sortable:true
            },{
                title: '员工编码',
                key: 'employeeNumber',
                sortable:true
            }]
        }"
        :value="data2.name"
        @on-change="change2"></SaafSelectModal>
      </div>


      <div class="pt20">
        <h3 class="pb10">多选弹窗</h3>
        <Button @click="clickOpen3">打开</Button>
        <div>
            ||<span v-for="item in data3">{{item.personId}} , {{item.personName}}  ||  </span>
        </div>
        <SaafSelectModal 
            class="w200"
            ref="SaafSelectModal3"
            type="checkbox" 
            :showInput="false"
            :selectConfig="{
                title: '员工姓名',
                key: 'personName',
                pk: 'personId', 
                show:'personName'
            }"
            :tableConfig="{
            findApi: 'baseUsersService_findPagination',
            searchParams:{
                // systemCode: 'BASE',
            },
            tableColumns: [
            {
                title: '员工姓名',
                key: 'personName',
                sortable:true
            },{
                title: '员工编码',
                key: 'employeeNumber',
                sortable:true
            }]
        }"
        :value="data1.name"
        @on-change="change3"></SaafSelectModal>
      </div>
  </div>
</template>

<script>
import { tabsTool, getUrl } from "saaf-common";
export default {
    data() {
      return {
          data1:{
              name:null,
              value: null
          },
          data2:{
              name:null,
              value: null
          },
          data3: []
      }
    },
    computed: {

    },
    created() {
    },
    mounted(){
    },
    methods: {
        change1(val){
            this.data1 = {
                name: val.personName,
                value: val.personId
            }
        },
        change2(val){
            this.data2 = {
                name: val.personName,
                value: val.personId
            }
        },
        change3(val){
            this.data3 = val
        },
        clickOpen2(){
            this.$refs.SaafSelectModal2.open()
        },
        clickOpen3(){
            this.$refs.SaafSelectModal3.open()
        }
    }
}
</script>

<style lang="less" scoped>

</style>
