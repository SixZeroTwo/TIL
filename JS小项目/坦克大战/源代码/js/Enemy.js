import Tank from "./Tank.js";
import Config from './Config.js';

export default class Enemy extends Tank{
  constructor(x=0,y=0,width=Config.blockSize,height=Config.blockSize,imgSrc='/assets/enemy-down.png'){
    super(x,y,width,height,imgSrc);
  }
}