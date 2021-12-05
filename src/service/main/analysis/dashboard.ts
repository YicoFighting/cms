/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-04 17:15:06
 * @LastEditTime: 2021-12-04 17:18:55
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\service\main\analysis\dashboard.ts
 * @Description:
 */
import service from '@/service'
enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}
export function getCategoryGoodsCount() {
  return service.get({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return service.get({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return service.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getAddressGoodsSale() {
  return service.get({
    url: DashboardAPI.addressGoodsSale
  })
}
