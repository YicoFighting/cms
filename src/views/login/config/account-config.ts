/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-29 14:43:59
 * @LastEditTime: 2021-11-29 15:15:38
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\login\config\account-config.ts
 * @Description:
 */
export const rules = {
  name: [
    { required: true, message: '必须写用户名', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字符',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须写密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3个字符以上',
      trigger: 'blur'
    }
  ]
}
