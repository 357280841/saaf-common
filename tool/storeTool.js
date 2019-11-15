/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-23 18:09:40 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-10-10 15:24:50
 */

import store from '../store/StoreCommon'

let _state = null

function initStore(){
    store.subscribe((mutation, state) => {
        _state = state
    })
}

function getState(){
    // return _state
    return store.state
}

function getStore(){
    return store
}

export default {
    initStore,
    getState,
    getStore
}

// export default class storeTool{
//     static _state = null
//     static initStore(){
//         store.subscribe((mutation, state) => {
//             this._state = state
//         })
//     }
//     static getState(){
//         return this._state
//     }
//     static getStore(){
//         return store
//     }
// }
