/*
 * @Author: zhengxiaowen
 * @Date: 2018-09-21 09:22:05
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-10-18 14:53:50
 */
import StoreCommon from './StoreCommon'
import { sessionStorageTool } from '../index'

export default {
  state: {
    screenWidth: 0,
    screenHeight: 0,
  },
  getters: {
  },
  mutations: {
    ONRESIZE(state,data){
      state.screenWidth = data.clientWidth
      state.screenHeight = data.clientHeight
    }
  },
  actions: {
  }
}
