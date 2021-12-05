<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-03 19:51:14
 * @LastEditTime: 2021-12-04 14:55:35
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
      <!-- 默认插槽 -->
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
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
import { useStore } from 'vuex'
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
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
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
    //点击确定按钮的逻辑
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        //编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        //新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
        console.log('新建用户')
      }
    }
    return { dialogVisible, formData, handleConfirmClick }
  }
})
</script>

<style scoped></style>
