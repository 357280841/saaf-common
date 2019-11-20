/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-10-11 10:41:21 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-20 10:41:16
 */

import { storeTool, tabsService, onresizeTool } from './index'
import './components/requireComponent'

storeTool.initStore()
window.tabsService = tabsService

onresizeTool.initOnresize()