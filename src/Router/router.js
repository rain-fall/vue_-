import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import login from '@/components/login.vue'
import home from '@/components/home.vue'
import welcome from '@/view/welcome'
import users from '@/view/user/users.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'login' }
    },
    { name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'home',
      path: '/home',
      component: home,
      redirect: { name: 'welcome' },
      children: [
        {
          name: 'welcome',
          path: 'welcome',
          component: welcome
        },
        {
          name: 'users',
          path: 'users',
          component: users
        }
      ]
    }
  ]
})
