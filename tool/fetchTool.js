/*
 * @Author: zhengxiaowen
 * @Date: 2018-08-21 11:50:06
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-11-15 09:40:25
 */
// axios  ajax
import axios from 'axios'
import qs from 'qs'
import {store} from '../index'
import systemHook from '@/config/systemHook'
import moment from 'moment'
import md5 from 'js-md5'
import { Spin, Message } from 'view-design'


// axios 配置
axios.defaults.timeout = 30000


// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.status === 'NOT-LOGGED-IN') {
    // window.location.href = '/'
    // Message.error(error.msg)
  }
  if (res.data.status === 'E' && res.data.code == "4001") {
    // window.location.href = '/'
    // routerController.replace('/')
    store.commit('LOGOUT')
  }
  if (res.data.status && res.data.status !== 'S' && res.data.status !== 'D' && res.data.status !== 'M') {
    // console.log('后台响应成功,但查询结果失败!')
    return Promise.reject(res.data, {})
  }
  return res // 直接返回结果集里的data数据
}, (err) => {
  let errMsg = ''
  // 404等问题可以在这里处理
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        errMsg = '错误请求'
        break
      case 401:
        errMsg = '未授权，请重新登录'
        break
      case 403:
        errMsg = '拒绝访问'
        break
      case 404:
        errMsg = '请求错误,未找到该资源'
        break
      case 405:
        errMsg = '请求方法未允许'
        break
      case 408:
        errMsg = '请求超时'
        break
      case 500:
        errMsg = '服务器端出错'
        break
      case 501:
        errMsg = '网络未实现'
        break
      case 502:
        errMsg = '网络错误'
        break
      case 503:
        errMsg = '服务不可用'
        break
      case 504:
        errMsg = '网络超时'
        break
      case 505:
        errMsg = 'http版本不支持该请求'
        break
      default:
        errMsg = `连接错误${err.response.status}`
    }
  } else {
    errMsg = '服务器没响应'
  }
  return Promise.reject({msg: errMsg, status: 'E'})
})

let fetch = {
 
  post: (url, params = {}, v = null) => {
    // Vue.$vux.loading.show()
    Spin.show();
    return new Promise((resolve, reject) => {
      fetch.postSimpleness(url, params, v).then(res => {
        resolve(res)
        Spin.hide()
      }).catch(error => {
        Spin.hide()
        Message.error(error.msg)
        reject(error, {})
      })
    })
  },

  postSimpleness: (url, params = {}, v = null) => {
    
    return new Promise((resolve, reject) => {
      fetch.postBasics(url, params, v).then(res=>{
        resolve(res)
      }).catch(error=>{
        reject(error, {})
      })
    })
    
  },


  
  postBasics: (url, params = {}, v) => {
    
    // 澳优 session持久化处理
    // let timestamp = moment().format('x')
    // let timestampArr = timestamp.split('');
    // let letter1 = timestampArr[timestampArr.length-2];
    // let letter2 = letter1%4+1;
    // let sum=0;
    // for(var i=0;i<letter2;i++){
    //     sum+=Number(timestampArr[i]);
    // }
    // let num = sum%4+1;
    // let appsign=timestamp;
    // for(var i=0;i<num;i++){
    //     appsign = md5(appsign);
    // }
    
    // let headers = {}
    // headers.appsign = appsign
    // headers.timestamp = timestamp
    // headers.certificate = store.state.user.certificate
    let headers = systemHook.getHeaders()

    // if(!v){
    //   v = url.indexOf('/v1/') != -1 ? 'v1' : 'v0'
    // }

    // if(v === "v0"){
    //   headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    //   if(systemHook&&systemHook.PostParams){
    //     params.params =  Object.assign(systemHook.PostParams(),params.params)
    //   }
    //   params.params = params.params ? JSON.stringify(params.params) : JSON.stringify({})
    //   params = qs.stringify(params)
    // }else if(v === "v1"){
      headers['Content-Type'] = 'application/json;charset=UTF-8'
      if(systemHook&&systemHook.PostParams){
        params =  Object.assign(systemHook.PostParams(), params)
      }
    // }
    
    return new Promise((resolve, reject) => {
      axios.post(url, params,{
        headers: headers
        
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    }).catch((error) => {
      return Promise.reject(error, {})
    })
  },




  get: (url, params = {}, v = null) => {
    // Vue.$vux.loading.show()
    Spin.show();
    return new Promise((resolve, reject) => {
      fetch.getSimpleness(url, params, v).then(res => {
        resolve(res)
        Spin.hide()
      }).catch(error => {
        Spin.hide()
        Message.error(error.msg)
        reject(error, {})
      })
    })
  },

  getSimpleness: (url, params = {}, v = null) => {
    
    return new Promise((resolve, reject) => {
      fetch.getBasics(url, params).then(res=>{
        resolve(res)
      }).catch(error=>{
        reject(error, {})
      })
    })
    
  },

  getBasics: (url, params = {}, v) => {
    
    // 澳优 session持久化处理
    let timestamp = moment().format('x')
    let timestampArr = timestamp.split('');
    let letter1 = timestampArr[timestampArr.length-2];
    let letter2 = letter1%4+1;
    let sum=0;
    for(var i=0;i<letter2;i++){
        sum+=Number(timestampArr[i]);
    }
    let num = sum%4+1;
    let appsign=timestamp;
    for(var i=0;i<num;i++){
        appsign = md5(appsign);
    }
    
    let headers = {}
    headers.appsign = appsign
    headers.timestamp = timestamp
    headers.certificate = store.state.user.certificate

    headers['Content-Type'] = 'application/json;charset=UTF-8'
    if(systemHook&&systemHook.PostParams){
      params =  Object.assign(systemHook.PostParams(), params)
    }
    return new Promise((resolve, reject) => {
      axios.get(url,{
        headers: headers,
        params:params
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    }).catch((error) => {
      return Promise.reject(error, {})
    })
  }



  
  
}

export default fetch
