<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="tab-bar-img" src="~assets/img/home.svg" />
        <img slot="tab-bar-img-active" src="~assets/img/home_active.svg" />
        <div slot="tab-bar-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/class" activeColor="blue">
        <img slot="tab-bar-img" src="../assets/img/class.svg" />
        <img slot="tab-bar-img-active" src="../assets/img/class_active.svg" />
        <div slot="tab-bar-text">分类</div>
      </tab-bar-item>
      <tab-bar-item :path="'/shopcar'">
        <img slot="tab-bar-img" src="../assets/img/shopcar.svg" />
        <img slot="tab-bar-img-active" src="../assets/img/shopcar_active.svg" />
        <div slot="tab-bar-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item :path="'/profile'">
        <img slot="tab-bar-img" src="../assets/img/profile.svg" />
        <img slot="tab-bar-img-active" src="../assets/img/profile_active.svg" />
        <div slot="tab-bar-text">个人</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "../components/tabbar/TabBar.vue";
import TabBarItem from "../components/tabbar/TabBarItem.vue";
const Home = () => import("../views/home/home.vue");
const Class = () => import("../views/class/class.vue");
const ShopCar = () => import("../views/shopcar/shopcar.vue");
const Profile = () => import("../views/profile/profile.vue");
export default {
  components: {
    TabBar,
    TabBarItem,
    Home,
    Class,
    ShopCar,
    Profile,
  },
};
</script>
<style scoped>
</style>