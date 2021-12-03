/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-28 15:49:32
 * @LastEditTime: 2021-12-02 17:15:03
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\global\index.ts
 * @Description:
 */
import register from './register'
import registerProperties from './register-properties'
import { App } from 'vue'
export default function (app: App): void {
  app.use(register)
  app.use(registerProperties)
}
