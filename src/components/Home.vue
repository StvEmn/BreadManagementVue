<template>
  <el-container class="home_container">
    <el-header>
      <div>
        <img src="" alt="" />
        <span>面包仓库后台管理系统</span>
      </div>
      <el-button type="info" @click="logout" class="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#409eff"
          unique-opened
        >
          <el-submenu index="1">
            <template slot="title">
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <template slot="title">
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <span>仓库管理</span>
            </template>
            <el-menu-item index="2-1">
              <template slot="title">
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <span>产品管理</span>
            </template>
            <el-menu-item index="3-1">
              <template slot="title">
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/Login");
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

.el-header {
  background-color: #2b2f3a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
}

.el-aside {
  background-color: #304156;
}

.el-aside>.el-menu{
  border-right: none;
}

.el-main {
  background-color: #f0f2f5;
}

.home_container {
  height: 100%;
}
</style>