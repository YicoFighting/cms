/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:14:54
 * @LastEditTime: 2021-11-28 19:05:06
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\vue.config.js
 * @Description:
 */
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  publicPath: './',
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        views: '@/views',
        components: '@/components'
      }
    },
    plugins: [
      require('unplugin-vue-components/webpack')({
        /* options */
        dts: true, // enabled by default if `typescript` is installed
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
}
