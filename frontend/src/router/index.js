import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/LanguageSelection', name: 'LanguageSelection', component: () => import('../views/LanguageSelection.vue') },
  { path: '/flashcards', name: 'flashcards', component: () => import('../views/Flashcards.vue') },
  { path: '/study', name: 'study', component: () => import('../views/Study.vue') },
  { path: '/statistics', name: 'statistics', component: () => import('../views/Statistics.vue')},
  { path: '/forum', name: 'forum', component: () => import('../views/Forum.vue')}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
