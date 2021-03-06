/*
 * @Author: zhengxiaowen
 * @Date: 2018-10-10 21:43:20
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-09 11:34:49
 */
import platform from '@/config/platform'

let host = platform.host

let api = {
    images_upload: `${host}/fileServer/v2/images/upload`,
    v2_images: `${host}/fileServer/v2/images/`,
    v2_file_upload: `${host}/fileServer/v2/file/upload`,
    v2_file_download: `${host}/fileServer/v2/file/download`,

    editorActionCenter: `${host}/fileServer/ueditorService/actionCenter`,
    editorScrawlUpload: `${host}/fileServer/ueditorService/scrawlUpload`,

    exportData: `${host}/exportServer/dataExportService/export`, // 导出功能
    exportDataStatus: `${host}/exportServer/dataExportService/getExportResult`, // 导出状态

    /****** 流程 start ******/
    // 撤回
    bpmTaskService_revoke: `${host}/bpmServer/bpmTaskService/revoke`,
    // 驳回
    bpmTaskService_complete: `${host}/bpmServer/bpmTaskService/complete`,
    // 发消息
    bpmCommunicateService_save: `${host}/bpmServer/bpmCommunicateService/save`,
    // 增加助审
    bpmTaskService_addSubTask: `${host}/bpmServer/bpmTaskService/addSubTask`,
    // 审批历史
    bpmHistoryService_findHistoricActivities: `${host}/bpmServer/bpmHistoryService/findHistoricActivities`,

    // 查询任务节点
    bpmHistoryService_findTaskNodes: `${host}/bpmServer/bpmHistoryService/findTaskNodes`,

    // 获取流程实例
    bpmListService_getByParam: `${host}/bpmServer/bpmListService/getBpmListByParam`,

    // 获取流程图
    bpmProcessService_getGooflowProcessJSON: `${host}/bpmServer/bpmProcessService/getGooflowProcessJSON`,

    // 根据流程实例ID查询当前用户的审批任务
    bpmFindTasksByProcInstId: `${host}/bpmServer/bpmTaskService/findTasksByProcInstId`
    /****** 流程 end ******/
}

export default api
