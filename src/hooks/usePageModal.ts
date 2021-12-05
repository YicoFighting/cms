/*
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-03 20:25:55
 * @LastEditTime: 2021-12-04 15:14:05
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\hooks\usePageModal.ts
 * @Description:
 */
import { ref } from 'vue'
import PageModal from '@/components/page-modal'
//函数
type CallbackType = (item?: any) => void
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
  //点击编辑按钮
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    editCallback && editCallback(item)
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
