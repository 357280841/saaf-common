/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-27 09:09:17 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-02 15:09:56
 */


<template>
    <div>
        <Input class="saaf-select-clear" :disabled="disabled" v-if="showInput" v-model="value" readonly clearable @on-clear="clear">
            <!-- <Button icon="ios-search" slot="suffix" /> -->
            <Button slot="append" :disabled="disabled" icon="ios-search" @click.native="open"></Button>
        </Input>
        <Modal
            v-model="modal"
            :title="modalTitle || selectConfig.title"
            @on-ok="ok"
            @on-cancel="cancel"
            footer-hide
            :styles="{top: '20px'}"
            width="70%">
                        <SaafModalTableList 
                        ref="SaafModalTableList" 
                        v-if="sTableConfig"
                        :type="type"
                        :tableConfig="sTableConfig" 
                        :selectConfig="selectConfig"
                        :searchList="searchList"
                        :searchSpan="searchSpan"
                        :currentRow.sync="currentRow"></SaafModalTableList>
                <div class="modal-btn">
                    <Button class="mr10" @click="clear">清空</Button>
                    <Button type="primary" :disabled="type=='radio'&&!currentRow" @click="ok">确定</Button>
                </div>
        </Modal>
    </div>
</template>
<script>
export default {
    props:{
        type: {
            type: String,
            required: true
        },
        selectConfig:{
            type: Object,
            required: true
        },
        tableConfig:{
            type: Object,
            required: true
        },
        value:{
            type: String,
            required: false
        },
        showInput:{
            type: Boolean,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false
        },
        searchList: {
            type: Array,
            default: () => {return []},
            required: false
        },
        searchSpan: {
            type: Number,
            default: 7,
            required: false
        },
        modalTitle: {
            type: String,
            required: false
        }
    },
    components: {
    },
    data () {
        return {
            modal: false,
            currentRow:null,
            selectRow:[],
            sTableConfig:null
        }
    },
    mounted () {
        this.watchTableConfig()
    },
    methods: {
        ok(){
            if(this.type=="radio"){
                this.$emit('on-change', this.$refs.SaafModalTableList.currentRow)
            }else  if(this.type=="checkbox"){
                this.$emit('on-change', this.$refs.SaafModalTableList.selectList)
            }
            this.close()
        },
        cancel(){
            this.$refs.SaafModalTableList.refreshRow()
            this.close()
        },
        open(){
            if(this.disabled){
                return
            }
            this.$refs.SaafModalTableList.refreshRow()
            this.$refs.SaafModalTableList.getFirstPage()
            this.modal = true
        },
        close(){
            this.modal = false
        },
        watchTableConfig(){
            let tableConfig = JSON.parse(JSON.stringify(this.tableConfig))
            let tableColumns = this.tableConfig.tableColumns
            tableConfig.tableColumns = tableColumns;
            if(this.type=="radio"){
                
            }else  if(this.type=="checkbox"){

            }
            this.sTableConfig = tableConfig
        },
        clear(){
            if(this.type=="radio"){
                this.$emit('on-change', {})
            }else  if(this.type=="checkbox"){
                this.$emit('on-change', [])
            }
            this.close()
        }
    },
    watch:{
        tableConfig: {
            handler(newVal, oldVal) {
                this.watchTableConfig()
            },
            deep: true
        }
    }
}
</script>
<style lang="less" scoped>
.modal-btn {
    position: absolute;
    right: 20px;
    margin-top: -30px;
}
</style>