/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-27 20:53:10
 * @LastEditTime: 2021-12-06 13:42:02
 * @Email: 2604482363@qq.com
 * @FilePath: \CMS\src\service\request\config.ts
 * @Description:
 */
let BASE_URL = ''
let TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
  TIME_OUT = 10000
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/api'
  TIME_OUT = 10001
} else {
  BASE_URL = '/api'
  TIME_OUT = 10002
}
export { BASE_URL, TIME_OUT }
