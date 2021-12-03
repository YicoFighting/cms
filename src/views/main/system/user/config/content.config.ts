/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-02 19:04:21
 * @LastEditTime: 2021-12-02 19:05:40
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\user\config\content.config.ts
 * @Description:
 */

export const contentTableConfig = {
  title: '用户列表',
  showSelectColumn: true,
  showIndexColumn: true,
  propsList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号码', minWidth: '120' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
    //utc时间格式化
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handle'
    }
  ]
}
