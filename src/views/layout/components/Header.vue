<script lang="ts" setup>
import { Histogram } from '@element-plus/icons-vue'
import { useUserStore } from '@/store'

const userStore = useUserStore()
const sayHi = (): string => {
  const now = new Date().getHours()
  if (now > 4 && now < 10) return '早上好'
  else if (now >= 10 && now < 13) return '中午好'
  else if (now >= 13 && now < 18) return '下午好'
  return '晚上好'
}
</script>

<template>
  <el-row>
    <el-col :span="6" :xs="10">
      <div class="grid-content header-title">
        <Histogram style="width: 1.5rem;height: 1.5rem;" />博客后台系统
      </div>
    </el-col>
    <el-col :lg="13" :sm="10" :xs="0">
      <div class="grid-content" />
    </el-col>
    <el-col :lg="5" :sm="8" :xs="14">
      <div class="grid-content avatar">
        <span>{{ userStore.$state.login }} {{ sayHi() }}</span>
        <el-avatar :size="50" :src="userStore.$state.avatar_url" />
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.flex-box {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.el-row { height: 100%; }

.grid-content { min-height: 36px; height: 100%; }

.header-title {
  color: #fff;
  font-weight: 900;
  font-size: 1.5rem;
  @extend .flex-box;
  justify-content: center;
}

.avatar {
  @extend .flex-box;

  span { color: #fff; font-size: 1.2rem; }
}

.el-avatar { border: 2px solid var(--el-color-primary-light-7); }
</style>