<template>
  <div class="title">
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn";
export default {
  name: "#app",
  components: {
    Cpn,
  },
  data() {
    return {
      message: "hello world",
      name: "zhouzhou",
    };
  },
  methods: {
    btnClick() {},
  },
};
</script>

<style scoped>
.title {
  color: green;
}
</style>