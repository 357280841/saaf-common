<template>
    <div>
        <h2 class="pb10">富文本编辑器</h2>
        <div class="pb20">
            <h3>SaafTextEditor 简单工具条模式</h3>
            <SaafTextEditor v-model="formData.articleContentSimple" ref="articleContentSimple" :config="config" toolbars-mode="simple"></SaafTextEditor>
            <Button class="mr10" @click="getTextSimple()">获取文本内容</Button>
            <Input v-model="formData.articleContentTextSimple" type="textarea"
                   :autosize="{minRows: 5,maxRows: 10}"></Input>
        </div>
        <div class="pb20">
            <h3>SaafTextEditor 全部工具条模式</h3>
            <SaafTextEditor v-model="formData.articleContentFull" ref="articleContentFull" :config="config" toolbars-mode="full"></SaafTextEditor>
            <Button class="mr10" @click="getTextFull()">获取文本内容</Button>
            <Input v-model="formData.articleContentTextFull" type="textarea"
                   :autosize="{minRows: 5,maxRows: 10}"></Input>
        </div>
        <div class="pb20">
            <h3>SaafTextEditor 自定义工具条模式</h3>
            <SaafTextEditor v-model="formData.articleContentCustomer" ref="articleContentCustomer" :config="config" :toolbars="toolbars"></SaafTextEditor>
            <Button class="mr10" @click="getTextCustomer()">获取文本内容</Button>
            <Input v-model="formData.articleContentTextCustomer" type="textarea"
                   :autosize="{minRows: 5,maxRows: 10}"></Input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TextEditorDemo",
        data() {
            return {
                formData: {
                    articleContentSimple: "",
                    articleContentFull: "",
                    articleContentCustomer: "",
                    articleContentTextSimple: "",
                    articleContentTextFull: "",
                    articleContentTextCustomer: ""
                },
                config: {
                    enableAutoSave: false,
                    autoHeightEnabled: false,
                    initialFrameHeight: 150,
                    initialFrameWidth: '100%',
                    zIndex: 1200
                },
                toolbars: [[
                    'fullscreen', 'source', '|', 'undo', 'redo', '|',
                    'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
                    'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                    'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                    'directionalityltr', 'directionalityrtl', 'indent', '|','map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
                    'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
                    'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
                    'print', 'preview', 'searchreplace', 'drafts', 'help'
                ]]
            }
        },
        methods:{
            getTextSimple(){debugger
                this.formData.articleContentTextSimple = this.$refs.articleContentSimple.getContent();
            },
            getTextFull(){
                this.formData.articleContentTextFull = this.$refs.articleContentFull.getContent();
            },
            getTextCustomer(){
                this.formData.articleContentTextCustomer = this.$refs.articleContentCustomer.getContent();
            }
        }
    }
</script>

<style scoped>

</style>