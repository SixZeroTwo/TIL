<template>
  <div>
    <h3>--------子组件-------</h3>
    <h3>{{ msg }}</h3>
    <button @click="test">更新数据</button>
  </div>
</template>
<script>
import {
  defineComponent,
  onUpdated,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from "vue";
export default defineComponent({
  /*   name: "Child",
  setup(props, { attrs, emit }) {
    console.log(attrs.msg2);
    function test() {
      emit("fnEvent", "++");
    }
    return { props, test };
  },
  props: {
    msg: String,
  }, */
  name: "Child",
  setup() {
    const msg = ref("msg");
    const test = function () {
      msg.value += "---";
    };
    onBeforeUpdate(() => {
      console.log("vue3中的onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("vue3中的onupdated");
    });
    onBeforeUnmount(() => {
      console.log("vue3中的onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("vue3中的onUnmounted");
    });
    return {
      msg,
      test,
    };
  },
  beforeUpdate() {
    console.log("vue2的beforeUpdate");
  },
  updated() {
    console.log("vue2的updated");
  },
  beforeUnmount() {
    console.log("vue2的beforeDestroy");
  },
  unmounted() {
    console.log("vue2的destroyed");
  },
});
</script>
<style scoped>
</style>