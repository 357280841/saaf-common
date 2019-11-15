/*
 * @Author: zhengxiaowen
 * @Date: 2018-10-10 21:43:20
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-14 10:20:24
 */
import platform from '@/config/platform'

let host = platform.host

let api = {
    images_upload: `${host}/saaf-file-server/v2/images/upload`,
    v2_images: `${host}/saaf-file-server/v2/images/`,
    v2_file_upload: `${host}/saaf-file-server/v2/file/upload`,
    v2_file_download: `${host}/saaf-file-server/v2/file/download`,
}

export default api
