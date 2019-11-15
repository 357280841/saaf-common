/*
 * @Author: zhengxiaowen
 * @Date: 2018-10-10 20:45:58
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-15 09:22:52
 */

 
import { fetchTool } from "../index";
import api from "./apiCommon";
let fetch = {}

for(let key in api) {
    fetch[key] = (params) => fetchTool.post(api[key], params);
}

export default fetch