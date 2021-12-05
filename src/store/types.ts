/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-29 16:53:17
 * @LastEditTime: 2021-12-04 17:11:49
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\store\types.ts
 * @Description:
 */
export interface IRootState {
  entireDepartment: any[]
  enitreRole: any[]
  entireMenu: any[]
}
import { ILoginState } from './login/types'
import { ISystemState } from './main/system/type'
import { IDashboardState } from './main/analysis/type'
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
