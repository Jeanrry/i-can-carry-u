import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
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
    {
      path: '/beta',
      name: 'beta',
      component: resolve => require(['@/pages/ICanCarryU/BetaLab'], resolve)
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/pages/test/Test'], resolve)
    },
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
