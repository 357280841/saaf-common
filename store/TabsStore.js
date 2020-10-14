/*
 * @Author: zhengxiaowen
 * @Date: 2018-09-21 09:22:05
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-22 10:36:00
 */

import Vue from 'vue'
import StoreCommon from './StoreCommon'
import { sessionStorageTool,tabsTool } from '../index'
export default {
  state: {
    tabList:  {},
    activeTab: {},
    // tabKey: 'menuCode',
    tabKey: 'url',
    keyEnumerate:{}
  },
  getters: {
  },
  mutations: {
    ADD_TAB(state, item){
      if(!state.tabList[item[state.tabKey]]){
        Vue.set(state.tabList, item[state.tabKey], item)
      }
      StoreCommon.commit("UPDATE_TAB_KEY_LIST")
    },
    DEL_TAB(state, item){
      Vue.delete(state.tabList, item[state.tabKey])
      StoreCommon.commit("UPDATE_TAB_KEY_LIST")
    },
    ACTIVE_TAB(state, item){
      if(typeof item == 'object'){
        state.activeTab = item
      }else if(typeof item == 'string'){
        state.activeTab = state.tabList[item]
      }
      sessionStorageTool.save('tabStore',state)
    },
    UPDATE_TAB_KEY_LIST(state){
      let em = {}
      let i = 0
      for(let key in state.tabList){
        em[i] = key
        em[key] = i
        i++
      }
      state.keyEnumerate = em;
      sessionStorageTool.save('tabStore',state)
    },
    INIT_TAB(state){
      let tabStore = sessionStorageTool.get('tabStore')
      if(tabStore){
        state.tabList = tabStore.tabList
        state.activeTab = tabStore.activeTab
        state.keyEnumerate = tabStore.keyEnumerate
      }else{
        StoreCommon.commit('INIT_HOME')
      }
    },
    CLEAN_TAB(state){
      state.tabList = {}
      state.activeTab = {}
      state.keyEnumerate = {}
      sessionStorageTool.remove('tabStore')
      // StoreCommon.commit('INIT_HOME')
    },
    INIT_HOME(state){
      tabsTool.openRouterTab({
        name: i18n.t('我的主页'),
        url: '/home',
        close: false
      })
    }
  },
  actions: {
  }
}
