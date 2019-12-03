/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-06 14:10:06 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-14 11:13:23
 */

<template>
    <div>
      <Button @click="importBtn">导入excel</Button>
      <Modal
        v-model="showModal"
        title="导入excel"
        footer-hide
        width="800"
      >
      <div>
        <div class="description">
          <span>上传判断规则：</span>
          <Input disabled type="textarea" v-model="description"/>
        </div>
        <div class="row">
          <div class="import-btn">
            <Button type="success" @click="click"><Icon size="20" class="pr10" type="md-cloud-upload" />导入</Button>
          </div>
          <div class="pb20 import-btn">
            <a href="/excel_template/xgm/excel模板导入.xlsx" download="模板.xlsx">
              <Button><Icon size="20" class="pr10" type="md-cloud-download" />模板下载</Button>
            </a>
          </div>
        </div>
        <input
          v-show="false" 
          ref="import" 
          @change="importXlsx" 
          type="file" 
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
        <Select v-show="showSelect" v-model="selectItem" style="width:200px" @on-change="handleSelect">
          <Option v-for="item in sheetList" :value="item" :key="item">{{ item }}</Option>
        </Select>
        <form action="" v-show="showSelect" id="excelForm" @submit="submitData">
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th v-for="(item,index) in titles" :key="index">
                    <span v-if="item.require" class="red">*</span>
                    {{item.name}}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="line-tr" v-for="(r, key) in data" :key="key">
                  <td v-for="(c, index) in titles" :key="index">
                    <input class="input-content" type="text" v-model="r[index]" :required="c.require" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="submit-line">
            <button class="submit-btn" type="submit">提交</button>
          </div>
        </form>
      </div>
      </Modal>
    </div>
</template>
<script>
import XLSX from 'xlsx'
export default {
    props:{
      headerConfig: {
        type: Object
      }
    },
    components: {
    },
    data () {
        return {
            showModal: false,
            data: [],
            titles: [],
            showSelect: false,
            selectItem: '',
            sheetList: [],
            totalData: [],
            totalTitles: [],
            description: '请确保上传模板格式正确。只接受excel文件，接受多个sheet，第一个sheet将自动忽略，第一个sheet标题只能命名为"模板注意事项"'
        }
    },
    mounted () {
      for(let item in this.headerConfig){
        this.totalTitles.push(this.headerConfig[item])
      }
      this.titles = this.totalTitles[0]
    },
    methods: {
        importBtn() {
          this.showModal = true
        },
        click() {
          this.$refs.import.dispatchEvent(new MouseEvent('click'))
        },
        download() {
          console.log(this.$root)
          window.location.href = `${window.location.host}/public/excel_template/xgm/excel模板导入.xlsx` 
        },
        submitData() {
          console.log('submit')
          return false
        },
        importXlsx(e) {
          const files = e.target.files;
          if(files && files[0]) {
            this._file(files[0])
          }
        },
        _file(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              this.showSelect = true
              const bstr = e.target.result;
              const wb = XLSX.read(bstr, {type:'binary'});
              
              for(let i=0; i < wb.SheetNames.length; i++) {
                if(wb.SheetNames[i] === '模板注意事项') continue 
                const ws = wb.Sheets[wb.SheetNames[i]];
                const data = XLSX.utils.sheet_to_json(ws, {header:1});
                let copyData = this._filterCols(this.totalTitles[i-1], JSON.parse(JSON.stringify(data)))
                this.totalData.push(copyData)
                this.sheetList.push(wb.SheetNames[i])
              }
              this.selectItem = this.sheetList[0]
              this.data = this.totalData[0]
            };
			      reader.readAsBinaryString(file);
        },
        handleSelect(e) {
          let index = this.sheetList.indexOf(e)
          this.titles = this.totalTitles[index]
          this.data = this.totalData[index]
        },
        _filterCols(configData, data){
          let res = []
          let titles = data.shift()
          data.map(item => {
            res.push([])
          })
          for(let i=0; i<configData.length; i++){
            for(let j=0; j<titles.length; j++){
              if(configData[i].name === titles[j]){
                for(let k=0; k < data.length; k++){
                  for(let n=0; n<data[k].length; n++){
                    if(n === j){
                      res[k].push(data[k][n])
                    }
                  }
                }
              }
            }
          }
          return res
        } 
    }
}
</script>
<style lang="less" scoped>
  .import-btn{
    margin: 10px 0;
  }
  .description{
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
      white-space: nowrap;
    }
  }
  .table-responsive{
    width: 100%;
    overflow: auto;
  }
  .table-striped{
    white-space: nowrap;
    text-align: center;
  }
  .table-striped{
    th,td{
      padding: 6px 10px;
    }
  }
  .red{
    color: red;
  }
  .input-content{
    padding: 4px;
    border-radius: 4px;
    border: solid 1px #dcdee2;
  }
  .submit-line{
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .submit-btn{
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 4px 16px;
    border-radius: 4px;
  }
</style>