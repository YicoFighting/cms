<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-04 20:02:47
 * @LastEditTime: 2021-12-04 22:18:52
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\components\page-echarts\src\pie-echart.vue
 * @Description:
-->
<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { IDataType } from '../types'
const props = defineProps<{
  pieData: IDataType[]
}>()

const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
