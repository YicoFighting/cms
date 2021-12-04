/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-02 19:04:21
 * @LastEditTime: 2021-12-03 17:05:19
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\menu\config\content.config.ts
 * @Description:
 */

export const contentTableConfig = {
  title: '菜单列表',
  showSelectColumn: false,
  showIndexColumn: false,
  propsList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '60' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    { prop: 'icon', label: '菜单icon', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    //utc时间格式化
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '220',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handle'
    }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
