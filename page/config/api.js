/*
 * @Author: zhengxiaowen
 * @Date: 2019-05-24 17:36:35
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-10 15:35:26
 */

import platform from '@/config/platform'

let host = platform.host

let api = {
    baseLookupTypeService_find: `${host}/baseServer/baseLookupTypeService/find`,
    baseLoginService_login: `${host}/baseServer/baseLoginService/login`,
    baseLookupValuesService_findDic: `${host}/baseServer/baseLookupValuesService/findDic`, // 查询快码
    baseLookupValuesService_find: `${host}/baseServer/baseLookupValuesService/find`,
    baseLookupValuesService_saveOrUpdateALL: `${host}/baseServer/baseLookupValuesService/saveOrUpdateALL`,
    baseLookupValuesService_delete: `${host}/baseServer/baseLookupValuesService/delete`,
    baseResourceService_findBaseResourceByRespMenuId: `${host}/baseServer/baseResourceService/findBaseResourceByRespMenuId`, // 查询菜单按钮资源
    baseAccreditService_findBaseMenuByRespId: `${host}/baseServer/baseMenuService/findBaseMenuByRespId`, // 根据现职查菜单
    baseAccreditService_findMenuList: `${host}/baseServer/baseMenuService/findMenuList`, // 删除已收藏功能菜单

    // /*员工维护*/
    // employee_findList: `${host}/baseServer/basePersonService/findPagination`,// 员工维护列表 
    // employee_save: `${host}/baseServer/basePersonService/save`,// 保存新建员工

    // /*部门*/
    // findDeptTree: `${host}/baseServer/baseDepartmentService/findDeptTree`,//部门目录列表
    // findPersonAssignPagination: `${host}/baseServer/basePersonAssignService/findPersonAssignPagination`,//查询部门人员
    // findDeptPagination: `${host}/baseServer/baseDepartmentService/findDeptPagination`,//查询部门
    // saveOrUpdateBaseDepartment: `${host}/baseServer/baseDepartmentService/saveOrUpdateBaseDepartment`,//保存新增部门
    // findDeptInfo: `${host}/baseServer/baseOrgStructureService/findDeptInfo`,//上级部门列表

    // /*职位*/
    // findBaseJobPagination: `${host}/baseServer/baseJobService/findBaseJobPagination`,//查询职务
    // saveOrUpdateBaseJob: `${host}/baseServer/baseJobService/saveOrUpdateBaseJob`,//保存新增职务


    // findBasePositionNewPagination: `${host}/baseServer/basePositionNewService/findBasePositionNewPagination`,// 职位搜索
    // position_findPosiList: `${host}/baseServer/baseOrgStructureService/findDeptInfo`,// 部门信息查询
    // staffInquiry_findSInQList: `${host}/baseServer/baseOrgStructureService/findPersonPagination`,//员工查询列表
    // positionAllot_findList: `${host}/baseServer/baseResourceService/findPersonAssignPagination`,//职位分配列表
    // positionAllotAdd_findList: `${host}/baseServer/baseUsersService/findPagination`,//人员信息查询列表
    // saveOrUpdatePersonAssign: `${host}/baseServer/basePersonAssignService/saveOrUpdatePersonAssign`,//保存新增职位


    // saveOrUpdatePositionNewInfo: `${host}/baseServer/basePositionNewService/saveOrUpdatePositionNewInfo`,//保存新增职位对


    // positionLevel_findList: `${host}/baseServer/basePersonLevelService/findPersonLevelPagination`,//职位层级查询
    // saveOrUpdatePersonLevel: `${host}/baseServer/basePersonLevelService/saveOrUpdatePersonLevel`,//保存新增职位层级

    // baseLookupTypeService_find: `${host}/baseServer/baseLookupTypeService/find`,// 数据字典

    // /*角色管理*/
    // findRole: `${host}/baseServer/baseRoleService/findPagination`,//角色管理
    // saveRole: `${host}/baseServer/baseRoleService/save`,//保存角色
    // deleteRole: `${host}/baseServer/baseRoleService/delete`,//删除角色


    // /*资源管理*/
    // findResource: `${host}/baseServer/baseResourceService/findPagination`,//查询资源
    // find_resource: `${host}/baseServer/baseResourceService/findPagination`,//查询资源
    // modified_Resource: `${host}/baseServer/baseResourceService/save`,//修改资源
    // delete_Resource: `${host}/baseServer/baseResourceService/delete`,//修改资源
    // find_button: `${host}/baseServer/baseButtonDataService/findPagination`,//查询按钮

    // /*基础功能按钮管理*/
    // findBtnList: `${host}/baseServer/baseButtonDataService/findPagination`,//查询基础功能按钮
    // baseButtonDataService_findBtnList: `${host}/baseServer/baseButtonDataService/findPagination`,//查询基础功能按钮
    // saveBtnList: `${host}/baseServer/baseButtonDataService/save`,//保存基础功能按钮

    // /*菜单管理*/
    // MenuManager_findMenuList: `${host}/baseServer/baseMenuService/findBaseMenuList`,//查询菜单
    // findBaseResourceByMenuId: `${host}/baseServer/baseResourceService/findBaseResourceByMenuId`,//查询模块按钮资源
    // findAllBtn: `${host}/baseServer/baseButtonDataService/findPagination`,//查询所有按钮资源
    // MenuManager_MenuSave: `${host}/baseServer/baseMenuService/save`,//保存,修改菜单
    // MenuManager_menuDelete: `${host}/baseServer/baseMenuService/delete`,//删除菜单

    // /* 角色分配菜单*/
    // findRoleName: `${host}/baseServer/baseRoleService/findPagination`,//查询角色名称
    // findBaseMenuResourceTree: `${host}/baseServer/baseMenuService/findBaseMenuResourceTree`,//查询角色分配菜单
    // saveMenuResource: `${host}/baseServer/baseMenuService/saveMenuResource`,//保存角色分配编辑

    // schedulingError_findList: `${host}/schedule/scheduleErrorServices/findSchedulesErrors`, //查询调度异常监控
    // gtasks_findList: `${host}/bpmServer/bpmTaskDelegateConfigService/findDelegateConfig`, //查询委托审批

    // //我的流程
    // myProcessList_findList: `${host}/bpmServer/bpmListService/findBpmLists`,//查询我的流程

    // //待阅
    // findNotifyTasks: `${host}/bpmServer/bpmNotifyTaskService/findNotifyTasks`,//查询我的流程

    // //流程待办任务查询
    // processFindTodoTasks: `${host}/bpmServer/bpmTaskService/findTodoTasks`,

    // //流程设计
    // findCategoriesModels: `${host}/bpmServer/bpmCategoryService/findCategories`,//查找流程节点
    // findModelsProcess: `${host}/bpmServer/bpmModelService/findModels`,//查找流程节点内容
    // saveProcess: `${host}/bpmServer/bpmCategoryService/save`,//保存节点
    // deleProcess: `${host}/bpmServer/bpmCategoryService/delete`,//删除节点
    // addProcess: `${host}/bpmServer/bpmModelService/save`,//保存节点新增流程数据
    // deleProcessNodeData: `${host}/bpmServer/bpmModelService/delete`,//删除节点流程数据
    // findTaskConfig: `${host}/bpmServer/bpmTaskConfigService/findTaskConfig`,//查找节点名称
    // get: `${host}/bpmServer/bpmTaskConfigService/get`,//查找节点数据


    // // /*组织*/
    // // organizationSave: `${host}/baseServer/baseOrganizationService/save`, // 保存
    // // organizationFind: `${host}/baseServer/baseOrganizationService/findPagination`, // 查询
    // // organizationDel: `${host}/baseServer/baseOrganizationService/delete`, // 删除
    // // personListByOrgId: `${host}/baseServer/basePersonService/findBasePersonsByOrgId`,


    // /*组织*/
    // organizationSave: `${host}/baseServer/baseOrganizationService/save`, // 保存
    // organizationFind: `${host}/baseServer/baseOrganizationService/findPagination`, // 查询
    // organizationDel: `${host}/baseServer/baseOrganizationService/delete`, // 删除
    // personListByOrgId: `${host}/baseServer/basePersonService/findBasePersonsByOrgId`,

    // collect_findList: `${host}/baseServer/baseFunctionCollectionService/find`,//查询收藏夹信息
    // saveCollect: `${host}/baseServer/baseFunctionCollectionService/saveOrUpdate`, //保存收藏夹信息
    // orgPersonDelete: `${host}/baseServer/basePersonOrganizationService/delete`,// 删除组织架构里的人员
    // orgPersonSave: `${host}/baseServer/basePersonOrganizationService/saveOrgPerson`,//  保存组织或职位与多个员工关系
    // /*查询下层组织列表*/
    // findAllChildrens: `${host}/baseServer/baseOrganizationService/findAllChildrens`,
    // findemployeeList: `${host}/baseServer/basePersonService/findPagination`,// 员工维护列表

    // //profile 管理
    // baseProfileSave: `${host}/baseServer/baseProfileService/save`,  //保存
    // baseProfileFind: `${host}/baseServer/baseProfileService/findPagination`, // 分页查询
    // baseProfileDel: `${host}/baseServer/baseProfileService/delete`, // 删除
    // basefindDatasource: `${host}/baseServer/baseReportDatasourceService/find`, // 查询数据源

    // //数据源配置
    // find_Datasource: `${host}/baseServer/baseReportDatasourceService/find`, // 查询数据源
    // save_Source: `${host}/baseServer/baseReportDatasourceService/saveOrUpdate`, // 保存数据源
    // deleteSource: `${host}/baseServer/baseReportDatasourceService/delete`, // 删除数据源

    // //职责管理
    // find_Responsibility: `${host}/baseServer/baseResponsibilityService/findPagination`, // 查询数据源
    // save_respSave: `${host}/baseServer/baseResponsibilityService/save`, // 保存数据
    // find_User: `${host}/baseServer/baseRoleService/findPagination`, // 查找用户
    // find_Profile: `${host}/baseServer/baseProfileService/findPagination`, // 查找profile
	// findProfileSqlDatas: `${host}/baseServer/baseProfileService/findProfileSqlDatas`,// 查询profile中sql的数据
    // deleteResponse: `${host}/baseServer/baseResponsibilityService/delete`, // 删除数据
    // findById: `${host}/baseServer/baseResponsibilityService/findById`, // 查询数据

    // //职责权限配置
    // find_Respon: `${host}/baseServer/baseResponsibilityService/findPagination`, // 查找职责名称
    // find_userfull: `${host}/baseServer/baseUsersService/findPagination`, //查找登录账号
    // findBaseUsersByRespId: `${host}/baseServer/baseUsersService/findBaseUsersByRespId`, //查找已分配用户
    // saveUserResp: `${host}/baseServer/baseUserResponsibilityService/saveUserResp`, // 保存数据

    // retryCompensation: `${host}/baseServer/transactionCompensationService/retryCompensation`, // 保存redis缓存
   
    // findMQMessageList: `${host}/baseServer/transactionCompensationService/findMQMessageList`,//执行事务补偿
    // transactionDel: `${host}/baseServer/transactionCompensationService/delete`, // 删除事务补偿
    // findByParent: `${host}/baseServer/baseLookupValuesService/findByParent`,// 查找父类
    // findReasonSynDic: `${host}/baseServer/baseLookupValuesService/findReasonSynDic`, // 查找父类

    // /*redis*/
    // redisDel: `${host}/baseServer/baseRedisDataService/deleteRedis`, // 删除redis缓存
    // redisFindById: `${host}/baseServer/baseRedisDataService/findById`, // 根据主键查询redis缓存记录
    // redisFind: `${host}/baseServer/baseRedisDataService/findRedis`, // 查询缓存列表
    // redisSave: `${host}/baseServer/baseRedisDataService/saveRedis`, // 保存redis缓存

    // /*apiManage*/
    // api_findList: `${host}/baseServer/baseApiManagementService/findPagination`, //api列表查询
    // baseApiCenterHFind: `${host}/baseServer/baseApiCenterHService/findPagination`,//项目分页查询
    // baseApiCenterLFind: `${host}/baseServer/baseApiCenterLService/findPagination`,//模块分页查询
    // baseApiManagementSave: `${host}/baseServer/baseApiManagementService/save`, // 保存
    // baseApiManagementDel: `${host}/baseServer/baseApiManagementService/delete`, // 删除


    // //职位层分配
    // basePersonAssignCode: `${host}/baseServer/baseAccreditService/findRespByMenuCode`, //获取职责数据
    // basePersonAssignTree: `${host}/baseServer/basePositionNewService/findPositionTree`,//获取树状图数据
    // basePersonAssignPagination: `${host}/baseServer/basePersonAssignService/findPersonAssignPagination`,//点击树状节点获取数据


    // //流程管理
    // processFindRoles: `${host}/bpmServer/bpmRoleService/findRoles`, //流程角色查询


    // processRoleSave: `${host}/bpmServer/bpmRoleService/save`,//流程角色保存
    // processRoleDelete: `${host}/bpmServer/bpmRoleService/delete`, //流程角色删除
    // processFindModels: `${host}/bpmServer/bpmModelService/findModels`, //流程模块查询
    // processFindInternalUsers: `${host}/baseServer/baseUsersService/findInternalUsers`, //查询操作人的数据

    // processFindBpmLists: `${host}/bpmServer/bpmListService/findBpmLists`,//流程发起记录查询
    // processListCategories: `${host}/bpmServer/bpmCategoryService/findCategories`,// 流程分类查询
    // processStop: `${host}/bpmServer/bpmProcessService/stop`,// 流程终止
    // processTaskTransfer: `${host}/bpmServer/bpmTaskService/transfer`,//  流程任务转办

    // // 图表类型配置
    // dynamicReportTypeList: `${host}/baseServer/baseReportChartsTypeService/find`,// 获取动态图表类型
    // dynamicReportTypeSave: `${host}/baseServer/baseReportChartsTypeService/saveOrUpdate`, // 保存图表类型（新增或修改)
    // dynamicReportTypeDelete: `${host}/baseServer/baseReportChartsTypeService/delete`, // 删除图表类型

    // //动态报表配置
    // baseReportHeader: `${host}/baseServer/baseReportService/findReportHeader`,//获取动态报表数据
    // dynamicReportLine: `${host}/baseServer/baseReportService/findReportLine`, //  查询报表行
    // dynamicReportSave: `${host}/baseServer/baseReportService/saveOrUpdate`, //  保存动态报表
    // dynamicReportDataList: `${host}/baseServer/baseReportDatasourceService/find`, // 数据源查询
    // dynamicReportListDelete: `${host}/baseServer/baseReportService/deleteHeader`, // 删除 头 报表
    // dynamicReportLineDelete: `${host}/baseServer/baseReportService/deleteLine`, // 删除行(字段)
    // dynamicReportTablePreview: `${host}/baseServer/baseReportService/findReportSql`, // 表格预览

    // //动态报表组配置
    // baseReportGroupPagination: `${host}/baseServer/baseReportGroupService/findPagination`,//获取动态报表组数据
    // dynamicReportGroupDelete: `${host}/baseServer/baseReportGroupService/delete`, // 删除动态报表组
    // dynamicReportGroupSave: `${host}/baseServer/baseReportGroupService/saveOrUpdate`, // 动态报表组新增/修改
    // dynamicReportGroupDetail: `${host}/baseServer/baseReportGroupService/findGroupDetails`, // 动态报表组详情
    // dynamicReportGroupDeleteItem: `${host}/baseServer/baseReportGroupService/deleteReportHeaderInGroup`,// 动态报表组删除已添加的报表
    // dynamicReportList: `${host}/baseServer/baseReportService/findReportHeader`, // 获取 报表头查询


    // //用户测试
    // userFind: `${host}/baseServer/baseUsersService/findPagination`,//获取用户数据
    // personFind: `${host}/baseServer/basePersonService/findPagination`, // 查询
    // userSave: `${host}/baseServer/baseUsersService/save`,//保存
    // responsibility: `${host}/baseServer/baseResponsibilityService/findPagination`,// 职责查询
    // userRespSave: `${host}/baseServer/baseUserResponsibilityService/saveUserResp`,//保存多条职责
    // deleteUserResp: `${host}/baseServer/baseUserResponsibilityService/delete`, //删除职责
    // findResponsibilityByUserId: `${host}/baseServer/baseResponsibilityService/findResponsibilityByUserId`,// 根据用户Id查询职责
    // // baseProfileFind:`${host}baseServer/baseProfileService/findPagination`, // Profile分页查询
    


    // msgInstanceFind: `${host}messageSever/msgInstanceService/find`, // 消息实例查询
    // msgInstanceDelete: `${host}messageSever/msgInstanceService/delete`,//消息实例删除
    // findChannelCfg: `${host}baseServer/baseChannelService/findPagination`,//获取渠道

    // //消息源
    // find: `${host}/messageServer/msgSourceCfgService/find`,// 查询消息源数据
    // saveOrUpdate: `${host}/messageServer/msgSourceCfgService/saveOrUpdate`,// 查询消息源数据
    // deleteMsgSourceCfg: `${host}/messageServer/msgSourceCfgService/delete`,// 删除消息源数据
    // articleFind: `${host}/baseServer/baseCmsArticleService/find`,//查询文章管理表

    // // 催办设置列表
    // processFindUrgeConfig: `${host}/bpmServer/bpmTaskUrgeConfigService/findUrgeConfig`,
    // // 催办保存 bpmTaskUrgeConfigService/save
    // processTaskUrgeConfigSave: `${host}/bpmServer/bpmTaskUrgeConfigService/save`,
    // // 催办删除 bpmTaskUrgeConfigService/delete
    // processTaskUrgeConfigDelete: `${host}/bpmServer/bpmTaskUrgeConfigService/delete`,
    // // 催办删除 bpmTaskUrgeConfigService/delete
    // processTaskUrgeConfigUpdate: `${host}/bpmServer/bpmTaskUrgeConfigService/updateStatus`,


    // // 消息模版
    // msgTempleCfgFind: `//127.0.0.1:8110/messageServer/msgTempleCfgService/find`,//模版查询
    // msgTempleCfgSave: `//127.0.0.1:8110/messageServer/msgTempleCfgService/saveOrUpdate`,// 模版修改
    // msgTempleCfgDel: `//127.0.0.1:8110/messageServer/msgTempleCfgService/delete`,// 模版删除
    // // findChannelCfg: `${host}/baseServer/baseChannelService/findPagination`, // 获取渠道
    // orgList: `${host}/baseServer/baseOrganizationService/findPagination`, // 查询组织


    // ------------------------------
    // ***** 黎子豪 start *****
    // ------------------------------

    // 调度管理-提交请求
    // findRequests: `${host}/schedule/scheduleServices/findRequests`, // 查询请求
    // saveRequest: `${host}/schedule/scheduleServices/saveRequest`, // 请求保存
    // cancelRequest: `${host}/schedule/scheduleServices/cancelRequest`, // 取消请求
    // pauseRequest: `${host}/schedule/scheduleServices/pauseRequest`, // 暂挂请求
    // findRequestLog: `${host}/schedule/scheduleServices/findRequestLog`, // 查看请求日志
    // deleteScheduleBatch: `${host}/schedule/scheduleServices/deleteScheduleBatch`, // 删除请求

    // 修改密码baseServer/baseUsersService/changePassword
    changePassword: `${host}/baseServer/baseUsersService/changePassword`, // 修改密码
    
    // ------------------------------
    // ***** 黎子豪 end *****
    // ------------------------------


    // ------------------------------
    // ***** 黄辉 start *****
    // ------------------------------
    // findPersonAssignPaginationDetails: `${host}/baseServer/basePersonAssignService/findPersonAssignDetails`,//职位分配 -查详细数据数据
    // findPersonAssignLevelDetails: `${host}/baseServer/basePersonLevelService/findPersonLevelDetails`,//职位层级 -查详细数据数据
    // delePersonAssignLevel: `${host}/baseServer/basePersonLevelService/delete`,//职位层级 -删除职位数据
    // // 并发程序
    // findConcurrentPrograms: `${host}/schedule/jobServices/findJobs`,//并发程序 -查询列表数据
    // deleteConcurrentPrograms: `${host}/schedule/jobServices/delete`,//并发程序 -删除列表数据
    // saveOrChangeConcurrentPrograms: `${host}/schedule/jobServices/saveJob`,//并发程序 -保存数据
    // findJobsInstTreeConcurrentPrograms: `${host}/schedule/scheduleJobAccessOrgsService/findJobsInstTree`,//并发程序 -查询组织已分配表单
    // findJobRespAllConcurrentPrograms: `${host}/schedule/scheduleJobRespService/findJobRespAll`,//并发程序 -查询分配的所有角色职责
    // saveJobParameterConcurrentPrograms: `${host}/schedule/jobParameterServices/saveJobParameter`,//并发程序 -保存并发参数
    // findJobParametersConcurrentPrograms: `${host}/schedule/jobParameterServices/findJobParameters`,//并发程序 -查询并发参数
    // deleteJobParameterConcurrentPrograms: `${host}/schedule/jobParameterServices/deleteJobParameter`,//并发程序 -查询并发参数
    // findRemainderJobRespConcurrentPrograms: `${host}/schedule/scheduleJobRespService/findRemainderJobResp`,//并发程序 -查询剩余角色职责
    // saveJobRespConcurrentPrograms: `${host}/schedule/scheduleJobRespService/saveJobResp`,//并发程序 -保存新增角色职责
    // deleteJobRespConcurrentPrograms: `${host}/schedule/scheduleJobRespService/deleteJobResp`,//并发程序 -删除角色职责
    // saveJobsInstConcurrentPrograms: `${host}/schedule/scheduleJobAccessOrgsService/saveJobsInst`,//并发程序 -删除角色职责


    // ------------------------------
    // ***** 黄辉 end *****
    // ------------------------------


    // ------------------------------
    // ***** 彭健强 start *****
    // ------------------------------

    // ------------------------------
    // ***** 彭健强 end *****
    // ------------------------------


    // ------------------------------
    // ***** 郭杰城 start *****
    // ------------------------------

    // ------------------------------
    // ***** 郭杰城 end *****
    // ------------------------------


    // ------------------------------
    // ***** 王嘉园 start *****
    // ------------------------------

    //收藏夹管理
    baseFunctionCollectionService: `${host}/baseServer/baseFunctionCollectionService/find`,
    baseFunctionCollectionService_saveOrUpdate: `${host}/baseServer/baseFunctionCollectionService/saveOrUpdate`,
    baseFunctionCollectionService_delete: `${host}/baseServer/baseFunctionCollectionService/delete`,
    //系统日志
    // mongoService: `${host}/baseServer/systemLogService/findPagination`,

    //SSO系统管理
    // baseSystemSsoService: `${host}/baseServer/baseSystemSsoService/find`,
    // baseSystemSsoService_saveOrUpdate: `${host}/baseServer/baseSystemSsoService/saveOrUpdate`,
    // baseSystemSsoService_delete: `${host}/baseServer/baseSystemSsoService/delete`,



    //REDIS缓存
    // baseRedisDataService: `${host}/baseServer/baseRedisDataService/findRedis`,
    // baseRedisDataService_saveRedis: `${host}/baseServer/baseRedisDataService/saveRedis`,
    // baseRedisDataService_deleteRedis: `${host}/baseServer/baseRedisDataService/deleteRedis`,

    //我的主页
    findMenuList: `${host}/baseServer/baseMenuService/findMenuList`,
    findInCollection: `${host}/baseServer/baseFunctionCollectionService/findInCollection`,
    addInCollection: `${host}/baseServer/baseFunctionCollectionService/addInCollection`,
    deleteInCollection: `${host}/baseServer/baseFunctionCollectionService/deleteInCollection`,

    //调度异常监控
    // findSchedulesErrors: `${host}/schedule/scheduleErrorServices/findSchedulesErrors`,
    // findSchedulesErrorLog: `${host}/schedule/scheduleErrorServices/findSchedulesErrorLog`,

    // ------------------------------
    // ***** 王嘉园 end *****
    // ------------------------------


    // ------------------------------
    // ***** 郑晓文 start *****
    // ------------------------------
    baseUsersService_findPagination: `${host}/baseServer/baseUsersService/findPagination`,
    // basePersonService_findPagination: `${host}/baseServer/basePersonService/findPagination`,
    // baseUsersService_save: `${host}/baseServer/baseUsersService/save`,
    // baseUsersService_findById: `${host}/baseServer/baseUsersService/findById`,
    // baseResponsibilityService_findResponsibilityByUserId: `${host}/baseServer/baseResponsibilityService/findResponsibilityByUserId`,
    // baseProfileService_findProfileSqlDatas: `${host}/baseServer/baseProfileService/findProfileSqlDatas`,
    // baseUserResponsibilityService_delete: `${host}/baseServer/baseUserResponsibilityService/delete`,
    // baseProfileService_findPagination: `${host}/baseServer/baseProfileService/findPagination`,
    // baseResponsibilityService_findPagination: `${host}/baseServer/baseResponsibilityService/findPagination`,
    // baseUserResponsibilityService_saveUserResp: `${host}/baseServer/baseUserResponsibilityService/saveUserResp`
    // ------------------------------
    // ***** 郑晓文 end *****
    // ------------------------------


}

export default api;
