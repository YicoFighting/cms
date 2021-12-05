/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-02 17:15:50
 * @LastEditTime: 2021-12-04 10:29:28
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\utils\date-format.ts
 * @Description:
 */
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
//yarn add dayjs
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  //这个格式化默认使用的是 零时区
  //偏移8小时
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
