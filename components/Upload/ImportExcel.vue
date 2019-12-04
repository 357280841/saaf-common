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
        width="1200"
        @on-cancel="close"
      >
      <div>
        <div v-show="beforeImport" class="description">
          <span>上传判断规则：</span>
          <Input disabled type="textarea" v-model="desc"/>
        </div>
        <div v-show="beforeImport" class="row">
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
        <div v-show="showSelect" class="label-line">
          <div class="tab-item" @click="changeTab(index)" v-for="(item,index) in sheetList" :key="item" :class="{'active': tabIndex===index}">
            {{item}}
          </div>
        </div>
        <form action="" v-show="showSelect" id="excelForm" @submit="submitData">
          <div class="table-responsive">
            <table class="table table-striped define-table">
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
                    <div class="input-wid">
                      <input class="input-content" type="text" v-model="r[index]" :required="c.require" />
                    </div>
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
      },
      desc: {
        type: String,
        default: '上传规则'
      }
    },
    components: {
    },
    data () {
        return {
            tabIndex: 0,
            showModal: false,
            data: [],
            titles: [],
            showSelect: false,
            beforeImport: true,
            sheetList: [],
            totalData: [],
            totalTitles: []
        }
    },
    mounted () {
      this._updateTitles()
    },
    methods: {
        _updateTitles() {
          for(let item in this.headerConfig){
            this.totalTitles.push(this.headerConfig[item])
          }
          this.titles = this.totalTitles[0]
        },
        importBtn() {
          this.showModal = true
          this._updateTitles()
        },
        click() {
          this.$refs.import.dispatchEvent(new MouseEvent('click'))
        },
        changeTab(index) {
          this.tabIndex = index
          this.titles = this.totalTitles[index]
          this.data = this.totalData[index]
        },
        submitData() {
          let copyConfig = JSON.parse(JSON.stringify(this.headerConfig))
          let copyTitles = JSON.parse(JSON.stringify(this.totalTitles))
          let copyData = JSON.parse(JSON.stringify(this.totalData))
          for(let i=0; i<copyTitles.length; i++) {
            for(let j=0; j<copyTitles[i].length; j++) {
              for(let k=0; k<copyTitles[i].length; k++) {
                copyTitles[i][k][copyTitles[i][j].desc] = ''
              }
              delete copyTitles[i][j].desc
              delete copyTitles[i][j].name
              if(delete copyTitles[i][j].require) delete delete copyTitles[i][j].require
            }
          }
          for(let i=0; i<copyData.length; i++) {
            if(copyData[i].length <= copyTitles[i].length) {
              copyTitles[i].length = copyData[i].length
            } else {
              copyData[i].map(item => {
                let tempObj = JSON.parse(JSON.stringify(copyTitles[i][0]))
                copyTitles[i].push(tempObj)
              })
              copyTitles[i].length = copyData[i].length
            }
            for(let j=0; j<copyData[i].length; j++) {
              Object.keys(copyTitles[i][j]).map((key, index) => {
                copyTitles[i][j][key] = copyData[i][j][index]
              })
              copyTitles[i][j]['row'] = j + 1
            }
          }
          Object.keys(copyConfig).map((key, index) => {
            copyConfig[key] = copyTitles[index]
          })
          this.$emit('callback', copyConfig)
          return false
        },
        importXlsx(e) {
          const files = e.target.files;
          if(files && files[0]) {
            this._file(files[0])
          }
        },
        close() {
          this.beforeImport = true
          this.showSelect = false
          this.$refs.import.value = ''
          this.totalData = []
          this.sheetList = []
          this.totalTitles = []
        },
        _file(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              this.showSelect = true
              this.beforeImport = false
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
              this.data = this.totalData[0]
            };
			      reader.readAsBinaryString(file);
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
    margin-top: 10px;
  }
  .tab-item{
    cursor: pointer;
    margin-left: 20px;
  }
  .description{
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
      white-space: nowrap;
    }
  }
  .label-line{
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }
  .input-wid{
    width: 100px;
  }
  .active{
    color: #2d8cf0;
    border-bottom: 3px solid #2d8cf0;
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
    display: inline-block;
    width: 100px;
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
  .define-table{
    border-collapse:collapse;
    border-spacing:0;
    border-left:1px solid #888;
    border-top:1px solid #888;
  }
  .define-table th,.define-table td{
    border-right:1px solid #888;
    border-bottom:1px solid #888;
    padding:5px 15px;
  }
  .define-table th{
    font-weight:bold;background:#F5F6F8;
  }	
</style>