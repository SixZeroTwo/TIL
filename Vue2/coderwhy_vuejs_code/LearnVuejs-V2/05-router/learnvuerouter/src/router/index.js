// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

// 配置路由相关的信息
import VueRouter from "vue-router";
import Vue from "vue";
// import Home from "../components/Home.vue";
// import About from "../components/About.vue";
// import User from "../components/User.vue";

// 路由懒加载
const Home = () => import("../components/Home.vue");
const About = () => import("../components/About.vue");
const User = () => import("../components/User.vue");
const HomeNews = () => import("../components/HomeNews.vue");
const HomeMessage = () => import("../components/HomeMessage.vue");
const Profile = () => import("../components/Profile.vue");

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

const routes = [
  // 比较特殊，放在最前面
  {
    path: "/",
    // redirect重定向
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    children: [
      // {
      //   path: "",
      //   redirect: "news"
      // },
      {
        path: "news", // 省略/
        component: HomeNews
      },
      {
        path: "message", // 省略/
        component: HomeMessage
      }
    ],
    meta: {
      title: "首页"
    }
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于"
    },
    // 路由独享的守卫
    beforeEnter: (to, from, next) => {
      // ...
      console.log("about beforeEnter");
      next();
    }
  },
  {
    path: "/user/:userId",
    component: User,
    meta: {
      title: "用户"
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "档案"
    }
  }
];
``;
// 2.创建路由对象
const router = new VueRouter({
  // 配置路由和组建的应用关系
  routes,
  linkActiveClass: "active", // 应用活跃的class
  mode: "history" // html5 history模式 消除井号
});

// 全局路由守卫 前置钩子
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title;
  // console.log(to);
  console.log("+++");
  next();
});

// 后置钩子
router.afterEach((to, from) => {
  console.log("---");
});

// 3. 将router对象传入与Vue实例中
export default router;
