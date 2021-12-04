<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 10:21:08
 * @LastEditTime: 2021-12-03 21:00:12
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\user\user.vue
 * @Description:
-->
<template>
  <div class="user">
    <div class="search">
      <page-search
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
        :userList="userList"
        :formConfig="formConfig"
      ></page-search>
    </div>
    <div class="content">
      <page-content
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
        ref="pageContentRef"
        pageName="users"
        :contentTableConfig="contentTableConfig"
      ></page-content>
      <page-modal
        :defaultInfo="defaultInfo"
        ref="pageModalRef"
        :modalConfig="modalConfig"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { formConfig } from './config/search.config'
import PageModal from '@/components/page-modal'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/usePageModal'
export default defineComponent({
  name: 'user',
  // components: { PageSearch, zyTable },
  components: { PageSearch, PageContent, PageModal },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    //pageModal相关的hook逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(newCallback, editCallback)
    return {
      formConfig,
      contentTableConfig,
      handleQueryClick,
      handleResetClick,
      pageContentRef,
      modalConfig,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
