/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-29 16:57:02
 * @LastEditTime: 2021-12-03 18:20:48
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\store\login\types.ts
 * @Description:
 */
export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}
