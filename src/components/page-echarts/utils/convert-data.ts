/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-05 09:39:11
 * @LastEditTime: 2021-12-05 10:08:45
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\components\page-echarts\utils\convert-data.ts
 * @Description:
 */
import { coordinateData } from './coordinate-data'
export const convertData = function (data: any) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
