/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-31 16:24:45 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-10 11:17:29
 */


<template>
    <div class="input-w-100">
      <Poptip :disabled="disabled" v-if="type === 'select'" placement="bottom" v-model="visible" transfer>
        <Input :disabled="disabled" :value="name" readonly suffix="ios-search" clearable @on-clear="onClear"></Input>
        <div slot="content" class="tree-box">
          <Tree :data="treeData" @on-select-change="selectChange" @on-check-change="checkChange" :show-checkbox="checkbox"></Tree>
          <!-- <div class="button-group">
            <Button size="small">取消</Button>
            <Button size="small">确定</Button>
          </div> -->
        </div>
      </Poptip>
      <div v-if="type === 'tree'">
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
          let data = JSON.parse(JSON.stringify(row))
          delete data.children
          this.$emit('on-change',data)
          this.row = row
          this.$emit('update:value', row[this.config.key])
          this.$emit('update:name', row[this.config.name])
          this.visible = false
        },
        checkChange(rows, current){
          let list = treeTool.getTreeForParent(this.list, rows, this.config.key, this.config.parentKey)
          this.$emit('on-change', list, rows, current)
        },
        onClear(){
          if(this.checkbox){
            this.$emit('on-change', null, null, null)
          }else{
            this.$emit('on-change',{})
            this.$emit('update:value', null)
            this.$emit('update:name', null)
          }
        }
      },
      watch:{
        config: {
          handler(newVal, oldVal) {
            this.getData()
          },
          deep: true
        }
      }
    }
</script>

<style lang="less" scoped>
.tree-box {
  max-height: 300px;
  position: relative;
  overflow-y:scroll;
}
.refresh {
  cursor: pointer;
  position: absolute;
  right: 20px;
}
.button-group {
  position: flex;
  margin: 0;
}
</style>