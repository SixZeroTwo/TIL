<template>
  <div id="shopcart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>

    <cart-list/>

    <cart-bottom-bar/>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import CartList from './childComps/CartList';
import CartBottomBar from './childComps/CartBottomBar';

import { mapGetters } from 'vuex';


export default {
  name: 'Shopcart',
  data() { 
    return {

    }
  },
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    //mapGetters的第一种用法
    ...mapGetters(['cartCount']),
    //第二种用法
    // ...mapGetters({
    //   length: 'cartLength',
    //   list: 'cartList'
    // })
  }
 }
</script>

<style  scoped>
  #shopcart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>