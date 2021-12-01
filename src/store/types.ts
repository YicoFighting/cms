/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-29 16:53:17
 * @LastEditTime: 2021-11-30 09:41:41
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\store\types.ts
 * @Description:
 */
export interface IRootState {
  name: string
}
import { ILoginState } from './login/types'
export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
