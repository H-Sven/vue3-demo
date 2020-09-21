/*
 * @Author: Siwen
 * @Date: 2020-07-31 17:43:01
 * @LastEditors: Siwen
 * @LastEditTime: 2020-08-04 11:31:22
 * @Description: 首页相关接口
 */
import axios from '@/services/request'

const headers = { AHost: 'adverts-admin' }

/* 频道列表 */
export const channelList = (params = {}) => {
  return axios.get('/channelList', { params: { ...params }, headers })
}
/* 获取广告类别 */
export const advertsCategory = (params = {}) => {
  return axios.get('/advertsCategory', { params: { ...params }, headers })
}
/* 广告列表 */
export const adList = (params = {}) => {
  return axios.get('/advertLists', { params: { ...params, limit: 12 }, headers })
}
/* 添加&编辑广告 */
export const addEditAdvert = (params = {}) => {
  return axios.get(params.adId ? '/editAdvert' : '/addAdvert', { params: { ...params }, headers })
}
/* 编辑广告展示状态 */
export const editShowStatus = (params = {}) => {
  return axios.get('/editShowStatus', { params: { ...params }, headers })
}
/* 广告名称查询搜索 */
export const advertNameSearch = (params = {}) => {
  return axios.get('/advertNameSearch', { params: { ...params }, headers })
}
/* 品牌名称搜索 */
export const brandSearch = (params = {}) => {
  return axios.get('/brandSearch', { params: { ...params }, headers })
}
/* 统计列表 */
export const statisticsList = (params = {}) => {
  return axios.get('/statistics', { params: { ...params }, headers })
}
