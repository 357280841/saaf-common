/*
 * @Author: zhengxiaowen 
 * @Date: 2019-05-24 17:37:11 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-15 09:33:21
 */

import { fetchTool } from "saaf-common";
import api from "./api";
let fetch = {}

for(let key in api) {
    fetch[key] = (params) => fetchTool.post(api[key], params);
}

export default fetch