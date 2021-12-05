<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-05 08:33:43
 * @LastEditTime: 2021-12-05 08:43:02
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\components\page-echarts\src\rose-echart.vue
 * @Description:
-->
<template>
  <div>
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { IDataType } from '../types'
const props = defineProps<{
  roseData: IDataType[]
}>()
const options = computed(() => {
  return {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '类别数据',
        type: 'pie',
        radius: [10, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
