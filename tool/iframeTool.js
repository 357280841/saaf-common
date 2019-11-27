/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-27 11:05:40 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-27 11:38:37
 */

export default class iframeTool {
    static add(key, fun){
        this.getList()[key] = fun
    }
    static get(key){
        return this.getList()[key]
    }
    static run(key,params){
        return this.getList()[key](params)
    }
    static remove(key){
        delete this.getList()[key]
    }
    static getList(){
        return this.rootWindow.iframeService.list
    }
}

iframeTool.rootWindow = window.parent!=window?window.parent:window