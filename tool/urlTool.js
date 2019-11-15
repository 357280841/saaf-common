/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-18 15:11:39 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-10-18 15:13:09
 */

export default class urlTool {
    static getUrl(url,params){
        let hasGetParams = false
        if(url.indexOf('?') != -1){
            hasGetParams = true
        }
        for (const key in params) {
            if(hasGetParams){
                url += `&${key}=${params[key]}`
            }else{
                url += `?${key}=${params[key]}`
                hasGetParams = true
            }
        }
        return url
    }
}