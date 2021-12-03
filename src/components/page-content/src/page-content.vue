<!--
 * @Author: Yico
 * @LastEditors: Yico
 * @Date: 2021-12-02 19:09:09
 * @LastEditTime: 2021-12-02 20:17:12
 * @Email: 2604482363@qq.com
 * @FilePath: \TEST_coder\src\components\page-content\src\page-content.vue
 * @Description:
-->
<template>
  <div class="page-content">
    <zy-table :listData="listData" v-bind="contentTableConfig">
      <template #headerHandle>
        <el-button type="primary" size="medium" @click="handleNewUser">
          新建用户
        </el-button>
        <el-button icon="el-icon-refresh"></el-button>
      </template>

      <template #status="scope">
        <el-button
          size="mini"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handle>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="mini" type="text">
            编辑
          </el-button>
          <el-button icon="el-icon-delete" size="mini" type="text">
            删除
          </el-button>
        </div>
      </template>
    </zy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import zyTable from '@/base-ui/table'
import { useStore } from '@/store'
export default defineComponent({
  components: { zyTable },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const listData = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    return { listData }
  }
})
</script>

<style scoped></style>
