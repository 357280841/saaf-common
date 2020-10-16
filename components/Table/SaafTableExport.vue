<template>
    <Button type="text" size="small" @click="doExport"><span class="fa fa-file-excel-p pr5"></span>{{label}}</Button>
</template>

<script>
    export default {
        name: "SaafTableExport",
        props:{
            label: {
                type: String,
                default: 'Export'
            },
            tableConfig:{
                type: Object,
                required: true,
            }
        },
        data () {
            return {

            }
        },
        mounted () {

        },
        methods: {
            doExport(){
                let tableColumns = tableConfig.tableColumns;
                let labelName = [];
                let name = [];
                for (var i = 0; i < tableColumns.length; i++) {
                    labelName.push(tableColumns[i].title)
                    name.push(tableColumns[i].key)
                }
            }
        }
    }
</script>

<style scoped>

</style>