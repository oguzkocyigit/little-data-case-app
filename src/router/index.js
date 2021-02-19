import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start/Start.vue'
import Welcome from '../views/Welcome/Welcome.vue'
import End from '../views/End/End.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'start',
    component: Start,
  },
  {
    path: '/welcome/:user',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/end',
    name: 'end',
    component: End,
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
