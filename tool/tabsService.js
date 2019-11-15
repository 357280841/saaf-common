/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-17 17:13:43 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-15 09:25:44
 */

import store from '../store/StoreCommon'
import routerController from '@/page/pageConfig/routerController'
import {storeTool} from '../index'

export default class tabsService{
    static openTab(item){
        store.commit("ADD_TAB",item)
        store.commit("ACTIVE_TAB",item)
        this.goto(item)
    }
    static activeTab(item){
        store.commit("ACTIVE_TAB",item)
        this.goto(item)
    }
    static goto(item){
        if(item.iframe){
            routerController.push({path:"/main/iframe"})
        }else{
            routerController.push(item.url)
        }
    }
    static closeTab(item){
        let state = storeTool.getState()
        if(item[state.tabs.tabKey] == state.tabs.activeTab[state.tabs.tabKey]){
          // 计算当前页
          let key = state.tabs.keyEnumerate[item[state.tabs.tabKey]]
          let newKey = ''
          // 计算需要切换到的页面
          if(key > 0){
              newKey = state.tabs.keyEnumerate[key-1]
          }else if(key==0){
              newKey = state.tabs.keyEnumerate[key+1]
          }
          if(newKey){
              store.commit("ACTIVE_TAB",newKey)
              this.goto(state.tabs.tabList[newKey])
          }else{
            routerController.push("/main/home")
          }
        }

        // 删除
        store.commit("DEL_TAB",item)
    }
}