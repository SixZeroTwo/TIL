import Config from "./Config.js";
import Grass from "./Grass.js";
import Water from "./Water.js";
import Wall from "./Wall.js";
import Tank from "./Tank.js";
import Enemy from "./Enemy.js";
import Direction from "./Direction.js";

export default class Game {
  constructor(context) {
    this.context = context;
    // 使用一个二维数组把地图上的所有的方块都保存起来
    this.map = [];
    // 也要使用一个数组把敌人的坦克管理起来
    this.enemyTankArr = [];
    // 准备一个数组，控制坦克的方向的数组
    this.controlKeys = [];
  }

  init() {
    //临时的把某些需要重复使用的数据先存储起来
    let size = Config.blockSize;
    // 初始化地图
    // 先把草地铺满整个画布
    // 约定好了的，地图的宽度是1200，地图的高度是600
    // 在横向上面一共有 1200 / 50 个方块
    // 在纵向上一共有  600 / 50 个方块
    let vertical = Config.mapSize.height / Config.blockSize;
    let horizontal = Config.mapSize.width / Config.blockSize;

    // 循环的生成多个草地
    for (let i = 0; i < horizontal; i++) {
      let arr = [];
      for (let j = 0; j < vertical; j++) {
        // 生成草地，放到数组里面
        let g = new Grass(i * size, j * size);
        arr.push(g);
      }
      this.map.push(arr);
    }

    // 再来随机的生成水和砖块
    // 定义一个随机的个数
    // 约定好水和砖块的个数大概就是50-200块
    let count = Math.floor(Math.random() * 151) + 50;
    for (let i = 0; i < count; i++) {
      // 水的位置也要随机
      let x = Math.floor(Math.random() * horizontal);
      let y = Math.floor(Math.random() * vertical);
      // 随机的决定到底是生成水还是砖块
      let type = Math.floor(Math.random() * 2);
      // 判断一下当前要生成的是水还是砖块
      switch (type) {
        case 0:
          // 生成砖块
          this.map[x][y] = new Wall(x * size, y * size);
          break;
        case 1:
          // 生成水
          this.map[x][y] = new Water(x * size, y * size);
          break;
      }
    }

    // 为了保证所有的坦克生成的位置是草地
    // 把玩家的坦克地下的地下强行设定为草地
    this.map[13][11] = new Grass(13 * size, 11 * size);
    // 把三个敌方坦克的脚下也变成草地
    this.map[0][0] = new Grass(0, 0);
    this.map[12][0] = new Grass(12 * size, 0);
    this.map[23][0] = new Grass(23 * size, 0);


    // 生成一个玩家的坦克
    this.player = new Tank(13 * size, 11 * size);

    // 还要生成3个敌人的坦克
    let tk1 = new Enemy(0, 0);//最左上角的敌人
    let tk2 = new Enemy(12 * size, 0); // 中间的敌人
    let tk3 = new Enemy(23 * size, 0); // 右上角的敌人
    this.enemyTankArr.push(tk1, tk2, tk3);
  }
  // 定义一个渲染数据的方法
  render() {
    let context = this.context;
    // 直接把地形都渲染出来、
    // 每个地形都会自己进行渲染，直接明了他们自己渲染就可以了
    this.map.forEach((arr) => {
      arr.forEach((grass) => {
        grass.render(context);
      });
    });

    // 把敌方的坦克也渲染出来
    this.enemyTankArr.forEach(e => {
      e.render(context);
    });

    // 把玩家的坦克渲染出来
    this.player.render(context);

  }

  update() {
    this.timer = setInterval(() => {
      // 每次定时器到期，就检查方向键是否按下
      // 如果按下了，就让坦卡移动起来
      if (this.controlKeys.length != 0) {
        // 总是以数组里面的第一个数字为基准控制坦克的方向
        let first = this.controlKeys[0];
        // console.log(first);
        // 控制坦克的方向
        switch (first) {
          case 87:
            this.player.direction = Direction.up;
            this.player.image.src = '/assets/tank-up.png';
            break;
          case 65: 
            this.player.direction = Direction.left;
            this.player.image.src = '/assets/tank-left.png';
            break;
            case 83:
            this.player.direction = Direction.down;
            this.player.image.src = '/assets/tank-down.png';
            break;
          case 68: 
            this.player.direction = Direction.right;
            this.player.image.src = '/assets/tank-right.png';
            break;
          }
      }


      // 每次定时器到期之后，就徐然数据
      this.render();
    }, 50);
  }

  // 游戏对象管理一下按键的按下和弹起
  keyLisitener() {
    // 给document注册按键事件，以便控制坦克的方向和移动
    // 约定使用wasd 控制坦克的方向和移动
    document.addEventListener('keydown', (e) => {
      console.log(e.keyCode);
      // a - 65   s - 83 d - 68 w - 87
      // 判断当前按下的按键是否存在一个数组里面，每次总是以最后按下的按键为基准，控制坦克的方向
      // 判断按下的按键里面是否包含方向键
      if ([65, 83, 68, 87].indexOf(e.keyCode) != -1) {
        // 如果这些键盘码不再控制的数组里面，就添加进去
        let index = this.controlKeys.indexOf(e.keyCode);
        // 如果不再里面，就存进去
        if (index == -1) {
          // 从数组的前面放进去
          this.controlKeys.unshift(e.keyCode);
        }
      }

    });

    // 当按键松开的时候，把对应的按键的键盘码从控制方向的数组中移除
    document.addEventListener('keyup', (e) => {
      // 如果在数组里面才移除
      let index = this.controlKeys.indexOf(e.keyCode);
      if (index != -1) {
        this.controlKeys.splice(index, 1);
      }
    })
  }
}