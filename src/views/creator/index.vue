<script lang="ts" setup>
import { ArrowRight, Delete, Promotion } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

const tags = [
  {
    value: 'HTML',
    label: 'HTML',
  },
  {
    value: 'CSS',
    label: 'CSS',
  },
  {
    value: 'JavaScript',
    label: 'JavaScript',
  },
]

interface Article {
  title: string;
  content: string;
  tags: string[];
  categories: string[];
  isPublic: boolean;
}

const article = reactive<Article>({
  title: '',
  content: '',
  tags: [],
  categories: [],
  isPublic: false,
})

const categorie = ref('')
const setCategorie = () => {
  article.categories = categorie.value.split('/')
}
</script>

<template>
  <el-breadcrumb style="margin-bottom: 20px" :separator-icon="ArrowRight">
    <el-breadcrumb-item></el-breadcrumb-item>
    <el-breadcrumb-item>创作中心</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card style="margin-bottom: 10px;">
    <el-form>
      <el-form-item label="文章标题" :required="true">
        <el-input v-model="article.title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类">
        <el-input v-model="categorie" v-on:change="setCategorie" placeholder="以`/`分隔,例:`前端/Vue/v-if`"></el-input>
      </el-form-item>
      <el-form-item label="文章标签">
        <el-select v-model="article.tags" style="width:100%" multiple filterable allow-create default-first-option
          :reserve-keyword="false" placeholder="请选择你的文章标签">
          <el-option v-for="item in tags" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="文章状态">
        <el-radio-group v-model="article.isPublic" :required="true">
          <el-radio label="立即发布" />
          <el-radio label="存为草稿" />
        </el-radio-group>
      </el-form-item>
      <div class="buttons">
        <el-button type="primary" :icon="Promotion">发布</el-button>
        <el-button type="danger" plain :icon="Delete">清空</el-button>
      </div>
    </el-form>
  </el-card>
  <v-md-editor v-model="article.content" height="300px"></v-md-editor>
</template>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: center;
}
</style>