<template>
  <div>
    <h1>{{ test }}</h1>
    <h1>{{ testBName }}</h1>
    <h2>计算属性与监视</h2>
    <h3>被监视的数据</h3>
    <i>firsName</i
    ><input type="text" placeholder="首名" v-model="fullName.firstName" />
    <i>lastName</i
    ><input type="text" placeholder="拉斯特名" v-model="fullName.lastName" />
    <h3>展示</h3>
    <i>computed只有getter</i
    ><input
      type="text"
      placeholder="computed_getter"
      v-model="fullName1"
    /><br />
    <i>computed有getter和setter</i
    ><input
      type="text"
      placeholder="computed_getter_setter"
      v-model="fullName2"
    /><br />
    <i>watch</i
    ><input type="text" placeholder="watch" v-model="fullName3" /><br />
    <i>watchEffect</i
    ><input type="text" placeholder="watch" v-model="fullName4" /><br />
    <input type="text" v-model="test.b.name" />
    <input type="text" v-model="testBName" />
  </div>
</template>
<script lang='ts'>
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  setup() {
    let fullName = reactive({
      firstName: "",
      lastName: "",
    });
    //只有getter的computed，只需要传入一个参数即get函数
    let fullName1 = computed(() => {
      return fullName.firstName + "_" + fullName.lastName;
    });
    //既有getter又有setter的computed，传入对象
    let fullName2 = computed({
      get() {
        return fullName.firstName + "_" + fullName.lastName;
      },
      //set的参数为fullName的响应数据值
      set(val: string) {
        let names = val.split("_");
        fullName.firstName = names[0];
        fullName.lastName = names.length >= 2 ? names[1] : "";
      },
    });

    //watch，第一个参数为监视的对象，第二个参数为回调函数，第三个参数为配置对象
    //其中第三个参数的配置对象可以配置immediate:true（立即执行一次watch，不需要等待watch对象改变）、deep:true（开启深度监视）
    //监听fullName改变fullName3
    let fullName3 = ref("");
    watch(fullName, ({ firstName, lastName }) => {
      fullName3.value = firstName + "_" + lastName;
      console.log(fullName);
      console.log(fullName.firstName, fullName.lastName);
    });
    let fullName4 = ref("");

    //watchEffect不需要配置immediate属性，会监视所有回调中使用的数据
    //通过watchEffect实现双向绑定
    watchEffect(() => {
      fullName4.value = fullName.firstName + "_" + fullName.lastName;
      let names = fullName3.value.split("_");
      fullName.firstName = names[0];
      fullName.lastName = names.length >= 2 ? names[1] : "";
    });
    const test = reactive({ a: 1, b: { name: "俺是b" } });
    const testBName = test.b.name;
    console.log(test);

    return {
      fullName,
      fullName1,
      fullName2,
      fullName3,
      fullName4,
      test,
      testBName,
    };
  },
});
</script>
<style scoped>
</style>