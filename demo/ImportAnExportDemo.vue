/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-06 14:10:06 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-14 11:13:23
 */



<template>
    <div>
        <Button @click="click">导入</Button>
        <SaafImportExcel v-model="show" :templetId="139"></SaafImportExcel>
        <div>
            <ImportExcel :header-config="headerConfig"/>
        </div>
    </div>
</template>
<script>
import ImportExcel from '../components/Excel/ImportExcel'
export default {
    props:{
    },
    components: {
        ImportExcel
    },
    data () {
        return {
            show: false,
            headerConfig: {
                "sheet1": [
                    {
                        name: '育婴顾问姓名',
                        require: true
                    },
                    {
                        name: '是否发薪',
                        require: true
                    },
                    {
                        name: '是否仅报销量'
                    }
                ],
                "sheet2": [
                    {
                        name: '入职日期',
                        require: true
                    },
                    {
                        name: '性别'
                    },
                    {
                        name: '现居住地址',
                        require: true
                    },
                    {
                        name: '身份证号码',
                        require: true
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
        }
    }
}
</script>
<style lang="less" scoped>

</style>