<template>
  <div>
    <h2>我是Cpn组件的标题</h2>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "#Cpn",
  data() {
    return {
      name: "我是Cpn组件的内容",
    };
  },
};
</script>

<style>
</style>