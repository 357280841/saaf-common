/*
 * @Author: zhengxiaowen
 * @Date: 2018-09-21 09:22:05
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-26 16:57:01
 */
import StoreCommon from './StoreCommon'
import { sessionStorageTool } from '../index'

export default {
  state: {
    screenWidth: 0,
    screenHeight: 0,
    isFullscreen:false
  },
  getters: {
  },
  mutations: {
    ONRESIZE(state,data){
      state.screenWidth = data.clientWidth
      state.screenHeight = data.clientHeight
    },
    FULLSCREEN (state) {
      state.isFullscreen = !state.isFullscreen
    }
  },
  actions: {
  }
}
