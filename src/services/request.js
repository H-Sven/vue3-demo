/*
 * @Author: Siwen
 * @Date: 2019-08-08 13:47:01
 * @LastEditors: Siwen
 * @LastEditTime: 2020-06-16 15:21:31
 * @Description: axios封装
 */
import vueRoute from '@/router'
import { Message } from 'element-ui'
import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_API_URL
// 公共参数
const publicParams = {
  orgId: process.env.VUE_APP_ORGID,
}

// 防止重复请求相关配置
const { CancelToken } = axios
const pending = []
const cancelPending = (config) => {
  pending.forEach((item, index) => {
    if (!config || item.UrlPath === config.url) {
      item.Cancel()
      pending.splice(index, 1)
    }
  })
}
// 不进行防重处理的接口集合
const noCancelPending = ['/channelList']

// request 拦截器
axios.interceptors.request.use(
  (config) => {
    // 防止重复请求 ↓↓↓↓
    if (!noCancelPending.includes(config.url)) {
      cancelPending(config)
      config.cancelToken = new CancelToken((res) => {
        pending.push({ UrlPath: config.url, Cancel: res })
      })
    }
    // 防止重复请求 ↑↑↑↑
    if (config.method === 'post' && config.url.indexOf('uploadResource') === -1) {
      config.data = qs.stringify(Object.assign(config.data || {}, publicParams))
    } else if (config.method === 'get') {
      config.params = Object.assign(config.params || {}, publicParams)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
// response 拦截器
axios.interceptors.response.use(
  (response) => {
    cancelPending(response.config) // 防止重复请求
    // 具体业务处理
    const res = response.data
    if (res.success) {
      return res.payload
    } else {
      const { path } = vueRoute.currentRoute
      if (path !== '/login' && path !== '/') Message.error(res.error.message)
      return Promise.reject(res.error)
    }
  },
  (error) => {
    if (error.message) return Promise.reject(error)
  },
)
export default axios
