/*
 * @Author: zhengxiaowen
 * @Date: 2018-09-21 09:22:02
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-05-31 10:49:16
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import vuexI18n from 'vuex-i18n'
import UserStore from './UserStore'
import SystemStore from './SystemStore'
import CustomModules from '@/store/CustomModules'
import TabStore from './TabsStore'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    
    // 框架的store模块
    // i18n: vuexI18n.store,
    user: UserStore,
    system: SystemStore,
    tabs: TabStore,

    // 私有store模块引入
    ...CustomModules
    
  }
})

export default store
