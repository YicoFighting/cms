/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:14:54
 * @LastEditTime: 2021-11-29 20:32:48
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\vue.config.js
 * @Description:
 */
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  //跨域
  devServer: {
    port: 80,
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
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
