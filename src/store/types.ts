/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-29 16:53:17
 * @LastEditTime: 2021-12-02 15:19:36
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\store\types.ts
 * @Description:
 */
export interface IRootState {
  name: string
}
import { ILoginState } from './login/types'
import { ISystemState } from './main/system/type'
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
