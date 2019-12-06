/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-23 15:58:41 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-05 17:55:10
 */

import platform from '@/config/platform'
export default class localStorageTool{
    static save(key,item){
        localStorage.setItem(platform.systemCode + '_' + key, JSON.stringify(item))
    }
    static get(key){
        let json = localStorage.getItem(platform.systemCode + '_' + key)
        return json?JSON.parse(json):null
    }
    static remove(key){
        localStorage.removeItem(platform.systemCode + '_' + key)
    }
}