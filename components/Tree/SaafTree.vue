/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-31 16:24:45 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-27 16:12:06
 */


<template>
    <div>
      <Poptip :disabled="disabled" v-if="type === 'select'" placement="bottom" v-model="visible" transfer>
        <Input :disabled="disabled" :value="name" readonly suffix="ios-search"></Input>
        <div slot="content" class="tree-box">
          <Tree :data="treeData" @on-select-change="selectChange"></Tree>
        </div>
      </Poptip>
      <div class="tree-box" v-if="type === 'tree'">
        <!-- <Button size="small" type="primary" @click="getData">{{$i18n.t('刷新')}}<Icon size="16" type="ios-refresh" /></Button> -->
        <Icon class="refresh" @click="getData" type="md-refresh-circle" size="20" />
        <Tree :data="treeData" @on-select-change="selectChange"></Tree>
      </div>
    </div>
</template>
<script>
    import {fetch} from "@/page/pageConfig"
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
          // list: [],
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
        checkChild(list,currentItem){
          list.map((item,key)=>{
            if(!currentItem.children){
              currentItem.children = []
            }
            if(currentItem[this.config.key] === item[this.config.parentKey]){
              item.title = item[this.config.name]
              item.expand = false
              currentItem.children.push(item)
              this.checkChild(list,item)
            }
          })
        },
        getData(){
          fetch[this.config.api](this.config.params).then(res=>{
            let tree = []
            res.data.map((item,key)=>{
              if(item[this.config.parentKey] === 0 || item[this.config.parentKey] === -1){
                item.title = item[this.config.name]
                item.expand = true
                tree.push(item)
                this.checkChild(res.data,item)
              }
            })
            this.treeData = tree
            this.$emit('load-after')
          })
        },
        selectChange(list,row){
          this.$emit('on-change',row)
          this.row = row
          this.$emit('update:value', row[this.config.key])
          this.$emit('update:name', row[this.config.name])
          this.visible = false
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