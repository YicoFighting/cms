/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-29 19:31:29
 * @LastEditTime: 2021-11-30 08:12:24
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\service\login\type.ts
 * @Description:
 */
//axios请求传入数据   登录时,对传入参数进行类型限制
export interface IAccount {
  name: string
  password: string
}
//axios请求登录响应数据   响应成功后,对传出参数进行类型限制
export interface ILoginResult {
  id: number
  name: string
  token: string
}
//axios响应传出数据  比较简单的可以像ILoginResult一个个interface 改变默认值
//比较复杂就用any默认值吧  通用响应数据类型
export interface IDataType<T = any> {
  code: number
  //data是ILoginResult类型数据  默认为any
  data: T
}
