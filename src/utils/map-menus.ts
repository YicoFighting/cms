/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 10:51:31
 * @LastEditTime: 2021-12-05 10:25:21
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\utils\map-menus.ts
 * @Description:
 */
import { IBreadCrumb } from '@/base-ui/breadcrumb'
import { RouteRecord } from 'vue-router'
let firstMenu: any = null
export function mapMunusToRoutes(userMenu: any[]): RouteRecord[] {
  const routes: RouteRecord[] = []
  //1、先去加载所有的routes
  const allRoutes: RouteRecord[] = []
  //取router/main 所有ts结尾的文件 这个函数是webpack里面的
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  //2、根据菜单获取需要添加的routes
  //userMenus:
  //type===1=>>children=>>type===1
  //type===2=>>url=>route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenu)
  return routes
}
//面包屑
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadCrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

//点亮菜单
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadCrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        // breadcrumbs?.push({ name: menu.name, path: menu.url })
        breadcrumbs?.push({ name: menu.name, path: findMenu.url })
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}
//叶子节点
export function getMenuLeafKeys(menuList: any[]) {
  const leftKeys: number[] = []
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)
  return leftKeys
}
export { firstMenu }
