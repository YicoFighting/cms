/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:36:50
 * @LastEditTime: 2021-11-04 19:42:31
 * @Email: 2604482363@qq.com
 * @FilePath: \yarn\src\router\index.ts
 * @Description:
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('views/login/login.vue') },
  { path: '/main', component: () => import('views/main/main.vue') }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
