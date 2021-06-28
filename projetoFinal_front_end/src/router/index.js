import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import Game from '../views/Game.vue'
import Favoritos from '../views/Favoritos.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Erro from '../views/Error.vue'
import Contacts from '../views/Contacts.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    component: Games
  },
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/games/:id',
    component: Game
  },
  {
    path: '/favoritos',
    component: Favoritos
  },

  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/error',
    component: Erro
  },
  
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
