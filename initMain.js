/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-11 10:41:21 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-27 11:31:01
 */

import { storeTool, tabsService, onresizeTool } from './index'
import './components/requireComponent'

storeTool.initStore()
window.tabsService = tabsService

window.iframeService = {
    list:{}
}

onresizeTool.initOnresize()