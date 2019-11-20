/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-20 08:58:11 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-20 11:41:04
 */

import { store } from '../index'
import * as lodash from 'lodash'

export default class onresizeTool{
    constructor() {}
    static initOnresize(){
        let _this = this
        window.onresize = function(){
            _this.doFunction()
        };
    }
    static runFunctionList(){
        for(let key in this.functionList){
            this.functionList[key]()
        }
    }
    static addFunction(obj){
        if(this.functionList[obj.key]){
            throw '属性重名'
        }
        this.functionList[obj.key] = obj.fun
    }
}
onresizeTool.functionList = {}
onresizeTool.doFunction = lodash.throttle(onresizeTool.runFunctionList, 100)