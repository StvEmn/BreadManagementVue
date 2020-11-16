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
      <el-aside>
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#409eff"
          unique-opened
          router
        >
          <el-menu-item
            :index="item.router"
            :key="item.id"
            v-for="item in menuList"
          >
            <template slot="title">
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        { id: 1, name: "用户信息管理", router: "user" },
        { id: 2, name: "仓库信息管理", router: "store" },
        { id: 3, name: "产品信息管理", router: "produce" },
      ],
    };
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      //this.$router.push("/login");
      console.log(this.menuList);
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
  width: 160px !important;
  background-color: #304156;
}

.el-aside > .el-menu {
  border-right: none;
}

.el-menu-item {
  text-align: center;
  background-color: #1f2d3d !important;
  font-size: 15px !important;
}

.el-main {
  background-color: #f0f2f5;
}

.home_container {
  height: 100%;
}
</style>