<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关信息</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.id}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      // 获取当前路径的参数
      return this.$route.params.userId;
    },
  },
  // created() {
  //   console.log("created");
  // },
  methods: {
    btnClick() {
      // 所有组件都继承自Vue类的原型
      console.log(this.$router);
      console.log(this.$route);
      this.test();
      console.log(this.$name);
    },
  },
};
</script>

<style>
</style>