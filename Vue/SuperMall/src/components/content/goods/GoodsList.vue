<template>
  <div class="goods" >
    <goods-list-item v-for="item in goods" :product="item" :key="item.id"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      itemClick(){
        this.$router.push('/detail');
      }
    },
    
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }


</style>
