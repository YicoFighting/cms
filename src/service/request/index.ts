/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-27 20:53:36
 * @LastEditTime: 2021-11-29 18:27:09
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\service\request\index.ts
 * @Description:
 */
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { zyRequestConfig, zyRequestInterceptors } from './type'
//babel-plugin-import:下一句不需要引用
import 'element-plus/theme-chalk/el-loading.css'
import { ElLoading } from 'element-plus'
//这个element-plus版本不同的话,路径可能不同
import { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type'
//保持常量一致  默认loading为true
const DEFAULT_LOADING = true
class zyRequest {
  instance: AxiosInstance
  interceptors?: zyRequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean
  //创建实例  每次都把配置传进去 可以根据不同的配置生成不同的实例
  //config的类型既有AxiosRequestConfig又有自定义的类型(拦截器)
  constructor(config: zyRequestConfig) {
    //通过配置创建实例
    this.instance = axios.create(config)
    //保存基本信息
    //是否展示loading  如果前面没有或者是undefined，默认为true(没有传,默认true)
    this.showLoading = config.showLoading ?? true
    //保存拦截器
    this.interceptors = config.interceptors

    //使用拦截器:1、从config中取出的拦截器(对应实例的拦截器)
    //请求拦截器  对应实例拦截器
    this.instance.interceptors.request.use(
      //正确的请求拦截
      this.interceptors?.requestInterceptor,
      //错误的请求拦截
      this.interceptors?.requestInterceptorCatch
    )
    //响应拦截器 对应实例拦截器
    this.instance.interceptors.response.use(
      //正确的响应拦截
      this.interceptors?.responseInterceptor,
      //错误的响应拦截
      this.interceptors?.responseInterceptorCatch
    )

    //使用拦截器:2、添加所有实例的拦截器
    //添加所有实例都有的拦截器  请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    //添加所有实例都有的拦截器  响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        //将loading移除
        this.loading?.close()
        const data = res.data
        //请求成功,发送的是错误信息。1001错误
        if (data.returnCode === '1001') {
          console.log('请求失败')
        } else {
          return data
        }
      },
      (err) => {
        //将loading移除
        this.loading?.close()
        //请求失败 错误信息
        if (err.response.status === 404) {
          console.log('404的错误')
        }
        return err
      }
    )
  }
  //返回的类型,让请求函数告诉它
  request<T>(config: zyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //1、单个请求对请求config的处理
      //发起axios时调用 将config传进来 单独请求的config
      if (config.interceptors?.requestInterceptor) {
        //如果这个单独请求的config有单独的请求拦截器  则将这个请求的config传入请求拦截器中进行处理
        //然后重新赋值给config
        //调用单独请求的请求拦截器处理了一下config
        config = config.interceptors.requestInterceptor(config)
      }
      //2、判断是否需要显示loading
      //单独处理是否显示loading showLoading为false时
      //这里不能写!==DEFAULT_LOADING  因为空,undefined也!==DEFAULT_LOADING
      if (config.showLoading === false) {
        //赋值true 或 false
        this.showLoading = false
      }
      // if (!config.showLoading) {
      //  赋值true 或 false   类型断言
      //   this.showLoading = !config.showLoading
      // }
      //调用单个请求自身的 响应数据处理函数 处理它自己
      //其实官方有个作用在实例上的方法:transformResponse
      //这是axios实例本身的request  而不是这个类里面的request
      //修改这个axios的request类型为 请求函数指定的T
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            //类型“T”的参数不能赋给类型“AxiosResponse<any, any>”的参数。
            //responseInterceptor的参数是AxiosResponse类型   res是T类型
            res = config.interceptors.responseInterceptor(res)
          }
          //上面单次请求将showLoading设置为false  实例也为false  因此所有的请求都不会有loading
          //因此在请求成功之后 要将showLoading重置为true
          this.showLoading = DEFAULT_LOADING
          //3、将结果resolve出去
          //这个res已经不是AxiosResponse类型了,上面全局实例已经处理过了res.data
          //本质上是<T>类型
          resolve(res)
        })
        .catch((err) => {
          //错误的时候也要重新设置为true
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }
  //封装get请求  查
  get<T>(config: zyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  //封装post请求  增
  post<T>(config: zyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  //封装delete请求 删
  delete<T>(config: zyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  //封装patch请求  改
  patch<T>(config: zyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default zyRequest
