/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:49:09
 * @LastEditTime: 2021-11-29 21:08:00
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\store\index.ts
 * @Description:
 */

import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './types'

const store = createStore<IRootState>({
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
