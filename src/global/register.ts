/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-28 16:32:22
 * @LastEditTime: 2021-11-28 18:57:38
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\global\register.ts
 * @Description:
 */
import 'element-plus/theme-chalk/base.css'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
]

import { App } from 'vue'
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
