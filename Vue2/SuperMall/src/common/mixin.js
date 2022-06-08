import {debounce} from './utils';
import BackTop from 'components/content/backTop/BackTop';
import {BACK_POSITION} from 'common/const';
import {POP, SELL, NEW} from "@/common/const";

export const backTopMixin = {
    data(){
        return{
            isShowBackTop: false,
        }
    },
    components:{
        BackTop,
    },
    methods:{
        backTop(){
            this.$refs.scroll.scrollTo(0, 0, 300);
        },
        listenShowBackTop(position){
            this.isShowBackTop = -position.y > BACK_POSITION;
        }
    }

}

export const itemListenerMixin = {
    data(){
        return {
            itemImgListener: null,
            newRefresh: null,
        }
    },
    methods:{

    },
    mounted(){
        this.newRefresh = debounce(this.$refs.scroll.refresh, 100)

        this.itemImgListener = () => {
            this.newRefresh()
            this.$router.go(0);
        }

        this.$bus.$on('itemImgLoad', this.itemImgListener)
    }
}


export const tabControlMixin = {
    data() {
      return {
        currentType: POP
      }
    },
    methods: {
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = POP
            break
          case 1:
            this.currentType = NEW
            break
          case 2:
            this.currentType = SELL
            break
        }
        console.log(this.currentType);
      }
    }
  }
