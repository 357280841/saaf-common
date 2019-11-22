/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-06 14:10:06 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-15 09:08:06
 */



<template>
    <div>
        <div class="pb50">
            <h3>SaafImageUpload</h3>
            
            <SaafImageUpload ref="SaafImageUpload" v-model="files" />
            <div class="pt10">
                <div v-for="item in files">
                    <span class="pr10">id: {{item.id}}</span>
                    <span class="pr10">name: {{item.originalFileName}}</span>
                </div>
            </div>
            <Button class="mr10" @click="updateImage()">重置数据</Button>
            <Button @click="clearImage()">清除数据</Button>
        </div>
        <div class="pb50">
            <h3>SaafFileUpload</h3>
            <SaafFileUpload/>
        </div>
    </div>
</template>
<script>
import {fetchTool} from 'saaf-common'
export default {
    props:{
    },
    components: {
    },
    data () {
        return {
            files: [
                {
                    "lan": null,
                    "creationDate": null,
                    "createdBy": null,
                    "lastUpdatedBy": null,
                    "lastUpdateDate": null,
                    "id": 64,
                    "fileId": "B1029C645068A11AA929E78A586FFFC8",
                    "fileName": "0",
                    "fileType": "image/png",
                    "suffixName": null,
                    "functionId": null,
                    "businessId": null,
                    "originalFileName": "0.png",
                    "fileStoreSystem": null,
                    "fileStoreType": null,
                    "filePath": null,
                    "rootPath": null,
                    "bucketName": null,
                    "status": null,
                    "fileSize": null,
                    "fileDesc": null,
                    "fileUrl": "http://121.36.159.44/11/1/0000/B1029C645068A11AA929E78A586FFFC8.png",
                    "deleteFlag": 0
                },
                {
                    "lan": null,
                    "creationDate": null,
                    "createdBy": null,
                    "lastUpdatedBy": null,
                    "lastUpdateDate": null,
                    "id": 66,
                    "fileId": "F73B1920CEEE4ADEB5E9A23803FC4349",
                    "fileName": "0 (1)",
                    "fileType": "image/png",
                    "suffixName": null,
                    "functionId": null,
                    "businessId": null,
                    "originalFileName": "0 (1).png",
                    "fileStoreSystem": null,
                    "fileStoreType": null,
                    "filePath": null,
                    "rootPath": null,
                    "bucketName": null,
                    "status": null,
                    "fileSize": null,
                    "fileDesc": null,
                    "fileUrl": "http://121.36.159.44/11/1/0000/F73B1920CEEE4ADEB5E9A23803FC4349.png",
                    "deleteFlag": 0
                }
            ],
            backup:[]
        }
    },
    mounted () {
        this.backup = JSON.parse(JSON.stringify(this.files))
    },
    methods: {
        updateImage(){
            this.files = JSON.parse(JSON.stringify(this.backup))
            // this.$refs.SaafImageUpload.formatData()
        },
        clearImage(){
            this.files = []
        }
    }
}
</script>
<style lang="less" scoped>

</style>