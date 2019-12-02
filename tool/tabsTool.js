/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-17 17:13:43 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-28 16:32:51
 */

import store from '../store/StoreCommon'
import routerController from '@/page/pageConfig/routerController'
import { getState } from './storeTool'
import { urlTool } from "../index"

export default class tabsTool{
    // constructor(){
    //     this.rootWindow = window.parent!=window?window.parent:window
    // }
    static openTab(item){
        // this.rootWindow.tabsService.openTab(item)
        this.openIframeTab(item)
    }

    // 激活指定窗口
    static activeTab(item){
        this.rootWindow.tabsService.activeTab(item)
    }
    // 关闭窗口
    static closeTab(item){
        this.rootWindow.tabsService.closeTab(item)
    }
    // 创建iframe窗口
    static openIframeTab(item){
        let menu = JSON.parse(JSON.stringify(item))
        // console.log('aaa',item);
        menu.iframe = true
        menu.close = menu.close===false?false:true
        let params = {menuId:item.menuId,respId:store.state.user.currentResp.responsibilityId}
        let query = routerController.history.current.query
        if(query.menuId){
            params.menuId = query.menuId
        }else{
            params.menuId = item.menuId
        }
        if(query.respId){
            params.respId = query.respId
        }else{
            params.respId = store.state.user.currentResp.responsibilityId
        }
        
        let url = urlTool.getUrl(menu.url,params)
        
        menu.url = '/#/iframeBox'+url
        // 打开过的放仓库
        this.rootWindow.tabsService.openTab(menu)
        // console.log('bbb',menu);
    }
    static openRouterTab(item){
        let menu = JSON.parse(JSON.stringify(item))
        menu.iframe = false
        menu.close = menu.close===false?false:true
        menu.url = '/main'+menu.url
        this.rootWindow.tabsService.openTab(menu)
    }
    static goto(item){
        this.rootWindow.tabsService.goto(item)
    }
    static closeCurrentTab(){
        this.closeTab(store.state.tabs.activeTab)
    }
}
tabsTool.rootWindow = window.parent!=window?window.parent:window