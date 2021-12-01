/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:49:09
 * @LastEditTime: 2021-11-30 16:34:20
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\store\index.ts
 * @Description:
 */

import { createStore, Store, useStore as userVuexStore } from 'vuex'
import login from './login/login'
import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  //指定useStore是IStoreType的类型 调用时就知道有什么东西
  return userVuexStore()
}

export default store
