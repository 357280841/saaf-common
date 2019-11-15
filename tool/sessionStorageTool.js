/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-23 15:58:41 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-10-12 15:09:26
 */


export default class sessionStorageTool{
    static save(key,item){
        sessionStorage.setItem(key, JSON.stringify(item))
    }
    static get(key){
        return sessionStorage.getItem(key)?JSON.parse(sessionStorage.getItem(key)):null
    }
    static remove(key){
        sessionStorage.removeItem(key)
    }
}