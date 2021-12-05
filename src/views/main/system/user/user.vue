<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 10:21:08
 * @LastEditTime: 2021-12-04 19:30:39
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
        pageName="users"
        :defaultInfo="defaultInfo"
        ref="pageModalRef"
        :modalConfig="modalConfigRef"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { formConfig } from './config/search.config'
import PageModal from '@/components/page-modal'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'
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
    //2、动态添加部门和角色列表
    const store = useStore()
    //vuex发生改变会重新执行 动态数据 发生改变需要页面重新刷新的
    const modalConfigRef = computed(() => {
      //改的是引用
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.enitreRole.map((item) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    //3、调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(newCallback, editCallback)
    return {
      formConfig,
      contentTableConfig,
      handleQueryClick,
      handleResetClick,
      pageContentRef,
      modalConfigRef,
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
