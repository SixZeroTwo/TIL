<template id='app'>
  <div>
    <h2>{{ appmsg }}</h2>
  </div>
</template>
<script>
export default {
  name: "app",
  template: "#app",
  data() {
    return {
      appmsg: "这是用App.vue写的消息",
    };
  },
};
</script>
<style scoped>
</style>