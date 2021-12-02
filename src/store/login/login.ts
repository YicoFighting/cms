/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-28 16:32:22
 * @LastEditTime: 2021-12-01 17:08:31
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\store\login\login.ts
 * @Description:
 */
//模块
import { Module } from 'vuex'
//API
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserRoleById
} from '@/service/login/login'
//
import { ILoginState } from './types'
//rootType
import { IRootState } from '../types'
//发起axios时传入的类型
import { IAccount } from '@/service/login/type'
//本地存储
import LocalCache from '@/utils/cache'
//路由
import router from '@/router'
//动态路由
import { mapMunusToRoutes } from '@/utils/map-menus'
//Module<s,r>:有两个泛型,一定要传
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  //s:类型 泛型  ILoginState
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    //设置vuex的token
    changeToken(state, token: string) {
      state.token = token
    },
    //设置vuex的userInfo
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    //设置vuex的userMenus
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      //userMenus =>> routesn type===2  进行映射
      const routes = mapMunusToRoutes(userMenus)
      //将routes=>>router.main.chilcren
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    //参数必须是:IAccount类型   service也做了限制
    async accountLoginAction({ commit }, payload: IAccount) {
      //1、实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      //在vuex保存token
      commit('changeToken', token)
      //本地缓存
      LocalCache.setCache('token', token)

      //2、请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      //在vuex保存userInfo
      commit('changeUserInfo', userInfo)
      //本地缓存
      LocalCache.setCache('userInfo', userInfo)

      //3、请求用户菜单
      const userMenuResult = await requestUserRoleById(userInfo.role.id)
      const userMenu = userMenuResult.data
      //在vuex保存userMenu
      commit('changeUserMenus', userMenu)
      //本地缓存
      LocalCache.setCache('userMenu', userMenu)

      //4、跳转路由
      router.push('/main')
    },
    //从本地存储读取到vuex  刷新时,vuex还在(永久保存)
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      const userInfo = LocalCache.getCache('userInfo')
      const userMenu = LocalCache.getCache('userMenu')
      if (token) {
        commit('changeToken', token)
      }
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      if (userMenu) {
        commit('changeUserMenus', userMenu)
      }
    }
  }
}

export default loginModule
