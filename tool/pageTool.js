/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-17 17:13:43 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-14 17:57:23
 */


import systemHook from '@/config/systemHook'

let pageTool = {}

pageTool.createrPage = ()=>{
    return {
        pageIndex: 1,
        nextIndex: 1,
        pagesCount: 0,
        count: 0,
        pageSize: systemHook.pageSize?systemHook.pageSize:20
    }
}
pageTool.update = (res,page)=>{
    if(res.page){
        return res.page
    }else if(res.count>=0){
        page.pagesCount = Math.ceil(res.count/page.pageSize)
        page.count = res.count
        page.pageIndex = page.nextIndex
        page.nextIndex = page.pageIndex>=page.pagesCount?page.pageIndex:page.pageIndex+1
        return page
    }
}

export default pageTool