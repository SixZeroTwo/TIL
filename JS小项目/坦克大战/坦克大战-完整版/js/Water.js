import Config from "./Config.js";
import BlockType from "./BlockType.js";
import Block from "./Block.js";

export default class Water extends Block {
  constructor(x = 0, y = 0, width = Config.blockSize, height = Config.blockSize, imgUrl = Config.blockAssets.water) {
    super(x, y, width, height, imgUrl);
    this.blockType = BlockType.water;
  }
}