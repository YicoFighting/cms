/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-28 15:49:32
 * @LastEditTime: 2021-12-05 11:31:54
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\global\index.ts
 * @Description:
 */
//全局注册element-plus的函数
import register from './register'
//全局注册时间格式化的函数
import registerProperties from './register-properties'
import { App } from 'vue'
//导出默认函数 在main.ts注册  把app实例传进来
export default function (app: App): void {
  //传入app实例
  app.use(register)
  app.use(registerProperties)
}
