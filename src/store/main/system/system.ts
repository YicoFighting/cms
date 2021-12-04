/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-02 15:11:50
 * @LastEditTime: 2021-12-03 19:22:26
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\store\main\system\system.ts
 * @Description:
 */
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './type'
import {
  getPageListData,
  deletePageDateById
} from '@/service/main/system/system'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      //1、获取pageUrl
      let pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }
      //2、对页面发送请求
      const pageResult = await getPageListData(
        // payload.pageUrl,
        pageUrl,
        payload.queryInfo
      )
      //接口不规范
      // let pageUrl = ''
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/api/users/abc/list'
      //     break
      //   case 'role':
      //     pageUrl = '/api/role/cba/list'
      //     break
      // }

      //第二种思路
      // const pageUrlMap = {
      //   users: '/api/users/abc/list',
      //   role: '/api/role/cba/list'
      // }
      // const pageUrl = pageUrlMap[pageName]
      //修改service 五大请求 T = nay类型
      //抽取login的类型做返回数据类型  pageResult:IDataType<any>

      //3、将数组存储到state中
      const { list, totalCount } = pageResult.data
      pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1)
      commit(`change${pageName}List`, list)
      commit(`change${pageName}Count`, totalCount)
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      //1、pageName->/users
      //2、id->/users/id
      //1、获取pageName和id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      //2、调用删除网络请求
      await deletePageDateById(pageUrl)
      //3、重新请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        //删除的时候 应该拿到页码数据 请求体的数据  把这些都放到vuex
        //然后在这里再全部拿到 然后再请求数据
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
