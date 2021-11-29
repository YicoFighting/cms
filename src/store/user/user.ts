import { createStore } from 'vuex'

/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:49:22
 * @LastEditTime: 2021-11-04 19:54:01
 * @Email: 2604482363@qq.com
 * @FilePath: \yarn\src\store\user\user.ts
 * @Description:
 */
const user = createStore({
  state() {
    return {
      userInfo: {
        name: 'xiao'
      }
    }
  }
})

export default user
