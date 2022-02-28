<template>
  <div class="tab-bar-item" @click="ItemClick">
    <slot name="tab-bar-img" v-if="!isActive"></slot>
    <slot name="tab-bar-img-active" v-if="isActive"></slot>
    <slot :style="activeStyle" name="tab-bar-text"></slot>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    path: String,
    activeColor: { type: String, default: "red" },
    activeStyle: {},
  },
  methods: {
    ItemClick() {
      this.$router.push(this.path).catch(() => {});
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 5;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 4px;
  vertical-align: middle;
}
</style>