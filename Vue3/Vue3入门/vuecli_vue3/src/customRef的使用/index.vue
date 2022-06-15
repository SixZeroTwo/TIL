<template>
  <div>
    <input type="text" v-model="refObj" />
    <h3>{{ refObj }}</h3>
  </div>
</template>
<script lang='ts'>
//自定义一个ref对象，设计出防抖效果，在input输入停止之后nms改变数据
import { customRef, defineComponent } from "vue";
export default defineComponent({
  setup() {
    function debounceRef(value: any, delay: number) {
      return customRef((track, trigger) => {
        //设置定时器
        let timeout: any = null;
        return {
          get() {
            track();
            return value;
          },
          set(newVal) {
            if (timeout) {
              clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
              trigger();
              value = newVal;
            }, delay);
          },
        };
      });
    }
    const refObj = debounceRef("1", 200);
    return {
      refObj,
    };
  },
});
</script>
<style scoped>
</style>