/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 17:14:10
 * @LastEditTime: 2021-11-29 09:51:41
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\main.ts
 * @Description:
 */
/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import register from './global'
import service from './service'
import 'normalize.css'
import '@/assets/css/index.css'
const app = createApp(App)
app.use(router)
app.use(store)
register(app)
app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
service
  .request<DataType>({
    method: 'get',
    url: '/home/multidata',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独:单独请求的config')
        return config
      },
      responseInterceptor: (res) => {
        console.log('单独:处理响应结果')
        return res
      }
    }
    //单独请求要单独处理  是否需要loading  默认为true
    // showLoading: true
  })
  //res: DataType
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
  .catch((err) => {
    console.log(err)
  })

service
  .get<DataType>({
    url: '/home/multidata',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独:单独请求的config')
        return config
      },
      responseInterceptor: (res) => {
        console.log('单独:处理响应结果')
        return res
      }
    }
    //单独请求要单独处理  是否需要loading  默认为true
    // showLoading: true
  })
  //res: DataType
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
  .catch((err) => {
    console.log(err)
  })
