/*
 * @Author: zhengxiaowen
 * @Date: 2018-09-21 09:22:09
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-25 15:51:09
 */

import { localStorageTool, sessionStorageTool, tabsTool } from '../index'
import { fetch } from '@/page/pageConfig/index'
import StoreCommon from './StoreCommon'
import creatTree from '@/config/tree'
import Vue from 'vue'
import routerController from '@/page/pageConfig/routerController'
import platform from '@/config/platform'

export default {
  state: {
    certificate: null,
    userInfo: {},
    lookup: {},
    userRespList: [],
    currentResp: {},
    menuList: [],
    languageList:[],
    currentLanguage:{},
  },
  getters: {
  },
  mutations: {
    INIT_USER_INFO (state) {
      try {
        state.userInfo = localStorageTool.get('userInfo')
        if(!state.userInfo){
          StoreCommon.commit('LOGOUT')
        }
        state.userRespList = state.userInfo?state.userInfo.userRespList:null
        state.certificate = state.userInfo?state.userInfo.certificate:null
        state.languageList = state.userInfo?state.userInfo.languageList:[]
        StoreCommon.commit('INIT_LANGUAGE')
        StoreCommon.commit('INIT_CURRENT_RESP')
      } catch (error) {
        localStorageTool.remove('userInfo')
      }
    },
    SET_USER_INFO (state,data) {
      state.userInfo = data
      state.userRespList = data.userRespList
      state.certificate = data.certificate
      StoreCommon.commit('SET_CURRENT_RESP', state.userRespList[0])
      localStorageTool.save('userInfo', data)
    },
    INIT_LOOKUP (state) {
      state.lookup = localStorageTool.get('lookup')
    },
    SET_LOOKUP (state,data) {
      state.lookup = data
      localStorageTool.save('lookup', data)
    },
    LOGOUT (state) {
      sessionStorage.clear()
      localStorage.clear()
      StoreCommon.commit('CLEAN_TAB')
      // state.certificate = null
      // state.userInfo = {}
      // state.lookup = {}
      // state.userRespList = []
      // state.currentResp = {}
      // state.menuList = []
      // state.languageList = []
      // state.currentLanguage = {}
      // tabsTool.rootWindow.location.href = '/'
      // console.log(tabsTool.rootWindow)
      tabsTool.goto({url:'/'})
      // routerController.replace('/')
    },
    SET_CURRENT_RESP (state,data){
      state.currentResp = data
      localStorageTool.save('currentResp', data)
    },
    INIT_CURRENT_RESP (state){
      state.currentResp = localStorageTool.get('currentResp')?localStorageTool.get('currentResp'):state.userRespList[0]
    },
    CHANGE_CURRENT_RESP (state,data){
      StoreCommon.commit('SET_CURRENT_RESP',data)
      StoreCommon.commit('CLEAN_TAB')
      StoreCommon.dispatch('GET_MENU_BY_RESP')
    },
    SET_MENU (state,data){
      state.menuList = data
    },
    INIT_LANGUAGE(state) {
      state.currentLanguage = sessionStorageTool.get('currentLanguage')?sessionStorageTool.get('currentLanguage'):state.languageList[0]
    },
    CHANGE_LANGUAGE(state,data) {
      state.currentLanguage = data
      StoreCommon.commit('CLEAN_TAB')
      sessionStorageTool.save('currentLanguage', data)
      // window.location.href = '/#/main'
      // routerController.replace('/main')
      window.location.reload()
    },
  },
  actions: {
    GET_LOOKUP:({ commit, state })=>{
      fetch.baseLookupValuesService_findDic().then(res=>{
        let obj = {}
        res.data.map((item)=>{
          if(!obj[item.lookupType]){
            obj[item.lookupType] = []
          }
          obj[item.lookupType].push(item)
        })
        commit('SET_LOOKUP', obj)
      })
    },
    GET_MENU_BY_RESP: ({ commit, state })=>{
      fetch.baseAccreditService_findBaseMenuByRespId({
        "isValid":true,
        "systemCode":platform.systemCode,
        "responsibilityId": state.currentResp.responsibilityId,
        "lan":state.currentLanguage.lookupCode
      }).then(res=>{
        // menuList
        commit('SET_MENU',creatTree(res.data))
      })
    }
  }
}
