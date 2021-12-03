/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-02 19:04:21
 * @LastEditTime: 2021-12-02 19:57:12
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\role\config\content.config.ts
 * @Description:
 */

export const contentTableConfig = {
  title: '角色列表',
  showSelectColumn: true,
  showIndexColumn: true,
  propsList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
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
