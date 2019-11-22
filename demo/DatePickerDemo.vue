/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-08 16:31:01 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-15 09:36:43
 */


<template>
  <div>
      <SaafDatePicker format="yyyy-MM-dd" type="date" v-model="date1" :options="options3"></SaafDatePicker>
  </div>
</template>

<script>
import { tabsTool, getUrl } from "saaf-common";
export default {
    data() {
      return {
        date1: '',
        options3: {
            disabledDate (date) {
                return date && date.valueOf() < Date.now() - 86400000;
            }
        },
      }
    },
    computed: {

    },
    created() {
    },
    mounted(){
    },
    methods: {
  
    }
}
</script>

<style lang="less" scoped>

</style>
