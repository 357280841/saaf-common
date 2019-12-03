/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-17 16:28:12 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-03 11:05:54
 */


<template>
    <div class="param-form">
      <Form :label-width="120">
        <Row>
          <div v-show="false">{{formValue}}</div>
          <Col span="6" v-for="(item,index) in items" :key="index">
            <FormItem v-if="item.type === 'slot'" :label="item.label">
              <slot :name="index" v-bind:formValue="formValue">
                
              </slot>
            </FormItem>
            

            <FormItem 
              v-if="item.type == 'text' || item.type == 'password' || item.type == 'textarea' || item.type == 'url' || item.type == 'email' || item.type == 'number' || item.type == 'tel'"
              :label="item.label">
              <Input :type="item.type" v-model="formValue[index]" @on-change="item.onChange" :disabled="item.disabled">
              </Input>
             
            </FormItem>

            <FormItem 
              v-else-if="item.type == 'date' || item.type == 'daterange' || item.type == 'datetime' || item.type == 'datetimerange' || item.type == 'year' || item.type == 'month'"
              :label="item.label">
              <DatePicker 
                :ref="index" 
                :type="item.type" 
                :disabled="item.disabled"
                placeholder="" 
                style="width: 100%" 
                v-model="formValue[index]" 
                @on-change="item.onChange"></DatePicker>
            </FormItem>

            <FormItem
              v-else-if="item.type == 'lookup'"
              :label="item.label">
              <Select style="width:100%" clearable v-model="formValue[index]" @on-change="item.onChange" :disabled="item.disabled">
                <Option v-for="(item,key) in $store.state.user.lookup[item.code]" :value="item.lookupCode" :key="key">{{ item.meaning }}</Option>
              </Select>
            </FormItem>
            
          </Col>
        </Row>
      </Form>
    </div>
</template>
<script>
    import moment from 'moment'
    export default {
      props:{
        items: {
          type: Object,
          required: true,
          validator: function (value) {
            let flag = true
            for (const key in value) {
              let item = value[key]
              if(!(item.label && item.type)){
                console.error("ParamForm的items参数有误，请检查")
                flag = false
              }
            }
            return flag
          }
        },
        params:{
          type: Object,
          required: false
        }
      },
      components: {
      },
      data () {
        return {
          formValue:{},
          paramValue:{},
          resetData: {},
        }
      },
      created(){
        this.initChange()
      },
      mounted () {
        this.setFormValue(this.items)
        this.resetData = JSON.parse(JSON.stringify(this.formValue))
        // console.log(this.resetData)
        this.formChange()
      },
      methods: {
        resetFormValue(){
          this.formValue = JSON.parse(JSON.stringify(this.resetData))
          this.formChange()
        },
        initChange(){
          let _this = this
          for(let key in this.items){
            _this.items[key].onChange = function(e){
              // _this.formChange()
              if(_this.items[key].change){
                _this.items[key].change(e)
              }
            }
          }
        },
        getParams(){
          this.formChange()
          let data = {}
          for(let key in this.paramValue){
            if(this.paramValue[key] !== null && this.paramValue[key] !== undefined){
              data[key] = this.paramValue[key]
            }
          }
          return data
        },
        getData(){
          return this.paramValue
        },
        formChange(val){
          let data = {}
          for (const key in this.items) {
            let item = this.items[key]
            // data[key] = {}
            // data[key].link = item.link
            data[key] = null
            if(item.type == 'date' || item.type == 'daterange' || item.type == 'datetime' || item.type == 'datetimerange' || item.type == 'year' || item.type == 'month'){
              let format = 'YYYY-MM-DD'
              if(item.type == 'year'){
                format = 'YYYY'
              }else if(item.type == 'month'){
                format = 'YYYY-MM'
              }
              data[key] = this.formValue[key]?moment(this.formValue[key]).format(format):null
            }else{
              data[key] = this.formValue[key]
            }
          }
          this.paramValue = Object.assign({},this.formValue,data)
          this.$emit('update:params', data)
        },
        setFormValue(val){
          let data = {}
          for (const key in val) {
            data[key] = val[key].value?val[key].value:null
          }
          this.formValue = data
        }
      },
      watch:{

        formValue: {
          handler: function (val, oldVal) {
            // console.log(val)
            this.formChange()
          },
          deep: true
        },

        items(val){
          // let data = {}
          // for (const key in val) {
          //   data[key] = val[key].value
          // }
          // this.setFormValue(data)
          this.initChange()
        }
      }
    }
</script>
<style lang="less" scoped>
.param-form {

}
</style>
