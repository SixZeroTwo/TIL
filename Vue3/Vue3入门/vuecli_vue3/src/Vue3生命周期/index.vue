<template>
  <h2>父组件</h2>
  <button @click="show = !show"></button>
  <Child v-if="show" />
</template>
<script lang='ts'>
import { defineComponent, ref, onBeforeMount, onMounted } from "vue";
import Child from "@/components/Child.vue";
export default defineComponent({
  components: {
    Child,
  },
  setup() {
    const show = ref(true);
    console.log("vue3中的beforeCreate和created");
    onBeforeMount(() => {
      console.log("vue3中的onBeforeMount");
    });
    onMounted(() => {
      console.log("vue3中的onMounted");
    });

    return {
      show,
    };
  },
  beforeCreate() {
    console.log("vue2的beforeCreate");
  },
  created() {
    console.log("vue2的created");
  },
  beforeMount() {
    console.log("vue2的beforeMount");
  },

  mounted() {
    console.log("vue2的mounted");
  },
});
</script>
<style scoped>
</style>