<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-03 19:51:14
 * @LastEditTime: 2021-12-03 21:07:04
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\components\page-modal\src\page-modal.vue
 * @Description:
-->
<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <zy-form v-bind="modalConfig" v-model="formData"></zy-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import zyForm from '@/base-ui/form'
export default defineComponent({
  components: { zyForm },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newVal) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newVal[`${item.field}`]
        }
      }
    )
    return { dialogVisible, formData }
  }
})
</script>

<style scoped></style>
