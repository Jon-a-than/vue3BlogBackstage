<script lang="ts" setup>
import {
  HomeFilled,
  Document,
  EditPen,
  User
} from '@element-plus/icons-vue'
</script>

<template>
  <el-col>
    <el-menu :router="true" :default-active="$route.path" class="el-menu-vertical-demo">
      <el-menu-item index="/home">
        <el-icon>
          <home-filled />
        </el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/creator">
        <el-icon>
          <edit-pen />
        </el-icon>
        <span>创作</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <el-icon>
          <document />
        </el-icon>
        <span>文章</span>
      </el-menu-item>
      <el-menu-item index="/about">
        <el-icon>
          <user />
        </el-icon>
        <span>关于</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<style lang="scss" scoped>
.el-col {
  width: 100%;
}

.el-menu {
  width: 100%;
  border: 0;
}

.el-menu-item {
  display: flex;
  justify-content: center;
}
</style>