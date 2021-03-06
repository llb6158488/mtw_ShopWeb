import Vue from 'vue'
import Router from 'vue-router'
import tblive from "./views/tblive";
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'tblive',
      component: tblive
    },
    {
      path: '/settled',
      name: 'settled',
      component: () => import('./views/settled.vue')
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import('./views/notice.vue'),
      children: [
        {
          path: ':id',
          name: 'noticeDetail',
          component: ()=>import('./components/noticeDetail.vue')
        }
      ]
    }
  ]
})
