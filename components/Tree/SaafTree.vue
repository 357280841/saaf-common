/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-31 16:24:45 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-28 16:15:35
 */


<template>
    <div>
      <Poptip :disabled="disabled" v-if="type === 'select'" placement="bottom" v-model="visible" transfer>
        <Input :disabled="disabled" :value="name" readonly suffix="ios-search"></Input>
        <div slot="content" class="tree-box">
          <Tree :data="treeData" @on-select-change="selectChange" :show-checkbox="checkbox"></Tree>
        </div>
      </Poptip>
      <div class="tree-box" v-if="type === 'tree'">
        <!-- <Button size="small" type="primary" @click="getData">{{$i18n.t('刷新')}}<Icon size="16" type="ios-refresh" /></Button> -->
        <Icon class="refresh" @click="getData" type="md-refresh-circle" size="20" />
        <Tree :data="treeData" @on-select-change="selectChange" @on-check-change="checkChange" :show-checkbox="checkbox"></Tree>
      </div>
    </div>
</template>
<script>
    import {fetch} from "@/page/pageConfig"
    import { treeTool } from "saaf-common"
    export default {
      props:{
        value: String | Number,
        name: String | Number,
        type: {
          type: String,
          required: false,
          default: 'select'
        },
        config: {
          type: Object,
          required: true
        },
        disabled: {
          type: Boolean,
          required: false
        },
        checkbox: {
          type: Boolean,
          required: false,
          default: false
        }
      },
      // model: {
      //   prop: 'value',
      //   event: 'event'
      // },
      components: {
      },
      data () {
        return {
          list: [],
          treeData: [],
          visible:false,
          row: {},
          
        }
      },
      created(){
        this.getData()
      },
      mounted () {
      },
      methods: {
        getData(){
          fetch[this.config.api](this.config.params).then(res=>{
            this.list = JSON.parse(JSON.stringify(res.data))
            this.treeData = treeTool.getTreeCmp(res.data, this.config.key, this.config.parentKey, this.config.name)
            this.$emit('load-after')
          })
        },
        selectChange(list,row){
          if(this.checkbox){
            return
          }
          this.$emit('on-change',row)
          this.row = row
          this.$emit('update:value', row[this.config.key])
          this.$emit('update:name', row[this.config.name])
          this.visible = false
        },
        checkChange(rows, current){
          let list = treeTool.getTreeForParent(this.list, rows, this.config.key, this.config.parentKey)
          this.$emit('on-change', list, rows, current)
        }
      },
      watch:{
      }
    }
</script>

<style lang="less" scoped>
.tree-box {
  max-height: 300px;
  position: relative;
}
.refresh {
  cursor: pointer;
  position: absolute;
  right: 20px;
}
</style>