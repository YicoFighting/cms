<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 17:14:10
 * @LastEditTime: 2021-12-05 11:22:07
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\App.vue
 * @Description:
-->
<template>
  <div class="app">
    <!-- 用中文的element-plus -->
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
//引入中文语言包
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  setup() {
    return { zhCn }
  }
})
</script>

<style scoped lang="less">
//修改高度为100%
.app {
  height: 100%;
}
</style>
