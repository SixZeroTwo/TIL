import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/home.vue')
const Class = () => import("../views/class/class.vue");
const ShopCar = () => import("../views/shopcar/shopcar.vue");
const Profile = () => import("../views/profile/profile.vue");
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/class',
      component: Class
    },
    {
      path: '/shopcar',
      component: ShopCar
    },
    {
      path: '/profile',
      component: Profile
    },
  ]
})
