export default {
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
};
