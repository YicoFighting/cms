/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 16:49:37
 * @LastEditTime: 2021-12-02 20:19:45
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\role\config\search.config.ts
 * @Description:
 */
import { IForm } from '@/base-ui/form'
export const formConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
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
