// 导入了 vue
import Vue from 'vue'
// 导入了组件 App.vue (根组件)
import App from './App.vue'
// 导入了路由
import router from './router'
// 导入了 vuex
import store from './store'
// 导入 Elemnent-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import '@/styles/index.less'
// 导入 axios
import axios from 'axios'

// 给 axios 设置一个基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 将 axios 挂载到 Vue 的原型上
// 可通过 this.$http 来使用
// .vue 是 vue 中的组件
// 所有的组件都是 Vue 的实例
// 在所有的 Vue 实例中都可以使用 $http
// 一般将 axios 挂载为实例属性时，它有一个固定的名称 $http
// $http:
//    $ 区别组件中的属性 与 实例中的属性
// http： 致敬老一辈的框架
//   vue 的全家桶：
//       vue
//       vue-cli
//       vue-router
//       dev-tool
//       vue-resource： vue 官方提供的发送请求的第三方包
//          this.$http
//       axios： 发送异步请求
//         挂载为统一时，设置 $http
Vue.prototype.$http = axios

Vue.use(ElementUI)

// 设置当前项目的模式：当前模式为 开发模式
Vue.config.productionTip = false

var a = true
if (a) {
  console.log('aaaa')
}

function sayHi () {
  console.log('sayHi')
}
sayHi()

if (a === true) {
  console.log('111')
}

// 创建一个 vue 实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
