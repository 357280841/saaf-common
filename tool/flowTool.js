/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-12-09 09:25:16 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-12 14:12:46
 */

import { fetchTool } from 'saaf-common'
import api from '../config/apiCommon'
import fetch from '../config/fetchDataCommon'

export default class flowTool {

    //查询流程实例

    static getFlowInstance(params){
        return new Promise((resolve, reject) => {
            fetch.bpmListService_getByParam(params).then(res => {
                resolve(res)
            }).catch(err=> {
                reject(err)
            })
        })
    }

    // 撤销
    // processInstanceId, taskId
    static revoke(params){
        return new Promise((resolve, reject)=>{
            fetch.bpmTaskService_revoke(params).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    // 通过
    // {
    //     "properties": {
    //       "opinion": "通过",
    //       "option": "Y",
    //       "menucode": "DB"
    //     },
    //     "variables": [
    //       {
    //         "name": "tasks_assignees",
    //         "type": "string",
    //         "value": []
    //       }
    //     ],
    //     "responsibilityId": "2258012",
    //     "taskId": "c5a9fe5b-17f5-11ea-a917-000c2998babf",
    //     "saveonly": false
    // }
    static pass(params){
        return new Promise((resolve, reject)=>{
            fetch.bpmTaskService_complete(params).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    // 驳回
    // {
    //     "properties": {
    //       "opinion": "不予以通过",
    //       "option": "RJ",
    //       "menucode": "DB"
    //     },
    //     "variables": [
    //       {
    //         "name": "tasks_assignees",
    //         "type": "string",
    //         "value": []
    //       }
    //     ],
    //     "responsibilityId": "2258012",
    //     "taskId": "0e808fe9-1a25-11ea-9fbb-000c2998babf",
    //     "saveonly": false
    //   }
    static reject(params){
        return new Promise((resolve, reject)=>{
            fetch.bpmTaskService_complete(params).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }
    
    // 驳回重审
    // {
    //     "properties": {
    //       "opinion": "驳回重审意见",
    //       "option": "RT",
    //       "menucode": "DB",
    //       "taskDefinitionId": "sid-9D67BD35-D96F-4F68-91D8-5B2F160E6F05"
    //     },
    //     "variables": [
    //       {
    //         "name": "tasks_assignees",
    //         "type": "string",
    //         "value": []
    //       }
    //     ],
    //     "responsibilityId": "2258012",
    //     "taskId": "dd295968-1a28-11ea-9fbb-000c2998babf",
    //     "saveonly": false
    //   }
    static retrial(params){
        return new Promise((resolve, reject)=>{
            fetch.bpmTaskService_complete(params).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    // 发消息
    // {
    //     "taskId": "287c1dc7-1a2b-11ea-9fbb-000c2998babf",
    //     "type": "COMMON",
    //     "receiverId": "62169",
    //     "content": "test"
    // }
    static message(params){
        return new Promise((resolve, reject)=>{
            fetch.bpmCommunicateService_save(params).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    // 增加助审
    // {
    //     "taskId": "287c1dc7-1a2b-11ea-9fbb-000c2998babf",
    //     "taskName": "史姣姣",
    //     "description": "助审描述",
    //     "userId": 1651408
    // }
    static addSubTask(params){
        return new Promise((resolve, reject)=>{
            fetch.bpmTaskService_addSubTask(params).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    // 审批历史
    // {"processInstanceId":"544653c3-17c6-11ea-9f41-000c2998babf"}
    static findHistoricActivities(params){
        return new Promise((resolve, reject)=>{
            fetch.bpmHistoryService_findHistoricActivities(params).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    // 查询任务节点
    // {"taskId":"cfa5af9f-1033-11ea-9f41-000c2998babf","type":1}
    static findTaskNodes(params){
        return new Promise((resolve, reject)=>{
            fetch.bpmHistoryService_findTaskNodes(params).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    // 根据流程code与职责，查询具体流程状态
    // {"processDefinitionKey":"PROMOTION_OBJECT_APPLY","responsibilityId":"2258012"}
    static getStartUrl(params){
        return new Promise((resolve, reject)=>{
            fetch.bpmProcessService_getStartUrl(params).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}