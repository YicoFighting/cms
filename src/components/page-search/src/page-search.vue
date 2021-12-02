<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 20:47:58
 * @LastEditTime: 2021-12-01 20:58:56
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\components\page-search\src\page-search.vue
 * @Description:
-->
<template>
  <div class="page-search">
    <!-- <zy-form v-bind="formConfig" :formData="formData" /> -->
    <zy-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <h1 class="footer">
          <div class="handle-btns">
            <el-button type="primary" icon="el-icon-refresh">重置</el-button>
            <el-button type="primary" icon="el-icon-search">检索</el-button>
          </div>
        </h1>
      </template>
    </zy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import zyForm from '@/base-ui/form'
export default defineComponent({
  components: { zyForm },
  props: {
    //配置
    formConfig: {
      type: Object,
      require: true
    }
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>

<style scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
