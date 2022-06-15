<template>
  <div>
    <h3>x:{{ x }},y:{{ y }}</h3>
    <h2 v-if="loading">正在加载中</h2>
    <h2 v-else-if="!err">err</h2>
    <h2 v-else="data">data</h2>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import useMousePosition from "./useMousePosition";
import useRequest from "@/hook/useRequest";
export default defineComponent({
  //需求，用户点击页面，收集点击位置的坐标，并展示出来
  setup() {
    const { x, y } = useMousePosition();
    const { loading, data, err } = useRequest("/data/test.json");
    return {
      x,
      y,
      loading,
      data,
      err,
    };
  },
});
</script>
<style scoped>
</style>