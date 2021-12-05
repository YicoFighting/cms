/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-04 17:05:58
 * @LastEditTime: 2021-12-04 22:39:53
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\store\main\analysis\dashboard.ts
 * @Description:
 */
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import type { IDashboardState } from './type'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryGoodsCountResult.data)
      const categoryGoodsSaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categoryGoodsSaleResult.data)
      const categoryGoodsFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult.data)
      const addressGoodsSaleResult = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoodsSaleResult.data)
    }
  }
}
export default dashboardModule
