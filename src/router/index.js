import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from "@/components/Home";

Vue.use(Router)



const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.path == '/Login') {
//     next();
//   } else {
//     let token = window.sessionStorage.getItem('token');
//     console.log(token);
//     if (token == null || token == '') {
//       alert("你没有登陆")
//       next({path:"/Login"})
//     } else {
//       next();
//     }
//   }
// });

export default router;