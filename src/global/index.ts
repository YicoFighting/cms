/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-28 15:49:32
 * @LastEditTime: 2021-11-28 15:50:39
 * @Email: 2604482363@qq.com
 * @FilePath: \yarn\src\global\index.ts
 * @Description:
 */
import register from './register'
import { App } from 'vue'
export default function (app: App): void {
  register(app)
}
