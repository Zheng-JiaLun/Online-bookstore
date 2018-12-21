<template>
    <!-- 标签栏 -->
    <ul class="tabBar">
      <li class="tabBarItem" v-for="(item, index) in links" :key="index">
        <router-link :to="item.path">
          {{item.title}}
         
        </router-link>
      </li>
    </ul>
</template>

<script>
export default {
    name:'Nav',
    data() {
    return {
      links: [
        { title: "主页", path: "/"},
        { title: "搜索", path: "/search"},
        { title: "购物车", path: "/shoping" },
        { title: "我的", path: "/mine"},
      ]
    }
  }
}
</script>

<style>
    .tabBar {
  list-style: none;
  height: 49px;
  width: 100%;
}
.tabBarItem {
  width: calc(100% / 4);
  height: 100%;
   float: left;
}
.tabBarItem  a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: 100%;
  height: 100%;
  background: rgb(226, 228, 231);
  color: rgb(121, 121, 121);
  text-decoration: none;
}


</style>

