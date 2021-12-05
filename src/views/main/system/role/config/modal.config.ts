/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-03 19:40:06
 * @LastEditTime: 2021-12-04 11:01:46
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\role\config\modal.config.ts
 * @Description:
 */
import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
