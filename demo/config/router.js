/*
 * @Author: zhengxiaowen 
 * @Date: 2019-05-24 17:37:33 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2020-11-05 16:42:06
 */



let router = [
    {
        path: '/demoIndex',
        component: () => import('../DemoIndex.vue'),
        children: [
            {
                path: 'axios',
                urlName: '请求工具类使用',
                component: () => import('../Axios.vue'),
            },
            {
                path: 'TreeDemo',
                urlName: '树形组件',
                component: () => import('../TreeDemo.vue'),
            },
            {
                path: 'SuperTableDemo',
                url: 'SuperTableDemo?menuId=1872&respId=390006',
                urlName: '超级列表组件<br/>SaafSuperTableDemo',
                component: () => import('../SuperTableDemo.vue'),
            },
            {
                path: 'MergeTableDemo',
                url: 'MergeTableDemo?menuId=1872&respId=390006',
                urlName: '多个零碎组件组合使用',
                component: () => import('../MergeTableDemo.vue'),
            },
            {
                path: 'HeaderDemo',
                url: 'HeaderDemo?menuId=1872&respId=390006',
                urlName: '抬头组件',
                component: () => import('../HeaderDemo.vue'),
            },
            {
                path: 'SimpleTableDemo',
                url: 'SimpleTableDemo',
                urlName: 'table组件<br/>SaafSimpleTable',
                component: () => import('../SimpleTableDemo.vue'),
            },
            {
                path: 'ParamFormDemo',
                urlName: '查询表单组件<br/>ParamFormDemo',
                component: () => import('../ParamFormDemo.vue'),
            },
            {
                path: 'SelectModalDemo',
                urlName:'单选/多选弹窗口<br/>SelectModalDemo',
                component: () => import('../SelectModalDemo.vue'),
            },
            {
                path: 'UploadDemo',
                urlName: '图片上传/文件上传',
                component: () => import('../UploadDemo.vue'),
            },
            // {
            //     path: 'TableDemo',
            //     urlName: '列表组件Table',
            //     component: () => import('../TableDemo.vue'),
            // },
            {
                path: 'DatePickerDemo',
                urlName: '日期组件<br/>SaafDatePicker',
                component: () => import('../DatePickerDemo.vue'),
            },
            {
                path: 'ImportAnExportDemo',
                urlName: '导入导出组件',
                component: () => import('../ImportAnExportDemo')
            },
            {
                path: 'I18nDemo',
                urlName: '国际化',
                component: () => import('../I18nDemo')
            },
            {
                path: 'TabsToolDemo',
                urlName: 'tabs函数工具使用',
                component: () => import('../TabsToolDemo')
            },
            {
                path: 'iframeToolDemo',
                urlName: '全局操作函数，跨iframe可运行',
                component: () => import('../IframeToolDemo')
            },
            {
                path: 'TextEditorDemo',
                urlName: '富文本编辑器组件',
                component: () => import('../TextEditorDemo')
            },
        ]
    },
]


export default router