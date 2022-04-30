<script lang="ts" setup>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import Footer from './components/Footer.vue'
import { router } from '@/router'
import { useUserStore } from '@/store'

// 若未授权则返回登录页
if (!useUserStore().$state.id) router.push('/login')

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside>
          <Aside />
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <el-footer>
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
}

.el-container {
  width: 100%;
  height: 100%;
}

.el-aside {
  width: 20%;
}

.el-footer {
  background: var(--el-color-info-light-9);
}

.el-header {
  background: var(--el-color-primary);
}

.el-main {
  background: var(--el-color-info-light-9);
}
</style>