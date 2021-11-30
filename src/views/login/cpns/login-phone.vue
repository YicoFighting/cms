<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-29 10:55:11
 * @LastEditTime: 2021-11-29 14:50:53
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\login\cpns\login-phone.vue
 * @Description:
-->
<template>
  <div class="login-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="getCode">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'LoginPhone',
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return { phone }
  }
})
</script>

<style scoped>
.getCode {
  display: flex;
}
.code {
  margin-left: 8px;
}
</style>
