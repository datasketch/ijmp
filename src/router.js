import Vue from 'vue'
import Router from 'vue-router'
import News from './views/News.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'news',
      component: News
    },
    {
      path: '/medios',
      name: 'media',
      component: () => import('./views/Media.vue')
    },
    {
      path: '/agregar-medio',
      name: 'add',
      component: () => import('./views/Request.vue')
    }
  ]
})
