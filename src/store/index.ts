/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:49:09
 * @LastEditTime: 2021-12-04 17:12:35
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\store\index.ts
 * @Description:
 */

import { createStore, Store, useStore as userVuexStore } from 'vuex'
import login from './login/login'
import { IRootState, IStoreType } from './types'
import system from './main/system/system'
import { getPageListData } from '@/service/main/system/system'
import dashboard from './main/analysis/dashboard'
const store = createStore<IRootState>({
  state: {
    entireDepartment: [],
    enitreRole: [],
    entireMenu: []
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeRoleDepartment(state, list) {
      state.enitreRole = list
    },
    changeMenuDepartment(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      //1、请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data

      //2、保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeRoleDepartment', roleList)
      commit('changeMenuDepartment', menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  //因为都是异步请求  假如这个先执行的话获取不到数据
  // store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType> {
  //指定useStore是IStoreType的类型 调用时就知道有什么东西
  return userVuexStore()
}

export default store
