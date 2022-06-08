//配置路由相关信息
import VueRouter from 'vue-router'
import vue from 'vue'
//导入组件（懒加载）
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const Usr = () => import('../components/Usr')
const HomeNews = () => import('../components/HomeNews')
const HomeMsg = () => import('../components/HomeMsg')
const Profile = () => import('../components/Profile')
//通过vue.use(插件),安装插件
vue.use(VueRouter)

//创建VueRouter对象
const routes = [
    {
        path: '',
        redirect: '/home'//配置默认页面，当path为空时，重定向到/home页面
    },
    {
        path: '/home', component: Home, meta: { title: '首页' },
        children: [
            /*             {
                            path: '',
                            redirect: 'news'
                        }, */
            {
                path: 'news', component: HomeNews,
            },
            {
                path: 'msg', component: HomeMsg,
            }
        ]
    },
    {
        path: '/about', component: About, meta: { title: '关于' },
    },
    {
        path: '/usr/:id',
        component: Usr,
        meta: { title: '用户' },
    },
    {
        path: '/profile',
        component: Profile, meta: { title: '档案' },
    },]
//配置路由和组件之间的映射关系
const router = new VueRouter({
    routes,
    mode: 'history',//history模式
    linkActiveClass: 'active'
})
//跳转前修改页面title
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || to.matched[0].meta.title
    console.log(to.matched[0]);
    next()
})
//跳转后
router.afterEach(route => {

})
//将router对象传入到vue实例中
export default router