/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-23 15:58:41 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-10-12 14:22:29
 */


export default class localStorageTool{
    static save(key,item){
        localStorage.setItem(key, JSON.stringify(item))
    }
    static get(key){
        return localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):null
    }
    static remove(key){
        localStorage.removeItem(key)
    }
}