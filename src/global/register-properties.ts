/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-02 17:11:19
 * @LastEditTime: 2021-12-02 21:35:04
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\global\register-properties.ts
 * @Description:
 */
import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
