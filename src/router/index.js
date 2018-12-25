import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Shoping from '@/pages/shoping'
import Mine from '@/pages/mine'
import Details from '@/pages/details'
import Search from '@/pages/search'
import Personal from '@/pages/personal-center.vue'
import Modify from '@/pages/modify-information'
import Settlement from '@/pages/settlement'
import Receiving from '../pages/receiving-address'
import Order from '../pages/my-order'




Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      component:Home,
      name:'home',
    },
    {
      path:'/shoping',
      component:Shoping,
      name:'shoping'
    },
    {
      path:'/mine',
      component:Mine,
      name:'mine',
     
    },
    {
      path:'/search',
      component:Search,
      name:'search'
    },
    {
      path:'/details/:id',
      component:Details,
      name:'details'
    },
    {
      path:'/personal-center.vue',
      component:Personal,
      name:'personal'
    },
    {
      path:'/modify-information',
      component:Modify,
      name:'modify'
    },
    {
      path:'/settlement',
      component:Settlement,
      name:'settlement'
    },
    {
      path:'/receiving-address',
      component:Receiving,
      name:'receiving'
    },
    {
      path:'/my-order',
      component:Order,
      name:'order'
    },
  ]
})
