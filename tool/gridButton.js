/*
 * @Author: zhengxiaowen; 357280841@qq.com; 
 * @Date: 2019-07-31 10:09:34 
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-07-31 10:29:22
 */

export default class gridButton {
    static edit(h, params, fn){
        return h('Button', {
            props: {
              type: 'primary',
              size: 'small'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {
                fn()
              }
            }
          }, '编辑');
    }
    static delete(h, params, fn){
        return h('Button', {
            props: {
              type: 'error',
              size: 'small'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {
                fn()
              }
            }
          }, '删除')
    }
    static btnGroup(h, params, editFn, delFn){
        return h('div', [
            this.edit(h, params, editFn),
            this.delete(h, params, delFn)
        ])
    }
}