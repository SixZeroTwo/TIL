<template>
  <div>
    <h2>这里是Usr组件</h2>
    <p>这里是Usr组件内容</p>
    <p>用户的id是：{{ usrId }}</p>
  </div>
</template>

<script>
export default {
  name: "Usr",
  data() {
    return {
      usrId: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>