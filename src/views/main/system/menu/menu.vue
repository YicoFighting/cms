<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 10:22:08
 * @LastEditTime: 2021-12-03 16:53:49
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\menu\menu.vue
 * @Description:
-->
<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'zy-menu',
  components: { PageContent },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
