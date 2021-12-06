/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:14:54
 * @LastEditTime: 2021-12-05 11:07:59
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\vue.config.js
 * @Description:
 */
module.exports = {
  //跨域
  devServer: {
    //端口:80
    port: 80,
    //代理选项
    proxy: {
      //api代理至url地址
      '^/api': {
        target: 'http://152.136.185.210:5000',
        //地址重写 不需要带上api
        pathRewrite: {
          '^/api': ''
        },
        //修改源
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    //开启source-map工具
    devtool: 'source-map',
    resolve: {
      alias: {
        views: '@/views',
        components: '@/components'
      }
    }
  }
}
