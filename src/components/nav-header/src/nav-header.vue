<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-30 18:57:32
 * @LastEditTime: 2021-12-01 08:55:55
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return { isFold, handleFoldClick }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    cursor: pointer;
    font-size: 30px;
  }
}
</style>
