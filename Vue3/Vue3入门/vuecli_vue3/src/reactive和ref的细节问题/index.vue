<template>
  <div>
    <h2>reactive和ref的细节问题</h2>
    <h3>m1:{{ m1 }}</h3>
    <h3>m2:{{ m2 }}</h3>
    <h3>m3:{{ m3 }}</h3>
    <button @click="update">更新</button>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const m1 = ref("abc");
    const obj1 = {
      name: "小明",
      girl: {
        name: "小红",
        age: "48",
      },
    };
    const obj2 = {
      name: "小明",
      girl: {
        name: "小红",
        age: "48",
      },
    };
    const m2 = reactive(obj1);
    const m3 = ref(obj2);
    //更新数据
    const update = () => {
      m1.value += "++";
      m2.name += "++";
      m3.value.name += "++";
    };
    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>
<style scoped>
</style>