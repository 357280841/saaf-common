/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-14 09:21:55 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-20 10:16:55
 */

import { store,onresizeTool } from './index'

export default class initApp{
    static initIframe(){
        store.commit('INIT_USER_INFO')
        store.commit('INIT_LOOKUP')
        store.commit('ONRESIZE', document.documentElement)
        onresizeTool.addFunction({key:'iframeHeight', fun:()=>{store.commit('ONRESIZE', document.documentElement)}})
        onresizeTool.initOnresize()
        // store.commit('INIT_TAB')
    }
}