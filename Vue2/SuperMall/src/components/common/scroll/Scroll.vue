<template>
  <div ref="wrapper">
    <div>
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data() { 
    return {
        scroll:null
    }
  },
  mounted(){
    // setTimeout(this.__initScroll, 20);
    // this.scroll = new BScroll(this.$refs.wrapper, {
    //     click:true,
    //     probeType: this.probeType,
    //     pullUpLoad: this.pullUpLoad,
    // })
    if (!this.$refs.wrapper) return
      this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
})

    if(this.probeType === 2 || this.probeType === 3){
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position);
      })
    }


    if(this.pullUpLoad){
      this.scroll.on('pullingUp', ()=>{
      this.$emit('pullingUp');
    })
    }

  },
  methods:{
    // __initScroll() {
		//     // 1.初始化BScroll对象
		//     if (!this.$refs.wrapper) return
    //     this.scroll = new BScroll(this.$refs.wrapper, {
    //       probeType: this.probeType,
    //       click: true,
    //       pullUpLoad: this.pullUpLoad
    //     })

    //     // 2.将监听事件回调
    //     this.scroll.on('scroll', pos => {
    //       this.$emit('scroll', pos)
    //     })

    //     // 3.监听上拉到底部
    //     this.scroll.on('pullingUp', () => {
    //       console.log('上拉加载');
    //       this.$emit('pullingUp')
    //     })
    //   },
    scrollTo(x, y, time=300){
      
      this.scroll && this.scroll.scrollTo(x, y, time);
      console.log('--------');
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    },
    refresh(){
      //console.log('dasdasd')
      this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0;
    }
  },    
  watch: {
    data() {
      setTimeout(this.refresh, 20)
    }
  }
 }
</script>

<style lang="" scoped>
</style>