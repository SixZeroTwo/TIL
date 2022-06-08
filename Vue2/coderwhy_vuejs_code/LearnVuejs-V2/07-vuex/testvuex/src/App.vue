<template>
  <div id="app">
    <h2>----------App内容：modules里面的内容--------------</h2>
    <!-- 模块 a 添加到了 state 中，所以需要先拿到a 在引用name -->
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <!-- 也是可以直接调用 -->
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>---------------App内容：info对象的内容是否是响应式的------------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">更改信息</button>

    <h2>------------App内容--------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>---------------App内容：getters相关信息------------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgestu(18)}}</h2>

    <h2>-----------------------Hello Vuex内容---------------------------------</h2>
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import { INCREMENT } from "./store/mutations-types";

export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      message: "我是app组件",
      // counter: 0,
    };
  },
  // computed: {
  //   more20stu() {
  //     return this.$store.state.students.filter((s) => s.age > 20);
  //   },
  // },
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      // console.log("addCount...");
      // payload: 负载
      // 1. 普通的提交封装
      // this.$store.commit("incrementCount", count);

      // 2. 特殊的提交封装
      this.$store.commit({
        type: "incrementCount",
        count,
      });
    },
    addStudent() {
      // payload是一个对象
      const stu = { id: 114, name: "lisi", age: 22 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      // this.$store.commit("updateInfo");
      // this.$store.dispatch("aUpdateInfo", "我是payload"); // 可以传递参数
      // this.$store.dispatch("aUpdateInfo", () => {
      //   console.log("里面的操作已经完成了");
      // });
      // this.$store.dispatch("aUpdateInfo", {
      //   message: "我是携带的信息",
      //   success: () => {
      //     console.log("里面已经完成了");
      //   },
      // });
      this.$store
        .dispatch("aUpdateInfo", "我是携带的信息") // index.js中返回的Promise返回到这里
        // 通过actions做了中转，再返回到这里
        .then((res) => {
          console.log("里面完成了提交");
          console.log(res);
        });
    },
    updateName() {
      this.$store.commit("updateName", "lisi");
    },
    asyncUpdateName() {
      this.$store.dispatch("aUpdateName");
    },
  },
};
</script>

<style>
</style>
