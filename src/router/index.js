import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroView from '../views/IntroView.vue'
import RoomView from '../views/RoomView.vue'
import InfoView from '../views/InfoView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/intro/:fomo/:index/',
    name: 'intro',
    component: IntroView,
  },
  {
    path: '/room/:fomo/:index/',
    name: 'room',
    component: RoomView
  },
  {
    path: '/info/:fomoLv/:index',
    name: 'info',
    component: InfoView,
    props:true,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
