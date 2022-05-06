<script lang="ts" setup>
import { ArrowRight, Delete, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useArticleStore } from '@/store'

interface User {
  date: string
  title: string
  address: string
}

const search = ref('')

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const useArticle = useArticleStore().$state

</script>

<template>
  <el-breadcrumb style="margin-bottom: 20px" :separator-icon="ArrowRight">
    <el-breadcrumb-item></el-breadcrumb-item>
    <el-breadcrumb-item>创作中心</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
    <el-table :data="useArticle" style="width: 100%;">
      <el-table-column label="文章标题" prop="title" />
      <el-table-column label="更新时间" prop="date" />
      <el-table-column label="是否发布" prop="isPublic" />
      <el-table align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="文章查询" />
        </template>
        <template #default="scope">
          <el-button type="primary" :icon="Edit" size="small" @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button type="danger" :icon="Delete" size="small" @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table>
    </el-table>
  </el-card>
</template>

<style lang="scss" scoped>
</style>