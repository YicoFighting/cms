<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-05 09:01:32
 * @LastEditTime: 2021-12-05 09:05:12
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\components\page-echarts\src\bar-echart.vue
 * @Description:
-->
<template>
  <div class="bar-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'
import BaseEchart from '@/base-ui/echart'
import * as echarts from 'echarts'
const props = withDefaults(
  defineProps<{
    title?: string
    xLabels: string[]
    values: any[]
  }>(),
  {
    title: ''
  }
)
const options = computed(() => {
  return {
    xAxis: {
      data: props.xLabels,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.values
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
