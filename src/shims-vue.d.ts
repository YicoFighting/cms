/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 17:14:10
 * @LastEditTime: 2021-12-05 09:18:52
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\shims-vue.d.ts
 * @Description:
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "*.json"
