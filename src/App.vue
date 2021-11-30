<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 17:14:10
 * @LastEditTime: 2021-11-29 10:16:08
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\App.vue
 * @Description:
-->
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>
