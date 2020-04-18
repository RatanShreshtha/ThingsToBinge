import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Genres from './views/Genres.vue'
import Content from './views/Content.vue'
import Share from './views/Share.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about/',
    name: 'about',
    component: About
  },
  {
    path: '/:type/genres',
    name: 'genres',
    component: Genres
  },
  {
    path: '/content/:genre/:type/',
    name: 'content',
    component: Content
  },
  {
    path: '/share/:id/',
    name: 'share',
    component: Share
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
