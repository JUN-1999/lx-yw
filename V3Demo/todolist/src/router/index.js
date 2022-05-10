import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: { name: 'add' }
      },
      {
        path: '/add',
        name: 'Add',
        component: () => import('../components/Add.vue')
      },
      {
        path: '/delete',
        name: 'Delete',
        component: () => import('../components/Delete.vue')
      },
      {
        path: '/done',
        name: 'Done',
        component: () => import('../components/Done.vue')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass:'active'
})

export default router
