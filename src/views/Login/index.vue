<template>
  <div class="container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>管理员认证</span>
          <el-button class="button" type="text">使用说明</el-button>
        </div>
      </template>

      <div class="authorization">
        <a href="https://github.com/login/oauth/authorize?client_id=db7547efa91798d7e956" title="GitHub授权认证"><i class="iconfont icon-GitHub"></i></a>
      </div>
      <el-divider>第三方授权认证</el-divider>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.authorization {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  a {
    color: #000;
    text-decoration: none;
  }

  a > i {
    font-size: 40px;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>