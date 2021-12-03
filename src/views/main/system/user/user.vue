<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 10:21:08
 * @LastEditTime: 2021-12-02 20:38:52
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\system\user\user.vue
 * @Description:
-->
<template>
  <div class="user">
    <div class="search">
      <page-search :userList="userList" :formConfig="formConfig"></page-search>
    </div>
    <div class="content">
      <page-content
        pageName="users"
        :contentTableConfig="contentTableConfig"
      ></page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { formConfig } from './config/search.config'
// import zyTable from '@/base-ui/table'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'user',
  // components: { PageSearch, zyTable },
  components: { PageSearch, PageContent },
  setup() {
    return {
      formConfig,
      contentTableConfig
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
