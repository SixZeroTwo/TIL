<template>
  <div>
    <h2>{{ reactiveObj }}</h2>
    <h2>{{ m1 }}</h2>
    <button @click="testToRow">toRaw</button>
    <button @click="testMarkRow">testMarkRaw</button>
  </div>
</template>
<script lang='ts'>
//toRaw可以将响应式对象或readonly对象转换成普通对象
//markRaw可以标记某个对象，使其永远不能转换为响应式对象
import { defineComponent, markRaw, reactive, toRaw } from "vue";
interface reactiveOBJ {
  name: string;
  age: number;
  like?: string[];
}
export default defineComponent({
  setup() {
    const reactiveObj = reactive<reactiveOBJ>({
      name: "ming",
      age: 18,
    });

    const m1 = toRaw(reactiveObj);
    //使reactiveObj的like变为markRow对象

    reactiveObj.like = markRaw(["吃", "睡觉"]);
    const testToRow = () => {
      m1.name += "--";
    };
    const testMarkRow = () => {
      reactiveObj.like && (reactiveObj.like[0] += "===");
    };
    return {
      reactiveObj,
      m1,
      testToRow,
      testMarkRow,
    };
  },
});
</script>
<style scoped>
</style>