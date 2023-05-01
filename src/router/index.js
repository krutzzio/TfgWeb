import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomView from '../views/RoomView.vue'
import InfoView from '../views/InfoView.vue'

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
    path: '/info=:NumeroSecret=:Secret',
    name: 'info',
    component: InfoView,
    props:true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
