import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/AmazingHome',
      name: 'AmazingHome',
      component: resolve => require(['@/pages/AmazingHome'], resolve)
    },
    {
      path: '/icancarryu',
      name: 'icancarryu',
      component: resolve => require(['@/pages/ICanCarryU/index'], resolve)
    },
    {
      path: '/404',
      name: 'notFound',
      component: resolve => require(['@/pages/404'], resolve)
    },
    {
      path: '*',
      redirect: {
        path: '/404'
      }
    }
  ]
})
