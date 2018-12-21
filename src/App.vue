<template>
  <div id="app">
     <!-- 导航栏 -->
    <div class="navigationBar">
      <p class="title">{{this.$store.state.title}}</p>
      <span class="login" @click="home"><img src="./assets/img/首页 (1).png" alt=""></span>
    </div>
    <router-view></router-view>
     
  </div>
  
</template>

<script>

export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    home(){
      this.$router.push({
                name: 'home', params: {  } 
            });    
    }
  }
}
</script>

<style>
html,body{height: 100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.navigationBar {
  width: 100%;
  height: 50px;
  background: #409EFF;
  color: #fff;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
}
.el-carousel{
        z-index: 1;
    }
.navigationBar > .title {
  line-height: 50px;
  text-align: center;
  font-size: 16px;
}
.login{
  font-size: 18px;
  position: absolute;
  top:10px;
  right: 10px;
}
.tabBar{
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 2;
}
.page {
  margin:50px auto;
  
}
.title{
  margin: 0;
}

</style>
