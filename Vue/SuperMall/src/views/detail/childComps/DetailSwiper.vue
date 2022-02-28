<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item
        v-for="(item, index) in topImages"
        :key="index"
        class="swiper-item"
      >
        <img :src="item | Imgfilter" alt @load="imgLoad" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    Imgfilter: function (value) {
      return "http:" + value;
    },
  },
  computed: {
    showImage() {
      return "http:" + item;
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      MyTopImages: [],
    };
  },
  methods: {
    imgLoad() {
      console.log("加载DetailSwiper");
    },
  },
  //   beforeUpdate() {
  //     this.MyTopImages = this.topImages;
  //       for(let i = 0; i < this.MyTopImages.length; i++){
  //           this.MyTopImages[i] = "http:" + this.MyTopImages[i];
  //       }

  //       console.log(this.MyTopImages);
  //   }
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>