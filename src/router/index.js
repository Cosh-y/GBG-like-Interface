import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import LayOut from '@/views/LayOut.vue'
import Process from '@/views/Process.vue'
import Run from '@/views/Run.vue'
import { Layout } from 'view-ui-plus'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // 子路由/嵌套路由
    children: [
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
