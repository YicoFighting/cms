/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-29 19:29:46
 * @LastEditTime: 2021-12-02 15:41:20
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\service\login\login.ts
 * @Description:
 */
import service from '../index'
//IAccount:登录时传入账号、密码的类型
//IDataType:表示通用响应数据的类型(data:默认是any,当传入值的时候发生改变)
//ILoginResult:指定通用响应数据类型中data的类型  改变默认值
import { IAccount, ILoginResult } from './type'
import { IDataType } from '@/service/type'
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', //user/1
  UserMenu = '/role/' //role/1/menu
}
//登录
//ESLint:'@typescript-eslint/explicit-module-boundary-types': 0
//传入数据进行类型限制   IAccount
export function accountLoginRequest(account: IAccount) {
  // 返回 <IDataType<ILoginResult>>类型的数据   对响应回来的数据进行限制
  return service.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

//请求用户信息   传入参数的类型限制
export function requestUserInfoById(id: number) {
  //通用响应数据类型
  return service.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    //不转圈
    showLoading: false
  })
}

//角色对应菜单  传入参数的类型限制
export function requestUserRoleById(roleId: number) {
  //通用响应数据类型
  return service.get<IDataType>({
    url: LoginAPI.UserMenu + roleId + '/menu',
    //不转圈
    showLoading: false
  })
}
