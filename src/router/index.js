import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import BreadManageMain from "@/components/BreadManageMain";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/BreadManageMain',
      name: 'BreadManageMain',
      component: BreadManageMain
    }
  ]
})
