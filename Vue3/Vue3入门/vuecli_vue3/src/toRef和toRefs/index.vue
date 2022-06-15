<template>
  <div>
    <h3>{{ info }}</h3>
    <h3>toRef的使用</h3>
    <h3>{{ info_3 }}</h3>
    <h3>toRefs的使用</h3>

    <h3>{{ name }}</h3>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRef, toRefs } from "vue";
export default defineComponent({
  setup() {
    const info = reactive({
      name: "li",
      age: "18",
    });
    //console.log({ ...info });
    const info_2 = toRefs(info);
    const info_3 = toRef(info, "age");
    setInterval(() => {
      info_2.name.value += "--";
      info_3.value = info_3.value + "==";
    }, 500);
    return {
      ...info_2,
      info,
      info_3,
    };
  },
});
</script>
<style scoped>
</style>