import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "login" */ '../views/Home.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  },
  {
    path: '/aboutMe',
    name: 'aboutMe',
    component: () => import(/* webpackChunkName: "aboutMe" */ '../views/AboutMe.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/All.vue')
  },
  {
    path: '/userPage',
    component: () => import(/* webpackChunkName: "detail" */ '../views/UserPage.vue'),
    redirect: '/userPage/dash',
    children: [
      {
        path: 'dash',
        component: () => import(/* webpackChunkName: "detail" */ '../views/Dashboard.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router