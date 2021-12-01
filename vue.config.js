/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:14:54
 * @LastEditTime: 2021-12-01 08:27:06
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\vue.config.js
 * @Description:
 */
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
    }
  }
}
