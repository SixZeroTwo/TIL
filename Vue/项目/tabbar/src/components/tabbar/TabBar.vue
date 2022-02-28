<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  /*   left: 0;
  right: 0; */
  box-shadow: 0px -2px 5px rgba(68, 55, 55, 0.5);
  background-color: #f2f2f2;
}
</style>