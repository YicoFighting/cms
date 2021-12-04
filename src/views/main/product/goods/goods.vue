<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 10:23:00
 * @LastEditTime: 2021-12-03 16:41:36
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\product\goods\goods.vue
 * @Description:
-->
<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="1"
          fit="contain"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">
        {{ '￥' + scope.row.oldPrice }}
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'goods',
  components: { PageContent },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
