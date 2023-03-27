import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import LayOut from '@/views/LayOut.vue'
import Process from '@/views/Process.vue'
import Run from '@/views/Run.vue'
import Welcome from '@/views/Welcome.vue'
import Welcome1 from '@/views/Welcome1.vue'
import Welcome2 from '@/views/Welcome2.vue'
import LayOutToProcess from '@/views/LayOutToProcess'
import Waiting from '@/views/Waiting'
import { Layout } from 'view-ui-plus'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/Welcome',
    // 子路由/嵌套路由
    children: [
      {
        path: '/LayOutToProcess',
        name: 'LayOutToProcess',
        component: LayOutToProcess,
        meta: {
          index: 8,
        },
      },
      {
        path: '/Waiting',
        name: 'Waiting',
        component: Waiting,
        meta: {
          index: 5,
        },
      },
      {
        path: '/Welcome1',
        name: 'Welcome1',
        component: Welcome1,
        meta: {
          index: 2,
        },
      },
      {
        path: '/Welcome2',
        name: 'Welcome2',
        component: Welcome2,
        meta: {
          index: 2,
        },
      },
      {
        path: '/Welcome',
        name: 'Welcome',
        component: Welcome,
        meta: {
          index: 1,
        },
      },
      {
        path: '/LayOut',
        name: 'LayOut',
        component: LayOut,
        meta: {
          index: 3,
        },
      },
      {
        path: '/Process',
        name: 'Process',
        component: Process,
        meta: {
          index: 4,
        },
      },
      {
        path: '/Run',
        name: 'Run',
        component: Run,
        meta: {
          index: 6,
        },
      }
    ]
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
