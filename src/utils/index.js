/*
 * @Author: Siwen
 * @Date: 2020-08-21 22:10:08
 * @LastEditors: Siwen
 * @LastEditTime: 2020-08-21 22:39:47
 * @Description:
 */
import * as utils from '@sven0706/js-utils'

const nameFilter = (name) => {
  if (name === '全部频道') return name
  return utils.getStringSymbl(name, '（', '0').replace('频道', '')
}
const lengthFilter = (str, length = 10) => {
  return !str ? str : str.length > length ? `${str.substr(0, length)}...` : str
}
/**
 * 密码格式验证
 * @param {string} str 密码
 * @description 不能纯数字，允许纯字母，6-12位
 */
const isPassword = (str) => {
  const reg = /^(?![0-9]+$)[0-9A-Za-z]{6,12}$/i
  return reg.test(str)
}
export default {
  ...utils,
  nameFilter,
  lengthFilter,
  isPassword,
}
