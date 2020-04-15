<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <!-- <router-view> -->
    <router-view/>
        <div>
            <van-tabbar v-model="active" @change="change" v-if="isRouterAlive">
            <van-tabbar-item name="home" icon="home-o" :to="{ name: 'Shebeishou' }">设备</van-tabbar-item>
            <van-tabbar-item name="search" icon="search" :to="{ name: 'About' }">商城</van-tabbar-item>
            <van-tabbar-item name="friends" icon="friends-o" :to="{ name: 'Gouwuche' }">购物车</van-tabbar-item>
            <van-tabbar-item name="setting" icon="setting-o" :to="{ name: 'Wode' }">我的</van-tabbar-item>
        </van-tabbar>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
        isRouterAlive: true,//控制底部导航栏是否显示
        active: 'home'
    }
  },
  methods:{
      change(){
          console.log(this.active)
      }
  },
      created() {
    if (
      this.$route.path == "/" ||
      this.$route.path == "/"
    ) {
      this.isRouterAlive = false;
    } else {
      this.isRouterAlive = true;
    }
  }
}
</script>
<style>
html{
  font-size: 16px;
}
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
