<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-04 19:33:27
 * @LastEditTime: 2021-11-29 10:18:24
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\login\login.vue
 * @Description:
-->
<template>
  <div class="login">
    <login-pannel></login-pannel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPannel from './cpns/login-pannel.vue'
export default defineComponent({
  components: { LoginPannel },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('~@/assets/img/login-bg.svg');
}
</style>
