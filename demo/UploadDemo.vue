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
            
            <SaafImageUpload ref="SaafImageUpload" v-model="files" :maximum="5"/>
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
                    "filesId": "B1029C645068A11AA929E78A586FFFC8",
                    "filesName": "0",
                    "filesType": "image/png",
                    "suffixName": null,
                    "functionId": null,
                    "businessId": null,
                    "originalFileName": "0.png",
                    "filesStoreSystem": null,
                    "filesStoreType": null,
                    "filesPath": null,
                    "rootPath": null,
                    "bucketName": null,
                    "status": null,
                    "filesSize": null,
                    "filesDesc": null,
                    "filesUrl": "http://121.36.159.44/11/1/0000/B1029C645068A11AA929E78A586FFFC8.png",
                    "deleteFlag": 0
                },
                {
                    "lan": null,
                    "creationDate": null,
                    "createdBy": null,
                    "lastUpdatedBy": null,
                    "lastUpdateDate": null,
                    "id": 66,
                    "filesId": "F73B1920CEEE4ADEB5E9A23803FC4349",
                    "filesName": "0 (1)",
                    "filesType": "image/png",
                    "suffixName": null,
                    "functionId": null,
                    "businessId": null,
                    "originalFileName": "0 (1).png",
                    "filesStoreSystem": null,
                    "filesStoreType": null,
                    "filesPath": null,
                    "rootPath": null,
                    "bucketName": null,
                    "status": null,
                    "filesSize": null,
                    "filesDesc": null,
                    "filesUrl": "http://121.36.159.44/11/1/0000/F73B1920CEEE4ADEB5E9A23803FC4349.png",
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
