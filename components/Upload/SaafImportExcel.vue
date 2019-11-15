/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-13 11:49:05 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-14 11:12:24
 */



<template>
    <div>
        <Modal
            v-model="value"
            title="导入"
            @on-ok="ok"
            @on-cancel="cancel">
            <div class="pb20">
                <Button @click="download"><Icon size="20" class="pr10" type="md-cloud-download" />模板下载</Button>
            </div>
            <div>
                <Button type="success" @click="click"><Icon size="20" class="pr10" type="md-cloud-upload" />导入</Button>
            </div>
            <div class="img-box">
                <div class="img-item" v-for="(file,index) in filesList">
                    <div>文件名：{{file.name}}</div>
                    <div>
                        <div class="text" v-if="!file.error">进度：{{file.progress}}%</div>
                        <div class="text" v-else="file.error">进度：{{file.error.msg}}</div>
                    </div>
                    <!-- <Icon @click="close(file,index)" class="close" size="26" type="ios-close-circle" /> -->
                </div>
            </div>
        </Modal>

        <file-upload
            v-show="false"
            ref="upload"
            v-model="filesList"
            :post-action="uploadApi"
            :multiple="true"
            :headers="headers"
            @input-file="inputFile"
            @input-filter="inputFilter"
        >上传文件</file-upload>


    </div>
</template>
<script>
import api from '../../config/apiCommon'
import systemHook from '@/config/systemHook'
import { fetchTool } from '../..'
export default {
    props:{
        value: String | Number,
        templetId: String | Number,
    },
    model: {
        prop: 'value',
        event: 'event'
    },
    components: {
    },
    data () {
        return {
            filesList: [],
            headers:systemHook.getHeaders(),
            uploadApi: api.v2_file_upload,
            downloadApi: api.v2_file_download,
            uploadAuto: true
        }
    },
    mounted () {

    },
    methods: {
        click(){
            this.filesList = []
            let input = this.$refs.upload.$el.querySelector('input')
            input.click()
        },
        download(){
            // fetchTool.get(this.downloadApi,{id: '139'})
            window.location.href = `${this.downloadApi}?id=${this.templetId}`
        },
        ok(){
            
        },
        cancel(){
            
        },
        inputFile(newFile, oldFile) {
            if (newFile && oldFile) {
                // update
                if (newFile.active && !oldFile.active) {
                // beforeSend
                // min size
                if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
                    this.$refs.upload.update(newFile, { error: 'size' })
                }
                }
                if (newFile.progress !== oldFile.progress) {
                // progress
                }
                if (newFile.error && !oldFile.error) {
                // error
                    newFile.error = {
                        msg: '上传失败'
                    }
                    if(newFile.response.status == 'E' || newFile.response.status == 500){
                        this.$Message.error(newFile.response.message?newFile.response.message:newFile.response.msg)
                    }
                }
                if (newFile.success && !oldFile.success) {
                // success
                    if(newFile.response.status == "S"){
                        newFile.fileObj = newFile.response.data
                        this.updateFiles()
                    }else{
                        newFile.error = {
                            msg: newFile.response.msg
                        }
                        this.$Message.error(newFile.response.message?newFile.response.message:newFile.response.msg)
                    }
                }
            }
            if (!newFile && oldFile) {
                // remove
                if (oldFile.success && oldFile.response.id) {
                // $.ajax({
                //   type: 'DELETE',
                //   url: '/upload/delete?id=' + oldFile.response.id,
                // })
                }
            }
            // Automatically activate upload
            if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
                if (this.uploadAuto && !this.$refs.upload.active) {
                this.$refs.upload.active = true
                }
            }
        },
        inputFilter(newFile, oldFile, prevent) {
            
            if (newFile && !oldFile) {
                // Before adding a file
                // 添加文件前
                // Filter system files or hide files
                // 过滤系统文件 和隐藏文件
                if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
                return prevent()
                }
                // Filter php html js file
                // 过滤 php html js 文件
                if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
                return prevent()
                }

            }
            // if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
            //     // Create a blob field
            //     // 创建 blob 字段
            //     newFile.blob = ''
            //     let URL = window.URL || window.webkitURL
            //     if (URL && URL.createObjectURL) {
            //     newFile.blob = URL.createObjectURL(newFile.file)
            //     }
            //     // Thumbnails
            //     // 缩略图
            //     newFile.thumb = ''
            //     if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
            //     newFile.thumb = newFile.blob
            //     }
            // }
        },
        formatData(){
            this.filesList = []
            this.value.map((item,index)=>{
                this.filesList.push({
                    active: false,
                    progress: '100.00',
                    fileObj: item
                })
            })
        },
        updateFiles(item, index){
            let list = []
            this.filesList.map((item)=>{
                list.push(item.fileObj)
            })
            this.$emit('event', list)
        }
    },
    watch:{
        value(val){
            this.$emit('event', val);
        }
    }
}
</script>
<style lang="less" scoped>

.img-box {
    padding: 20px 0;
}
.img-item {
    width: 100%;
    .close {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #fff;
        border-radius: 100px;
        &:hover {
            color: red;
        }
    }
    .progress-box{
        .progress {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #00000090;
        }
        .text {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            font-size: 16px;
            color: #fff;
            text-align: center;
            line-height: 100px;
            border: #ccc solid 1px;
        }
    }

}
.add-icon {
    text-align: center;
    padding-top: 30px;
}
</style>