/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-02 15:40:38
 * @LastEditTime: 2021-12-02 15:40:39
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\service\type.ts
 * @Description:
 */
//axios响应传出数据  比较简单的可以像ILoginResult一个个interface 改变默认值
//比较复杂就用any默认值吧  通用响应数据类型
export interface IDataType<T = any> {
  code: number
  //data是ILoginResult类型数据  默认为any
  data: T
}
