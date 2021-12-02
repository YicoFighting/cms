<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 18:46:01
 * @LastEditTime: 2021-12-02 10:31:19
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\base-ui\breadcrumb\src\breadcrumb.vue
 * @Description:
-->
<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadCrumb } from '../types'
export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadCrumb[]>,
      default: () => []
    }
  }
})
</script>
