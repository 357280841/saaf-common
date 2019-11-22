/*
 * @Author: zhengxiaowen 
 * @Date: 2019-05-24 17:36:35 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-06-03 10:36:35
 */

import platform from '@/config/platform'

let host = platform.host

let api = {
    baseLookupTypeService_find: `${host}/baseServer/baseLookupTypeService/find`,
}

export default api;