/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:36:50
 * @LastEditTime: 2021-11-29 20:59:27
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\router\index.ts
 * @Description:
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/cache'
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/main' },
  { path: '/login', component: () => import('views/login/login.vue') },
  { path: '/main', component: () => import('views/main/main.vue') }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})
export default router
