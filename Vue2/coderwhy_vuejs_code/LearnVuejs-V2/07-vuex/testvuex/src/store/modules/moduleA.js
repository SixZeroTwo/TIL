export default {
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
