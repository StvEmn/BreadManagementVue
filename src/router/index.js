import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'
import User from '@/components/User'
import Stort from '@/components/Store'
import Produce from '@/components/Produce'

Vue.use(Router)



const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:'/welcome',
      children: [
        {
          path: '/welcome',
          component: Welcome
        },
        {
          path: '/user',
          component: User
        },
        {
          path: '/store',
          component: Stort
        },
        {
          path: '/produce',
          component: Produce
        }
      ]
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