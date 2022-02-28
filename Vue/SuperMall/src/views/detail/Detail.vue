<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" 
                    @titleClick="titleClick"
                    ref="nav"></detail-nav-bar>
    <!-- <div>{{this.$store.state.count}}</div> -->
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :topImages="topImages" ></detail-swiper> 
      <detail-base-info :goods="goods"></detail-base-info> 
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-param-info ref="param" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailParamInfo from './childComps/DetailParamInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import DetailBottomBar from './childComps/DetailBottomBar';

import Scroll from 'components/common/scroll/Scroll';
import GoodsList from 'components/content/goods/GoodsList';

import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail';
import {debounce} from "common/utils";
import {itemListenerMixin, backTopMixin} from "common/mixin";
import {BACK_POSITION} from "common/const";

import { mapActions } from 'vuex';

export default {
  name: 'Detail',
  data() { 
    return {
        iid: null,
        data: [],
        topImages: [],
        goods: {},
        shop:{},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [0, 1000, 2000, 3000],
        getThemeTopY: null,
        currentIndex: 0,
    }
  },
  mixins: [itemListenerMixin, backTopMixin],
  created(){

      this.iid = this.$route.params.iid;

      //获取商品详情
      getDetail(this.iid).then(res =>{
          const data = res.result;
          this.topImages = res.result.itemInfo.topImages;

          //获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
          
          //获取店铺信息
          this.shop = new Shop(data.shopInfo);
          //console.log(this.shop);

          //获取商品详细信息
          this.detailInfo = data.detailInfo;
          //console.log(this.detailInfo);

          //获取店铺商品信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

          //获取评论信息
          if(data.rate.cRate !== 0){
            this.commentInfo = data.rate.list[0];
          }
          
      })

      //获取推荐信息
      getRecommend().then(res => {
        //  console.log(res);
        this.recommends = res.data.list;
      })

      //给getThemeTopY 赋值
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_SAFE_INTEGER);

        //console.log(this.themeTopYs);
      }, 100)
  },
  methods:{
    ...mapActions(['addCart']),
    // imageLoad(){
    //   this.$refs.scroll.refresh();
    // }
    detailImageLoad(){
      this.newRefresh();

      this.getThemeTopY();
    },
    addToCart(){
      //1.获取购物车所需要的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      //2.将商品添加到购物车内
      //console.log(product);
      //(1)
      //mutation的提交
      //this.$store.commit('addCart', product);
      //action的提交
      //this.$store.dispatch('addCart', product).then({
      //   console.log(res);
      // })

      //(2)
      this.addCart(product).then(res => {
        //console.log(res);
        this.$toast.show(res, 2000);
      })

    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position){
      //1.获取y值
      const positionY = -position.y;

      //2.将positionY的值和主题中的值进行对比
      let length = this.themeTopYs.length;
      // for(let i = 0; i < length; i++){
      //   if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY >=  this.themeTopYs[i]))){
      //     this.currentIndex = i;
      //     this.$refs.nav.currentIndex = this.currentIndex;
      //   }
      // }
      for(let i = 0; i < length - 1; i++){
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.listenShowBackTop(position);
    }
  },
  destoyed(){
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
  components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
  }
 }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 60px;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background: #fff;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 65px;
  }
</style>