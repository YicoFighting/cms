/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-03 18:21:49
 * @LastEditTime: 2021-12-03 18:25:47
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\hooks\usePrmissions.ts
 * @Description:
 */
import { useStore } from '@/store'

export function usePermissions(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return !!permissions.find((item) => item === verifyPermission)
}
