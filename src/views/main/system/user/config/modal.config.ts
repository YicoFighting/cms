/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-03 19:40:06
 * @LastEditTime: 2021-12-03 20:44:49
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\user\config\modal.config.ts
 * @Description:
 */
export const modalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '用户密码',
      placeholder: '请输入密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
