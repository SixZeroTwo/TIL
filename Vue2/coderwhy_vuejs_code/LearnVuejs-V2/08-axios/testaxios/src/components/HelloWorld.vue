<template>
  <div>
    <h2>{{categories}}</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      categories: "",
    };
  },
  // created() {
  //   axios({
  //     url: "http://152.136.185.210:8000/api/z8/category",
  //   }).then((res) => {
  //     this.categories = res;
  //   });
  // },
};
</script>

<style>
</style>