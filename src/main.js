import Vue from 'vue'
import App from './App.vue'
import router from '@/Router/router.js'

// 引入index.less 自定义样式
import '@/styles/index.less'
// 引入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入router.js

Vue.use(ElementUI)

Vue.config.productionTip = false

// 添加导航守卫 两种种情况下需要用导航守卫，1.登录页2.有登录状态
router.beforeEach((to, from, next) => {
  let mytoken = localStorage.getItem('itcast_token')
  if (mytoken || to.path === '/login') {
    next()
  } else {
    next({ path: '/login' })
  }
}
)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
