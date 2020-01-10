/*
 * @Author: zhengxiaowen
 * @Date: 2018-10-10 21:43:20
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-09 11:34:49
 */
import platform from '@/config/platform'

let host = platform.host

let api = {
    images_upload: `${host}/saaf-file-server/v2/images/upload`,
    v2_images: `${host}/saaf-file-server/v2/images/`,
    v2_file_upload: `${host}/saaf-file-server/v2/file/upload`,
    v2_file_download: `${host}/saaf-file-server/v2/file/download`,

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
    bpmProcessService_getGooflowProcessJSON: `${host}/bpmServer/bpmProcessService/getGooflowProcessJSON`

    /****** 流程 end ******/
}

export default api
