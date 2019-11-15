/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-06 14:10:06 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-13 11:41:11
 */



<template>
    <div>
        <h3>图片上传：</h3>
        <div class="img-box">
            <div class="img-item" v-for="(file,index) in filesList">
                <img v-if="file.thumb" :src="file.thumb" />
                <img v-else="file.fileObj.id" :src="`${getImg}?id=${file.fileObj.id}`" />
                <div class="progress-box" v-if="file.active || (file.progress !== '0.00' && file.progress !== '100.00')">
                    <div class="progress" :style="{width: file.progress + '%'}" role="progressbar"></div>
                    <div class="text" v-if="!file.error">{{file.progress}}%</div>
                    <div class="text" v-else="file.error">{{file.error.msg}}</div>
                </div>
                <Icon @click="close(file,index)" class="close" size="26" type="ios-close-circle" />
            </div>
            <div class="img-item add-icon" @click="click()">
                <Icon type="ios-add" size="40"/>
            </div>
            <div class="cb"></div>
        </div>
        
        <!-- <Button @click.prevent="$refs.upload.active = true">upload</Button> -->
        
        <file-upload
            v-show="false"
            ref="upload"
            v-model="filesList"
            accept="image/*"
            :post-action="api"
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
export default {
    props:{
        value: Array,
        // files: Array,
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
            api: api.images_upload,
            getImg: api.v2_images,
            headers:systemHook.getHeaders(),
            uploadAuto: true
        }
    },
    mounted () {
        this.formatData()
    },
    methods: {
        click(){
            let input = this.$refs.upload.$el.querySelector('input')
            input.click()
        },
        close(file,index){
            this.filesList.splice(index, 1)
            this.updateFiles()
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
                    this.$Message.error(newFile.response.message?newFile.response.message:newFile.response.msg)
                }
                if (newFile.success && !oldFile.success) {
                // success
                    if(newFile.response.status == "S"){
                        newFile.fileObj = newFile.response.data
                        this.updateFiles()
                    }else{

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
                // if (newFile && !oldFile) {
                //     // 过滤不是图片后缀的文件
                //     if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                //     return prevent()
                //     }
                // }
                // Automatic compression
                // 自动压缩
                if (newFile.file && newFile.type.substr(0, 6) === 'image/' && this.autoCompress > 0 && this.autoCompress < newFile.size) {
                newFile.error = 'compressing'
                const imageCompressor = new ImageCompressor(null, {
                    convertSize: Infinity,
                    // maxWidth: 512,
                    // maxHeight: 512,
                })
                imageCompressor.compress(newFile.file)
                    .then((file) => {
                    this.$refs.upload.update(newFile, { error: '', file, size: file.size, type: file.type })
                    })
                    .catch((err) => {
                    this.$refs.upload.update(newFile, { error: err.message || 'compress' })
                    })
                }
            }
            if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
                // Create a blob field
                // 创建 blob 字段
                newFile.blob = ''
                let URL = window.URL || window.webkitURL
                if (URL && URL.createObjectURL) {
                newFile.blob = URL.createObjectURL(newFile.file)
                }
                // Thumbnails
                // 缩略图
                newFile.thumb = ''
                if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
                newFile.thumb = newFile.blob
                }
            }
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
        value(arr){
            this.formatData()
        }
    }
}
</script>
<style lang="less" scoped>
.img-box {}
.img-item {
    width: 100px;
    height: 100px;
    border: #ccc solid 1px;
    float: left;
    margin-right: 10px;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
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