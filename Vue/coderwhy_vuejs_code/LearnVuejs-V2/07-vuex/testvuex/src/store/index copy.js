import Vue from "vue";
import Vuex from "vuex";
import { INCREMENT } from "./mutations-types";

// 1.安装插件
Vue.use(Vuex);

const moduleA = {
  state: {
    name: "zhangsan"
  },
  mutations: {
    // 不能和store的mutations的函数名重复 优先在下面找
    updateName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    // 这里的context指的是 模块中的 mutations
    aUpdateName(context) {
      console.log(context); //这里的context可以拿到很多东西的
      setTimeout(() => {
        context.commit("updateName", "wangwu");
      }, 1000);
    }
  },
  getters: {
    fullname(state) {
      return state.name + 111;
    },
    // 嵌套调用getters
    fullname2(state, getters) {
      return getters.fullname + "222";
    },
    // 引用根state中的counter 添加一个参数rootState
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter;
    }
  }
};

const moduleB = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
};

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 110, name: "why", age: 18 },
      { id: 111, name: "kobe", age: 28 },
      { id: 112, name: "james", age: 19 },
      { id: 113, name: "curry", age: 39 }
    ],
    info: {
      name: "kobe", //Dep -> [watcher, watcher] 监听 响应式
      age: 40,
      height: 1.98
    }
  },

  mutations: {
    // 方法
    [INCREMENT](state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // incrementCount(state, count) {
    //   state.counter += count;
    // },
    incrementCount(state, payload) {
      // console.log(count); // 第二种方式打印： Object { type: "incrementCount", count: 5 }
      state.counter += payload.count;
    },
    addStudent(state, stu) {
      state.students.push(stu);
    },
    updateInfo(state) {
      state.info.name = "coderwhy"; // 是响应式的 旧属性

      // 错误代码：不能在这里进行异步操作
      // setTimeout(() => {
      //   state.info.name = 'why'
      // }, 1000)
      // state.info["address"] = "Wuhan"; // 新的属性 虽然在store中被改变了 但是在界面上不是响应式的

      // 参考之前的数组里面的操作
      // Vue.set(state.info, "address", "Wuhan"); // 这样才是响应式的
      // delete state.info.age; // 也不是响应式的
      // Vue.delete(state.info, "age"); //是响应式的
    }
  },
  actions: {
    // context上下文 理解为store
    // 必须通过mutations来操作
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit("updateInfo");
    //     // console.log(payload);
    //     // payload();
    //     console.log(payload.message);
    //     payload.success();
    //   }, 1000);
    // }
    aUpdateInfo(context, payload) {
      // 这里的Promise返回到App.vue的方法中 可以进行then操作
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("updateInfo");
          console.log(payload);
          // payload();
          // console.log(payload.message);
          resolve("11111");
        }, 1000);
      });
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20);
    },
    // 调用其他的getters
    more20stuLength(state, getters) {
      return getters.more20stu.length;
    },
    // 传入自定义的参数
    moreAgestu(state) {
      // return function(age) {
      //   return state.students.filter(s => s.age > age);
      // };
      return age => {
        return state.students.filter(s => s.age > age);
      };
    }
  },
  // 可以进行抽离
  modules: {
    a: moduleA,
    b: moduleB
  }
});

// 3. 导出store独享
export default store;
