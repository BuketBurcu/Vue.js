import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hakkimizda from "../views/Hakkimizda.vue"
import Ekle from "../views/Ekle.vue"
import Fikirler from "../views/Fikirler.vue"
import { authRef } from '@/firebase/config'

constControl = (to, from, next) => {
  let user = authRef.currentUser;

  if (!user) {
    next({ name: "Home" });
  }
  else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hakkimizda',
    name: 'hakkimizda',
    component: () => import('../views/Hakkimizda.vue'),

  },
  {
    path: '/fikirler',
    name: 'fikirler',
    component: () => import('../views/Fikirler.vue'),
    beforeEnter: authControl,
  },
  {
    path: '/ekle',
    name: 'ekle',
    component: () => import('../views/Ekle.vue'),
    beforeEnter: authControl,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
