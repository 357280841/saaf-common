/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-14 09:21:55 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-10-18 14:15:49
 */

import { store } from './index'

export default class initApp{
    static initIframe(){
        store.commit('INIT_USER_INFO')
        store.commit('INIT_LOOKUP')
        store.commit('INIT_TAB')
        store.commit('ONRESIZE', document.documentElement)
        window.onresize = function(){
            store.commit('ONRESIZE', document.documentElement)
        };
        
    }
}