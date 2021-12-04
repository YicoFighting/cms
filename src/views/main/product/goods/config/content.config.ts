/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-02 19:04:21
 * @LastEditTime: 2021-12-03 16:40:53
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\product\goods\config\content.config.ts
 * @Description:
 */

export const contentTableConfig = {
  title: '商品列表',
  showSelectColumn: true,
  showIndexColumn: true,
  propsList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    {
      prop: 'oldPrice',
      label: '原始价格',
      minWidth: '80',
      slotName: 'oldPrice'
    },
    { prop: 'newPrice', label: '最新价格', minWidth: '80' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
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
