import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/AmazingHome',
    //   name: 'AmazingHome',
    //   component: resolve => require(['@/pages/AmazingHome'], resolve)
    // },
    {
      path: '/',
      name: 'icancarryu',
      component: resolve => require(['@/pages/ICanCarryU/index'], resolve)
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: resolve => require(['@/pages/ICanCarryU/Introduce'], resolve)
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: resolve => require(['@/pages/test/Test'], resolve)
    // },
    // {
    //   path: '/404',
    //   name: 'notFound',
    //   component: resolve => require(['@/pages/404'], resolve)
    // },
    {
      path: '*',
      redirect: {
        path: '/'
      }
    }
  ]
})
