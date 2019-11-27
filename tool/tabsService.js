/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-17 17:13:43 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-27 18:29:22
 */

import store from '../store/StoreCommon'
import routerController from '@/page/pageConfig/routerController'
import {storeTool} from '../index'
import { Spin, Message } from 'view-design'
import systemHook from '@/config/systemHook'

export default class tabsService{
    static openTab(item){
        let num = systemHook && systemHook.tabsLength ? systemHook.tabsLength : 10
        if(!store.state.tabs.tabList[item[store.state.tabs.tabKey]]){
            if(Object.keys(store.state.tabs.tabList).length >= num){
                Message.error(`页签不能超过${num}个`)
                return
            }
        }
        setTimeout(()=>{
            $('#tabs-tag-box').find('.gm-scroll-view').scrollLeft($('#tabs-tag-'+item.menuId).position().left)
        },300)
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