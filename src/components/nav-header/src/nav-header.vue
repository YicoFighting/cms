<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-30 18:57:32
 * @LastEditTime: 2021-12-01 19:37:40
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\components\nav-header\src\nav-header.vue
 * @Description:
-->
<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <div><nav-bread-crumb :breadcrumbs="breadcrumbs" /></div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import NavBreadCrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
export default defineComponent({
  emits: ['foldChange'],
  components: { UserInfo, NavBreadCrumb },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    //面包屑 数据
    const store = useStore()
    //IBreadCrumb  让他类型推导
    const breadcrumbs = computed(() => {
      //依赖于这些
      const userMenus = computed(() => store.state.login.userMenus)
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus.value, currentPath)
    })
    return { isFold, handleFoldClick, breadcrumbs }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;
  .fold-menu {
    cursor: pointer;
    font-size: 30px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
