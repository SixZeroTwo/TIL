<template>
  <div id="app">
    <router-link to="/home" tag="button" replace="">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/usr/' + usrId">用户</router-link>
    <!--     <button @click="toHome">主页</button>
    <button @click="toAbout">关于</button> -->
    <router-link
      :to="{ path: '/profile', query: { size: 18, age: 18, time: 18 } }"
      >档案</router-link
    >
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      usrId: "mengxixi",
    };
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    toAbout() {
      this.$router.push("/about");
    },
  },
};
</script>

<style>
</style>
