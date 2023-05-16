import { createRouter, createWebHistory } from 'vue-router'

const routes = [{ path: '/', component: () => import('./home.vue') }]

export default createRouter({
  history: createWebHistory('/'),
  routes,
})
