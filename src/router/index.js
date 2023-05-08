import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomView from '../views/RoomView.vue'
import InfoView from '../views/InfoView.vue'
import Preguntes from '../views/Preguntes.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/room',
    name: 'room',
    component: RoomView
  },
  {
    path: '/info/:NumeroSecret/:FoMo',
    name: 'info',
    component: InfoView,
    props:true,
  },
  {
    path: '/preg',
    name: 'preg',
    component: Preguntes,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
