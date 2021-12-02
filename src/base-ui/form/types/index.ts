/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 15:35:26
 * @LastEditTime: 2021-12-01 20:00:17
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\base-ui\form\types\index.ts
 * @Description:
 */
type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  //针对select
  options?: any[]
  //针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemLayout: any
}
