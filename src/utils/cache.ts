/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-29 16:18:56
 * @LastEditTime: 2021-11-29 16:24:43
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\utils\cache.ts
 * @Description:
 */
class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}
export default new LocalCache()
