<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 15:29:29
 * @LastEditTime: 2021-12-03 21:04:57
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\base-ui\form\src\form.vue
 * @Description:
-->
<template>
  <div class="zy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :style="itemStyle"
              :label="item.label"
              :rules="item.rules"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <!-- EsLint:'vue/no-mutating-props': 0 -->
                <!-- v-model="formData[`${item.field}`]" -->
                <!-- v-model="formData[`${item.field}`]" -->
                <el-input
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
// import { defineComponent, PropType, ref, watch } from 'vue'
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      //要用剪头函数返回空数组 this指向问题
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    //设置多个属性
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, //>1920  4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    // formData: {
    //   type: Object,
    //   require: true
    // },
    //不要用计算属性 要不然和上面直接修改props没有区别
    //const formData = computed({
    //  get:()=>props.modelValue,
    //    set:(newValue)=>{
    //      emit("update:modelValue",modelValue)
    //    }
    //})
    modelValue: {
      type: Object,
      require: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    //双向绑定
    //拷贝  所以modelValue不影响formData
    //浅拷贝  它是引用的
    // const formData = ref({ ...props.modelValue })
    //页面改变
    // watch(
    //   formData,
    //   (newVal) => {
    //     emit('update:modelValue', newVal)
    //   },
    //   {
    //     deep: true,
    //     immediate: true
    //   }
    // )
    // return { formData }

    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return { handleValueChange }
  }
})
</script>

<style scoped lang="less">
.zy-form {
  padding-top: 20px;
}
</style>
