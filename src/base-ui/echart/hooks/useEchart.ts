/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-04 19:37:21
 * @LastEditTime: 2021-12-04 19:47:53
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\base-ui\echart\hooks\useEchart.ts
 * @Description:
 */
import * as echarts from 'echarts'
export default function (el: HTMLElement) {
  const echartInstace = echarts.init(el)
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstace.setOption(options)
  }
  //可以传出去给首页用
  const setResize = () => {
    echartInstace.resize()
  }
  window.addEventListener('resize', () => {
    echartInstace.resize()
  })
  return {
    echartInstace,
    setOptions,
    setResize
  }
}
