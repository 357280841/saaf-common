/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-06 14:10:06 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-14 11:13:23
 */



<template>
    <div>
        <!-- <Button @click="click">导入</Button>
        <SaafImportExcel v-model="show" :templetId="139"></SaafImportExcel> -->
        <div>
            <SaafImportExcel :header-config="headerConfig" :desc="desc" @callback="callback"/>
        </div>
    </div>
</template>
<script>
export default {
    props:{
    },
    components: {
    },
    data () {
        return {
            show: false,
            desc: '请确保上传模板格式正确。只接受excel文件，接受多个sheet，第一个sheet将自动忽略，第一个sheet标题只能命名为"模板注意事项"',
            headerConfig: {
                "sheet1": [
                    {
                        name: '育婴顾问姓名',
                        require: true,
                        desc: 'guideName'
                    },
                    {
                        name: '是否发薪',
                        require: true,
                        desc: 'guideIsPaySalary'
                    },
                    {
                        name: '是否仅报销量',
                        desc: 'guideIsSubSales'
                    },
                    {
                        name: '入职日期',
                        require: true,
                        desc: 'guideWorkDate'
                    },
                    {
                        name: '性别',
                        require: true,
                        desc: 'guideSex'
                    },
                    {
                        name: '现居住地址',
                        desc: 'guideAddress'
                    },
                    {
                        name: '身份证号码',
                        require: true,
                        desc: 'guideId'
                    },
                    {
                        name: '身份证地址',
                        desc: 'guideIdAddress'
                    },
                    {
                        name: '民族',
                        require: true,
                        desc: 'guideNationality'
                    },
                    {
                        name: '户籍类型',
                        desc: 'guideHouseholdType'
                    }
                ],
                "sheet2": [
                    {
                        name: '入职日期',
                        require: true,
                        desc: 'guideWorkDate'
                    },
                    {
                        name: '性别',
                        desc: 'guideSex'
                    },
                    {
                        name: '现居住地址',
                        require: true,
                        desc: 'guideAddress'
                    },
                    {
                        name: '身份证号码',
                        require: true,
                        desc: 'guideId'
                    }
                ],
            }
        }
    },
    mounted () {
    },
    methods: {
        click(){
            this.show = true
        },
        callback(data) {
            console.log(data)
        }
    }
}
</script>
<style lang="less" scoped>

</style>