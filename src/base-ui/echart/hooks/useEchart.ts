/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-04 19:37:21
 * @LastEditTime: 2021-12-05 09:19:08
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\base-ui\echart\hooks\useEchart.ts
 * @Description:
 */
import * as echarts from 'echarts'
import ChinaMapData from '../data/china.json'
echarts.registerMap('china', ChinaMapData)
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
