<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
const MainTabBar = () => import("./components/mainTabBar.vue");
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
