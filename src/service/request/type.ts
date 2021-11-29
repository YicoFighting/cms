/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-28 10:25:45
 * @LastEditTime: 2021-11-29 08:49:28
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\service\request\type.ts
 * @Description:
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
//在泛型外面接收T类型  然后内部使用,默认为AxiosResponse
export interface zyRequestInterceptors<T = AxiosResponse> {
  //正确的请求拦截 可选
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  //错误的请求拦截 可选  '@typescript-eslint/no-explicit-any': 0
  requestInterceptorCatch?: (error: any) => any
  //正确的响应拦截 可选
  // responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptor?: (config: T) => T
  //错误的响应拦截 可选  '@typescript-eslint/no-explicit-any': 0
  responseInterceptorCatch?: (error: any) => any
}
//zyRequestConfig既有AxiosRequestConfig又有自定义的类型(拦截器)
export interface zyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  //可选
  interceptors?: zyRequestInterceptors<T>
  //是否展示loading
  showLoading?: boolean
}
