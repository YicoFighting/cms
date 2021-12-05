<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 10:21:20
 * @LastEditTime: 2021-12-04 15:30:10
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\role\role.vue
 * @Description:
-->
<template>
  <div class="role">
    <page-search :formConfig="formConfig"></page-search>
    <page-content
      pageName="role"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :otherInfo="otherInfo"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import { formConfig } from './config/search.config'
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from 'vuex'
import { getMenuLeafKeys } from '@/utils/map-menus'
import { ElTree } from 'element-plus'
export default defineComponent({
  name: 'role',
  components: { PageContent, PageSearch, PageModal },
  setup() {
    //1、处理pageModal的hook
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      const leafKeys = getMenuLeafKeys(item.menuList)
      //el-tree在组件里,弹窗刚出来，来不及绑定到组件上
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(undefined, editCallback)
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      contentTableConfig,
      formConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
