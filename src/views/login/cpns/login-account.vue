<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-11-29 10:52:27
 * @LastEditTime: 2021-11-29 18:24:34
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\login\cpns\login-account.vue
 * @Description:
-->
<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import LocalCache from '@/utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.getCache('name') || '',
      password: LocalCache.getCache('password') || ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid: boolean) => {
        if (valid) {
          //1、是否需要记住密码
          if (isKeepPassword) {
            //本地缓存
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            //不记住密码 清除缓存
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }
          //2、执行登录逻辑
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return { account, rules, loginAction, formRef }
  }
})
</script>

<style scoped></style>
