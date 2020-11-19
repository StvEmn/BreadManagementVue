<template>
  <div class="login-body">
    <el-card style="width: 400px">
      <div slot="header" class="clearfix">
        <span>面包仓库管理系统</span>
      </div>
      <table style="width: 100%">
        <tr>
          <td align="left">用户名</td>
          <td>
            <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
          </td>
        </tr>
        <tr>
          <td align="left">密码</td>
          <td>
            <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            <el-input type="password" v-model="user.password" @keydown.enter.native="doLogin" placeholder="请输入密码"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <!-- 点击事件的两种不同的写法v-on:click和 @click-->
            <el-button style="width: 100%" type="primary" @click="doLogin" class="primary">登录</el-button>
          </td>
        </tr>
      </table>
    </el-card>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
.login-body {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/background.png");
}
.clearfix {
  font-size: 22px;
  text-align: center;
}
.clearfix > span {
  font-weight: bold;
  letter-spacing: 1px;
}
.el-card {
box-shadow: 0 0 20px 3px rgba(80,80,80,.4) !important;
}
.el-card__body {
  padding: 20px 20px 10px 20px !important;
}
tr {
  height: 50px;
}
.primary > span {
  font-size: 15px;
}
</style>
<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    doLogin () {
      // 一点击登录按钮，这个方法就会执行
      if (this.user.username === '' || this.user.password === '') {
        alert('账号密码不能为空')
      } else {
        if (this.user.username === 'admin' || this.user.password === '123') {
          this.$router.push('/home')
        }

        // this.$axios({
        //   url: 'http://localhost/authentication/login',
        //   method: 'POST',
        //   data: {
        //     username: this.user.username,
        //     password: this.user.password
        //   }
        // }).then((res) => {
        //   console.log(res.data.status)
        //   if (res.data.status === 200) {
        //     console.log(res.data.token)
        //     window.sessionStorage.setItem('token', res.data.token)
        //     this.$router.push('/home')
        //   } else if (res.data.status === 210) {
        //     alert(res.data.message)
        //   } else {
        //     alert(res.data.message)
        //   }
        // })
      }
    }
  }
}
</script>
