import axios from '@/services/request'

const baseUrl = process.env.VUE_APP_COMMON_URL
const headers = { AHost: 'commonServer' }

/* 添加管理员 */
export const addAdmin = (data = {}) => {
  return axios.post(`${baseUrl}/admin/add`, data, { headers })
}
/* 管理员修改密码
 * 管理员用户列表修改其它用户密码
 */
export const modifyPassword = (data = {}) => {
  return axios.post(`${baseUrl}/admin/modifyPassword`, data, { headers })
}
/* 修改管理员 */
export const modify = (data = {}) => {
  return axios.post(`${baseUrl}/admin/modify`, data, { headers })
}
/* 管理员列表 */
export const adminList = (params = {}) => {
  return axios.get(`${baseUrl}/admin/list`, { params: { ...params }, headers })
}
/* 管理员信息 */
export const getAdminInfo = (params = {}) => {
  return axios.get(`${baseUrl}/admin/getAdminInfo`, { params: { ...params }, headers })
}
/* 角色列表 */
export const roleList = (params = {}) => {
  return axios.get(`${baseUrl}/role/list`, { params: { ...params }, headers })
}
/* 修改角色 */
export const modifyRole = (data = {}) => {
  return axios.post(`${baseUrl}/admin/modifyRole`, data, { headers })
}
/* 角色资源列表 */
export const getRoleResources = (params = {}) => {
  return axios.get(`${baseUrl}/roleResource/getRoleResources`, { params: { ...params }, headers })
}
/* 删除角色 */
export const deleteRole = (data = {}) => {
  return axios.post(`${baseUrl}/role/delete`, data, { headers })
}
/* 删除角色资源 */
export const deleteRoleResource = (data = {}) => {
  return axios.post(`${baseUrl}/roleResource/delete`, data, { headers })
}
/* 删除资源 */
export const deleteResource = (data = {}) => {
  return axios.post(`${baseUrl}/resource/delete`, data, { headers })
}
/* 添加角色 */
export const addRole = (data = {}) => {
  return axios.post(`${baseUrl}/role/add`, data, { headers })
}
/* 添加角色资源 */
export const addRoleResource = (data = {}) => {
  return axios.post(`${baseUrl}/roleResource/add`, data, { headers })
}
/* 添加资源 */
export const addResource = (data = {}) => {
  return axios.post(`${baseUrl}/resource/add`, data, { headers })
}
/* 资源列表 */
export const resourceList = (params = {}) => {
  return axios.get(`${baseUrl}/resource/list`, { params: { ...params }, headers })
}
/* 修改登录开关 */
export const modifyEnableFlag = (data = {}) => {
  return axios.post(`${baseUrl}/admin/modifyEnableFlag`, data, { headers })
}
/* 修改登录用户密码 */
export const modifyLoginUserPassword = (data = {}) => {
  return axios.post(`${baseUrl}/admin/modifyLoginUserPassword`, data, { headers })
}
