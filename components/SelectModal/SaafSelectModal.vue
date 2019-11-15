/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-27 09:09:17 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-07 10:08:41
 */


<template>
    <div>
        <Input :disabled="disabled" v-if="showInput" v-model="value" readonly suffix="ios-search" @click.native="open">
            <!-- <Button icon="ios-search" slot="suffix" /> -->
        </Input>
        <Modal
            v-model="modal"
            :title="selectConfig.title"
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
                        :currentRow.sync="currentRow"></SaafModalTableList>
                <div class="modal-btn">
                    <Button class="mr10" @click="cancel">取消</Button>
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
            let tableColumns = []
            if(this.type=="radio"){
                
            }else  if(this.type=="checkbox"){

            }
            this.sTableConfig = tableConfig
        }
    },
    watch:{
        tableConfig(val){
            this.watchTableConfig()
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