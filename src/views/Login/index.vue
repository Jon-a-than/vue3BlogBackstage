<template>
  <div class="container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>管理员认证</span>
          <el-button class="button" type="text">使用说明</el-button>
        </div>
      </template>
      <el-divider>第三方授权认证</el-divider>
      <div class="authorization">
        <a href="https://gitee.com/oauth/authorize?client_id=b85b65e2371e35ca9f97a6348ca8a92cfc3a3656c1c1d24852125066dd186d79&redirect_uri=http://localhost:3000/login/gitee&response_type=code"
          title="Gitee授权认证"><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-GITEE"></use>
          </svg></a>
        <a href="https://github.com/login/oauth/authorize?client_id=db7547efa91798d7e956" title="GitHub授权认证">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-logo-github"></use>
          </svg>
        </a>
      </div>
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
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
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

.icon {
  width: 2.5rem;
  height: 2.5rem;
}
</style>