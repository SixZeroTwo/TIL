<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>

    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: "",
      path: "/home/news",
    };
  },
  created() {
    console.log("home created");
    // document.title = "首页";
  },
  destroyed() {
    console.log("home destroyed");
  },
  // 这个函数在keep-alive存在时才是有效的
  activated() {
    // console.log("activated");
    this.$router.push(this.path);
  },

  beforeRouteLeave(to, from, next) {
    // ...
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  },
};
</script>

<style>
</style>