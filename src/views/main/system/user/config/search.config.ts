/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 16:49:37
 * @LastEditTime: 2021-12-01 20:00:49
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\user\config\search.config.ts
 * @Description:
 */
import { IForm } from '@/base-ui/form'
export const formConfig: IForm = {
  labelWidth: '120px',
  itemLayout: { padding: '10px 40px' },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
