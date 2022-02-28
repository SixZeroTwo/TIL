import Config from './Config.js';

class Area{
  // 使用这样的一个类的概念，描述一个区域
  // 区域是有左上角的坐标，根据宽度和高度，就可以描述出一个区域
  // 约定好每个格子的大小都是50px
  constructor(x=0,y=0,width=Config.blockSize,height=Config.blockSize){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}