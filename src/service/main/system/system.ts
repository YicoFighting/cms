/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-02 15:29:00
 * @LastEditTime: 2021-12-03 19:06:02
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\service\main\system\system.ts
 * @Description:
 */
import service from '@/service'
import { IDataType } from '@/service/type'
export function getPageListData(url: string, queryInfo: any) {
  return service.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
//url:/users/id
export function deletePageDateById(url: string) {
  return service.delete<IDataType>({
    url: url
  })
}
