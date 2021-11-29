/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-27 20:32:25
 * @LastEditTime: 2021-11-28 19:38:03
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\service\index.ts
 * @Description:
 */
//service统一出口
import zyRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
//一个实例  有多个BASE_URL等可以创建多个实例 每个实例都可以有不同的拦截器等等
const service = new zyRequest({
  //AxiosRequestConfig  axios自身的类型
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //zyRequestInterceptors  自定义的类型
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      //携带token的拦截
      if (token) {
        //这里一定要有类型断言
        if (!config?.headers) {
          throw new Error(
            `Expected 'config' and 'config.headers' not to be undefined`
          )
        }
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('实例:请求成功拦截')
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('实例:请求失败拦截')
      return error
    },
    responseInterceptor: (res) => {
      console.log('实例:响应成功拦截')
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log('实例:响应失败拦截')
      return error
    }
  }
})

//假如API有多个地址的话
// const request2 = new zyRequest({
//   baseURL: '地址二'
// })
export default service
