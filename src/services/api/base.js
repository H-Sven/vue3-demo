/*
 * @Author: Siwen
 * @Date: 2020-06-16 14:07:01
 * @LastEditors: Siwen
 * @LastEditTime: 2020-06-16 15:26:13
 * @Description: 基础服务接口
 */
import axios from '@/services/request'
import menuList from '@/menuList'

const baseUrl = process.env.VUE_APP_COMMON_URL
const headers = { AHost: 'commonServer' }

/* 登录 */
export const login = (data = {}) => {
  return axios.post(`${baseUrl}/user/loginByAccount`, data, { headers })
}
/* 注册 */
export const register = (data = {}) => {
  return axios.post(`${baseUrl}/user/register`, data, { headers })
}
/* 获取用户信息 */
export const getUserInfo = (params = {}) => {
  return axios.get(`${baseUrl}/user/getUserInfo`, { params: { ...params }, headers })
}
/* 退出登录 */
export const logOut = () => {
  return axios.post(`${baseUrl}/user/logout`, {}, { headers })
}
/* 获取权限 */
export const getMenuList = () => {
  return new Promise((resolve) => {
    resolve(menuList)
    // post('/admin/menuList', {}).then(res => {
    //   resolve(res)
    // }).catch(err => {
    //   reject(err)
    // })
  })
}
