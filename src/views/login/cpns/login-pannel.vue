<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-29 10:17:09
 * @LastEditTime: 2021-12-01 08:42:29
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\login\cpns\login-pannel.vue
 * @Description:
-->
<template>
  <div class="login-pannel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword"> 记住密码 </el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="loginHandle">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  name: 'LoginPannel',
  components: { LoginAccount, LoginPhone },
  setup() {
    const isKeepPassword = ref(true)
    const currentTab = ref<string>('account')
    //不能写null  得到真正的类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginHandle = () => {
      accountRef.value?.loginAction(isKeepPassword.value)
    }
    return { isKeepPassword, loginHandle, accountRef, currentTab }
  }
})
</script>

<style scoped lang="less">
.login-pannel {
  width: 320px;

  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
