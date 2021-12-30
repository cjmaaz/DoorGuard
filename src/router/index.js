import { createRouter, createWebHistory } from 'vue-router'

import { auth } from '@/firebase/config';

const requireVerification = (to, from, next) => {
  let user = auth.currentUser;
  if (!user.emailVerified) {
    next({ name: 'Welcome' })
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),

  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/Welcome.vue')
  },
  {
    path: '/queries',
    name: 'Query',
    component: () => import('@/views/Query.vue'),
    beforeEnter: requireVerification
  },
  {
    path: '/histories',
    name: 'History',
    component: () => import('@/views/History.vue'),
    beforeEnter: requireVerification
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
