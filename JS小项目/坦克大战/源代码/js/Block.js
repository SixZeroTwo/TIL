import Config from "./Config.js";

export default class Block{
  constructor(x=0,y=0,width=Config.blockSize,height=Config.blockSize,imgSrc='/assets/grass.png'){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imgSrc = imgSrc;
    // 要把图片画到画布上，就必须有图片对象
    this.image = new Image();
    this.image.src = this.imgSrc;
    // 定义一个状态，表示这个图片是否加载完成
    this.isReady = false;
    // 要等图片加载过来才可以画到画布
    this.image.onload = ()=>{
      // 这个事件时告诉画布，图片加载完成，可以画了
      this.isReady = true;
    }
  }

  // 给方块对象，添加一个渲染的方法，让他可以出现在页面上
  render(context){
    // context 对象是一个画笔对象，可以用来画东西    
    // 先判断一下图片是否加载完成了
    if(this.isReady){
      // context.drawImage(图片对象, x坐标, y坐标, 图片宽度, 图片高度);
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }    
  }
}