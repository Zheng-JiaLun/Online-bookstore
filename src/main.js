// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import store from './store'
import Axios from 'axios'// 导入axios
import {Carousel,CarouselItem,Input,tabs,button,form,formItem,Dialog} from 'element-ui';
import MINT from 'mint-ui';
import 'mint-ui/lib/style.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(MINT);
Vue.use(Input);
Vue.use(tabs);
Vue.use(button);
Vue.use(form);
Vue.use(formItem);
Vue.use(Dialog);

// 将axios挂载到Vue上
Vue.prototype.$axios = Axios

Axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
  //判断登录状态是否进入mine页面
 if(to.path === '/mine'){
   if(!localStorage.getItem("loginShow") || JSON.parse(localStorage.loginShow) == ""){
    next()
   }else{
      if(JSON.parse(localStorage.getItem('loginShow'))[0] === true){
     next({path: '/personal-center.vue'} );
     return;
      }else {
        next()
      }
   }
  }
  //判断更改顶部标题
  switch(to.name) {
    case "home":  store.commit('changeTitle', "主页"); break;
    case "search":  store.commit('changeTitle', "搜索"); break;
    case "shoping":  store.commit('changeTitle', "购物车"); break;
    case "mine":  store.commit('changeTitle', "登陆/注册"); break;
    case "personal":  store.commit('changeTitle', "个人中心"); break;
    case "details":  store.commit('changeTitle', "详情页"); break;
    case "receiving":  store.commit('changeTitle', "收货地址"); break;
    case "settlement":  store.commit('changeTitle', "结算中心"); break;
    case "modify":  store.commit('changeTitle', "个人资料设置"); break;
    case "order":  store.commit('changeTitle', "我的订单"); break;
  }
  next();
})

Vue.config.productionTip = false

Vue.filter('addSymbols', (value) => {

  return  value.toFixed(2);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  watch: {
    // 监听路由跳转
    $route(to, from) {
      // console.log(to);
      // console.log(from);
    }
  }
})
