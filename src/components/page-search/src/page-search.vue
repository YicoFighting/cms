<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 20:47:58
 * @LastEditTime: 2021-12-03 11:17:14
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\components\page-search\src\page-search.vue
 * @Description:
-->
<template>
  <div class="page-search">
    <!-- <zy-form v-bind="formConfig" :formData="formData" /> -->
    <!-- <zy-form v-bind="formConfig" v-model="formData"> -->
    <zy-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <h1 class="footer">
          <div class="handle-btns">
            <el-button
              type="primary"
              icon="el-icon-refresh"
              @click="handleResetClick"
            >
              重置
            </el-button>
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
  setup(props) {
    //双向绑定的属性应该是由配置文件的field来决定
    //1、优化一：formData中的属性应该动态来决定
    const formItems = props.formConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    //2、优化二:当用户点击重置   有问题  等coder解决
    const handleResetClick = () => {
      // formData.value = formOriginData
      //v-model
      // for (const key in formOriginData) {
      //   formData.value[`${key}`] = formOriginData[key]
      // }

      formData.value = formOriginData
    }
    return { formData, handleResetClick }
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
