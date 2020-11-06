/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-11-28 10:38:28 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2020-11-05 14:16:58
 */

export default class treeTool{

    static checkChild(list, currentItem, key, parentKey, name){
        list.map((item)=>{
          if(!currentItem.children){
            currentItem.children = []
          }
          if(currentItem[key] === item[parentKey]){
            item.title = item[name]
            item.expand = item.expand?item.expand:false
            currentItem.children.push(item)
            this.checkChild(list,item, key, parentKey, name)
          }
        })
    }

    static getTreeCmp(list, key, parentKey, name){
        let tree = []
        list.map((item)=>{
          if(item[parentKey] === 0 || item[parentKey] === -1 || item[parentKey] === '0' || item[parentKey] === '-1'){
            item.title = item[name]
            item.expand = true
            tree.push(item)
            treeTool.checkChild(list, item, key, parentKey, name)
          }
        })
        return tree
    }

    static getTreeForParent(list, checkList, key, parentKey){
        let obj = {}
        let arr = []
        checkList.map((item)=>{
            obj[key+item[key]] = item
            if(item[parentKey] !== 0 || item[parentKey] !== -1 || item[parentKey] === '0' || item[parentKey] === '-1'){
                this.checkParent(obj, list, item, key, parentKey)
            }
        })
        for(let key in obj){
            arr.push(obj[key])
        }
        return arr
    }

    static checkParent(obj, list, currentItem, key, parentKey){
        list.map((item)=>{
            if(item[key] === currentItem[parentKey]){
                obj[key+item[key]] = item
                if(item[parentKey] !== 0 || item[parentKey] !== -1){
                    this.checkParent(obj, list, item, key, parentKey)
                }
            }
        })
    }
}