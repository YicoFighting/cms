/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 17:14:10
 * @LastEditTime: 2021-11-30 20:15:27
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
app.use(router)
app.use(store)
register(app)
//重新运行就会调用setupStore
setupStore()
app.mount('#app')
