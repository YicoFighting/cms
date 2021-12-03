<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 10:21:20
 * @LastEditTime: 2021-12-02 20:33:20
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
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import { formConfig } from './config/search.config'
export default defineComponent({
  name: 'role',
  components: { PageContent, PageSearch },
  setup() {
    return { contentTableConfig, formConfig }
  }
})
</script>

<style scoped></style>
