import Block from "./Block.js";
import Config from "./Config.js";
import Direction from "./Direction.js";

export default class Tank extends Block{
  constructor(x=0,y=0,width=Config.blockSize,height=Config.blockSize,imgSrc='/assets/tank-up.png'){
    super(x,y,width,height,imgSrc);
    // 坦克是有方向的
    this.direction = Direction.up;
  }
}