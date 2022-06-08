export default {
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
};
