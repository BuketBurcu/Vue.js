import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import { projectAuth } from '@/firebase/config'

const requireAuth = (t0, from, next) => {
  let user = projectAuth.currentUser;
  console.log();
  if (!user) {
    next({ name: "welcome" });
  }
  else { next(); }
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: () => import('../views/Chatroom.vue'),
    beforeEnter: requireAuth,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
