/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-03 20:25:55
 * @LastEditTime: 2021-12-03 21:03:14
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\hooks\usePageModal.ts
 * @Description:
 */
import { ref } from 'vue'
import PageModal from '@/components/page-modal'
//函数
type CallbackType = () => void
export function usePageModal(
  newCallback?: CallbackType,
  editCallback?: CallbackType
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    newCallback && newCallback()
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    editCallback && editCallback()
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
