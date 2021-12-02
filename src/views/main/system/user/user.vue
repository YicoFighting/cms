<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 10:21:08
 * @LastEditTime: 2021-12-02 14:56:38
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\user\user.vue
 * @Description:
-->
<template>
  <div class="user">
    <div class="search">
      <page-search :formConfig="formConfig"></page-search>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { formConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: { PageSearch },
  setup() {
    return { formConfig }
  }
})
</script>

<style scoped></style>
