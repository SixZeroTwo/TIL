import Vue from "vue";
import App from "./App";
// 目录下会自动寻找index
import router from "./router";

Vue.config.productionTip = false;

Vue.prototype.test = function() {
  console.log("test");
};

Vue.prototype.$name = "zhouzhou";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  // 挂载到router
  router,
  render: h => h(App)
});

console.log(router);
