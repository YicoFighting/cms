/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:36:50
 * @LastEditTime: 2021-12-06 13:38:39
 * @Email: 2604482363@qq.com
 * @FilePath: \CMS\src\router\index.ts
 * @Description:
 */

import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/main' },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('views/main/main.vue')
    //children: [] =>> 根据userMenus来决定 =>children
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
//导航守卫:在这里进行动态路由拼接  黑马cms
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  if (to.path === '/main') {
    return firstMenu.url
  }
})
export default router
