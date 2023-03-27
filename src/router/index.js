import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import LayOut from '@/views/LayOut.vue'
import Process from '@/views/Process.vue'
import Run from '@/views/Run.vue'
import Welcome from '@/views/Welcome.vue'
import Welcome1 from '@/views/Welcome1.vue'
import Welcome2 from '@/views/Welcome2.vue'
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
        path: '/Welcome1',
        name: 'Welcome1',
        component: Welcome1
      },
      {
        path: '/Welcome2',
        name: 'Welcome2',
        component: Welcome2
      },
      {
        path: '/Welcome',
        name: 'Welcome',
        component: Welcome
      },
      {
        path: '/LayOut',
        name: 'LayOut',
        component: LayOut
      },
      {
        path: '/Process',
        name: 'Process',
        component: Process
      },
      {
        path: '/Run',
        name: 'Run',
        component: Run
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
