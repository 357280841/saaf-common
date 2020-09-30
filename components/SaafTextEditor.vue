<template>
    <div>
        <script id="editor" type="text/plain"/>
    </div>
</template>

<script>
    import '../plugins/Ueditor/themes/default/css/ueditor.min.css'
    import '../plugins/Ueditor/ueditor.config.js'
    import '../plugins/Ueditor/ueditor.all.js'
    import '../plugins/Ueditor/lang/zh-cn/zh-cn.js'
    import '../plugins/Ueditor/ueditor.parse.min.js'
    import api from '../config/apiCommon'

    export default {
        name: "SaafTextEditor",
        props: {
            value: {
                type: String,
                default: ''
            },
            config: {
                type: Object,
                default:()=>{
                    return new Object();
                }
            },
            toolbarsMode: {
                type: String,
                default: 'simple'
            },
            toolbars: {
                type: Array,
                default:()=>{
                    return new Array();
                }
            }
        },
        data() {
            return {
                editor: null,
                defaultToolbars: {
                    //简单模式
                    simple: [[
                        'undo', 'redo', '|', 'bold', 'fontfamily', 'fontsize', 'forecolor', 'backcolor', '|',
                        'simpleupload', 'emotion', 'scrawl', 'snapscreen'
                    ]],
                    //全部工具模式
                    full: [[
                        'fullscreen', 'source', '|', 'undo', 'redo', '|',
                        'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
                        'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                        'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                        'directionalityltr', 'directionalityrtl', 'indent', '|',
                        'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
                        'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                        'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
                        'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
                        'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
                        'print', 'preview', 'searchreplace', 'drafts', 'help'
                    ]]
                },
                defaultConfig:{
                    enableAutoSave: false,
                    autoHeightEnabled: false,
                    initialFrameHeight: 300,
                    initialFrameWidth: '100%',
                    zIndex: 1200
                }
            }
        },
        mounted() {
            this.initEditor()
        },
        methods: {
            // 基本设置
            initEditor() {
                let toolbars = this.getToolbars();
                let config = this.getConfig();
                config.toolbars = toolbars;
                config.serverUrl = api.editorActionCenter;
                config.scrawlUpUrl = api.editorScrawlUpload;
                config.UEDITOR_HOME_URL = '/plugins/Ueditor/'

                this.editor = UE.getEditor('editor', config);

                this.editor.ready(() => {
                    this.editor.setContent(this.value);
                })
            },
            // 获取内容
            getContent() {
                return this.editor.getContent()
            },
            getToolbars(){
                let toolbars;
                if(this.toolbars.length > 0){
                    toolbars = this.toolbars;
                }else{
                    toolbars = this.defaultToolbars[this.toolbarsMode]
                }
                return toolbars;
            },
            getConfig(){
                let config;
                if(Object.keys(this.config).length > 0){
                    config = this.config;
                }else{
                    config = this.defaultConfig;
                }
                return config;
            }
        },
        watch: {
            value: function (val) {
                let con = val ? val : '';
                this.editor.ready(() => {
                    this.editor.setContent(con)
                })
            }
        },
        destroyed() {
            this.editor.destroy()
        }
    }
</script>
