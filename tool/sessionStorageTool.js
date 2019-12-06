/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-23 15:58:41 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-05 17:55:30
 */


import platform from '@/config/platform'
export default class sessionStorageTool{
    static save(key,item){
        sessionStorage.setItem(platform.systemCode + '_' + key, JSON.stringify(item))
    }
    static get(key){
        let json = sessionStorage.getItem(platform.systemCode + '_' + key)
        return json?JSON.parse(json):null
    }
    static remove(key){
        sessionStorage.removeItem(platform.systemCode + '_' + key)
    }
}