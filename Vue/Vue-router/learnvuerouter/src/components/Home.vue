<template>
  <div>
    <h2>这里是Home组件</h2>
    <p>这里是Home组件内容</p>
    <router-link to="news" tag="button">新闻</router-link>
    <router-link to="msg" tag="button">消息</router-link>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "home/news",
    };
  },
  created() {
    console.log("home created");
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    console.log("home activated");
    this.$router.push(this.path);
  },

  beforeRouteLeave(to, from, next) {
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
    this.path = this.$route.path;
    console.log(this);
    next();
  },
};
</script>

<style>
</style>