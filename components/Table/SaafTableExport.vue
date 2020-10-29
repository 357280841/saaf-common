<i18n>
    {
    "EN": {
    "export": "Export",
    "exportTable": "Export table data",
    "notExists": "not exists"
    },
    "CN": {
    "export": "导出",
    "exportTable": "导出表格数据",
    "notExists": "不存在"
    }
    }
</i18n>
<template>
    <ButtonGroup size="small">
        <Button size="small" @click="doExport"><span class="fa fa-file-excel-o pr5"></span>{{label}}</Button>
    </ButtonGroup>
</template>

<script>
    import compApi from '../../config/apiCommon'
    import {api} from '@/page/pageConfig/index'
    import { mapState } from 'vuex'

    export default {
        name: "SaafTableExport",
        props:{
            label: {
                type: String
            },
            tableConfig:{
                type: Object,
                required: true
            }
        },
        data () {
            return {
                fileName: this.$t('exportTable')
            }
        },
        computed: {
            ...mapState({
                certificate: state => state.user.certificate
            }),
        },
        mounted () {
            if(this.tableConfig.pageHeader.title){
                this.fileName = this.tableConfig.pageHeader.title;
            }
        },
        methods: {
            doExport(){
                let tableColumns = this.tableConfig.tableColumns;
                let labelName = [];
                let name = [];
                for (let i = 0; i < tableColumns.length; i++) {
                    if(tableColumns[i].title && tableColumns[i].key){
                        labelName.push(tableColumns[i].title)
                        name.push(tableColumns[i].key)
                    }
                }
                if(!api[this.tableConfig.findApi]){
                    throw `tableConfig.findApi [${this.tableConfig.findApi}] ${this.$t('notExists')}`
                }
                let requestUrl = api[this.tableConfig.findApi];
                let paramForm = {}
                this.$emit('getParamForm',(val)=>{
                    paramForm = val
                })
                let params = {
                    ...paramForm,
                    ...this.tableConfig.searchParams
                }

                let p = {
                    labelName: labelName,
                    attributeNames: name,
                    sheetName: "sheet1",
                    exportNum: -1,
                    requestUrl: requestUrl,
                    requestParam: params,
                    emailSubject: this.fileName,
                    post: true,
                    pageIndexParamName: 'pageIndex',
                    pageRowsParamName: 'pageRows',
                    dataCount: 'count',  // 总记录
                    structure: 'data',
                    toakenAttributeName: 'certificate',
                    token: this.certificate,
                    exportApi: compApi.exportData, // 导出接口
                    exportStatusApi: compApi.exportDataStatus // 查询导出状态
                };

                sessionStorage.setItem("downloadParams", JSON.stringify(p));

                window.open("/export.html")
            }
        }
    }
</script>

<style scoped>

</style>