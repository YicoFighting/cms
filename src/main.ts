/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 17:14:10
 * @LastEditTime: 2021-12-02 17:13:11
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\main.ts
 * @Description:
 */
/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import register from './global'
import 'normalize.css'
import '@/assets/css/index.css'
import { setupStore } from './store'
const app = createApp(App)
//重新运行就会调用setupStore
setupStore()
app.use(store)
//install:获取当前path=>>匹配路径(当前动态路由为空,只有静态路由)=>>放在后面才能匹配到,放到前面只能匹配not-found
//注册动态路由(执行这个函数setupStore,动态路由有值)
//路由守卫(回调):能看到所有的路由,但是执行时早已经匹配好了(not-found)
app.use(router)
register(app)
app.mount('#app')
