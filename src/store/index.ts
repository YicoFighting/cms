/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:49:09
 * @LastEditTime: 2021-11-04 19:56:13
 * @Email: 2604482363@qq.com
 * @FilePath: \yarn\src\store\index.ts
 * @Description:
 */

import { createStore } from 'vuex'
import user from './user/user'

const store = createStore({
  modules: {
    user
  }
})

export default store
