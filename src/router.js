// 导入了 vue
import Vue from 'vue'
// 导入了第三方包 vue-router
import Router from 'vue-router'
// 导入 useElement
import UseElement from './views/useElement'
// 导入 login & Home
import Login from '@/views/login'
import Home from '@/views/home'
// 导入 layout
import Layout from '@/views/layout'

// 使用路由
Vue.use(Router)

// 创建并且导出一个 Router 对象
export default new Router({
  // 设置路由选项
  routes: [
    // 根据目录的重定向
    {
      path: '/',
      redirect: '/home'
    },
    // 登录路由
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 布局路由
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    // 主页路由
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    // 测试路由
    {
      path: '/useElement',
      name: 'useElement',
      component: UseElement
    }
  ]
})
