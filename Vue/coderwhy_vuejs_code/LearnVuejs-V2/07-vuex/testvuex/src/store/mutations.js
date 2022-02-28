import { INCREMENT } from "./mutations-types";

export default {
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
};
