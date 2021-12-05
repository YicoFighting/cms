<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 14:44:30
 * @LastEditTime: 2021-12-04 10:50:50
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\components\nav-header\src\user-info.vue
 * @Description:
-->
<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://dd-static.jd.com/ddimg/jfs/t1/141851/9/22562/11378/61a71bcfE439bb941/7894030b259f9cc6.jpg"
        ></el-avatar>
        <span>肖老板</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick">退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    const router = useRouter()
    const handleExitClick = () => {
      LocalCache.clearCache()
      router.push('/main')
    }
    return { name, handleExitClick }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
