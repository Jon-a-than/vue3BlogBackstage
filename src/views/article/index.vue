<script lang="ts" setup>
import { ArrowRight, Delete, Edit } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'

interface User {
  date: string
  title: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.title.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    title: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    title: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    title: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <el-breadcrumb style="margin-bottom: 20px" :separator-icon="ArrowRight">
    <el-breadcrumb-item></el-breadcrumb-item>
    <el-breadcrumb-item>创作中心</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
    <el-table :data="filterTableData" style="width: 100%;">
      <el-table-column label="发布时间" prop="date" />
      <el-table-column label="文章标题" prop="title" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button type="primary" :icon="Edit" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" :icon="Delete" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style lang="scss" scoped>
</style>