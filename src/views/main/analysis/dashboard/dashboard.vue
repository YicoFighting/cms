<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 10:26:04
 * @LastEditTime: 2021-12-05 10:20:55
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\views\main\analysis\dashboard\dashboard.vue
 * @Description:
-->
<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <zy-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </zy-card>
      </el-col>
      <el-col :span="10">
        <zy-card title="不同城市商品销售">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </zy-card>
      </el-col>
      <el-col :span="7">
        <zy-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </zy-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <zy-card title="分类商品销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </zy-card>
      </el-col>
      <el-col :span="12">
        <zy-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </zy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import zyCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'
import { useStore } from '@/store'
export default defineComponent({
  components: {
    zyCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
