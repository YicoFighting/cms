<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-01 10:26:04
 * @LastEditTime: 2021-12-04 22:39:02
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
        <zy-card title="不同城市商品销售"></zy-card>
      </el-col>
      <el-col :span="7">
        <zy-card title="分类商品数量(玫瑰图)"></zy-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <zy-card title="分类商品销量"> </zy-card>
      </el-col>
      <el-col :span="12">
        <zy-card title="分类商品的收藏"></zy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import zyCard from '@/base-ui/card'
import { PieEchart } from '@/components/page-echarts'
import { useStore } from '@/store'
export default defineComponent({
  components: { zyCard, PieEchart },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    const categoryGoodsCount = computed(() => {
      // console.log(store.state.dashboard.categoryGoodsCount)
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    return { categoryGoodsCount }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
