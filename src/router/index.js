import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Yaoqingma from '../views/yaoqingma.vue'
import Fayanzheng from '../views/fayanzheng.vue'
import Page from '../views/page-s.vue'
import Shebeishou from '../views/shebeishou.vue'
import Shebei from '../components/shebei.vue'
import Chongzhi from '../views/chongzhi.vue'
import Wode from '../views/wode.vue'
import Gouwuche from '../views/gouwuche.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/denglu',
    name: 'Denglu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Denglu.vue')
  },
  {
    path: '/yaoqingma',
    name: 'Yaoqingma',
    component: Yaoqingma
  },
  {
    path: '/fayanzheng',
    name: 'Fayanzheng',
    component: Fayanzheng
  },
  {
    path: '/page-s',
    name: 'Page',
    component: Page
  },
  {
    path: '/shebeishou',
    name: 'Shebeishou',
    component: Shebeishou
  },
  {
    path: '/shebei',
    name: 'Shebei',
    component: Shebei
  },
  {
    path: '/chongzhi',
    name: 'Chongzhi',
    component: Chongzhi
  },  
  {
    path: '/wode',
    name: 'Wode',
    component: Wode
  },
  {
    path: '/gouwuche',
    name: 'Gouwuche',
    component: Gouwuche
  },
]

const router = new VueRouter({
  routes
})

export default router
