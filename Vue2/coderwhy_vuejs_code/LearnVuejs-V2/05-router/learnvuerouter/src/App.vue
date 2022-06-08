<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- <router-link to="/home" tag="button" replace>首页</router-link> -->
    <!-- <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <!-- <router-link to="/about" tag="button" replace>关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/' + userId">用户</router-link> -->
    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- <router-link :to="{path: '/profile', query: {name: 'why', age:18, height: 1.80}}">档案</router-link> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <!-- 这里引用的是组件的name 不能加空格 正则也不能加空格 \d{2,9}-->
    <keep-alive exclude="Profile,User">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi",
    };
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      console.log("home");
      // push => pushState
      // this.$router.push("/home");
      this.$router.replace("/home");
    },
    aboutClick() {
      console.log("about");
      // this.$router.push("/about");
      this.$router.replace("/about");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          anem: "zhouzhou",
          age: 19,
          height: 1.88,
        },
      });
    },
  },
};
</script>

<style>
/* 被选中的class */
.router-link-active {
  color: pink;
}
.active {
  color: pink;
}
</style>
