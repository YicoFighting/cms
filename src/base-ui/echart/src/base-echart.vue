<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-04 18:59:44
 * @LastEditTime: 2021-12-04 22:31:39
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\base-ui\echart\src\base-echart.vue
 * @Description:
-->
<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
//vue升级最新
//同时升级 @vue/compiler-sfc
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'
//定义props
//const props = 有返回值
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
