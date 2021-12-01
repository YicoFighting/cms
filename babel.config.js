/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 17:14:10
 * @LastEditTime: 2021-12-01 08:30:25
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\babel.config.js
 * @Description:
 */
module.exports = {
  plugins: [
    //因为这个版本文件夹的目录结构是这样，因此在"element-plus": "^1.0.2-beta.62"这个版本没有错
    //假设是import { ElButton } from 'element-plus'
    //这里是被解释为:
    //var ElButton = require('element-plus/lib/el-button')  组件就是在lib下的el-button文件夹
    //require('element-plus/lib/theme-chalk/${name}.css')   样式就是在lib的theme-chalk文件夹下
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        }
      }
    ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
