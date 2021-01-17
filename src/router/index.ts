import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/goals'
  },
  {
    path:'/register',
    component: () => import('@/views/Register.vue')

  },
  {
    path:'/starter',
    component: () => import('@/views/StarterComponent.vue')

  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/goals'
      },
      {
        path: 'goals',
        component: () => import('@/views/GoalsComponent.vue')
      },
      {
        path: 'search',
        component: () => import('@/views/SearchComponent.vue')
      },
      {
        path: 'explore',
        component: () => import('@/views/ExploreComponent.vue')
      },
      {
        path: 'notifications',
        component: () => import('@/views/NotificationsComponent.vue')
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
