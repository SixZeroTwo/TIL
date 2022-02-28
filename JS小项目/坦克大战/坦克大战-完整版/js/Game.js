import Config from './Config.js';
import Grass from './Grass.js';
import Water from './Water.js';
import Wall from './Wall.js';
import Tank from './Tank.js';
import Enemy from './Enemy.js';
import Direction from './Direction.js';
import BlockType from './BlockType.js';
import Status from './Status.js';

export default class Game {
  constructor(context) {
    // 画笔对象
    this.context = context;
    // 用一个二维数组来把所有的地形方块存储起来
    // 用一个数组把按下的方向控制按键保存起来
    this.controlKeys = [];
    this.map = [];
    // 用一个数组把所有的敌人坦克存储起来
    this.enemyTankArr = [];
    // 用一个数字把玩家发射的子弹存储起来
    this.playerRocketArr = [];
    // 用一个数组把敌人的子弹存储起来
    this.enemyRocketArr = [];
  }
  // 初始化游戏数据
  init() {
    let size = Config.blockSize;
    // 初始化地图
    // 先把所有地形都填充上草地
    let vertical = Config.mapSize.height / size;
    let horizontal = Config.mapSize.width / size;
    for (let i = 0; i < horizontal; i++) {
      let arr = [];
      for (let j = 0; j < vertical; j++) {
        arr.push(new Grass(i * size, j * size));
      }
      this.map.push(arr);
    }

    // 在随机的生成多个墙壁和水
    // 墙壁和水的总个数(随机50到200个)
    let count = Math.floor(Math.random() * 151) + 50;
    for (let i = 0; i < count; i++) {
      // 随机位置
      let x = Math.floor(Math.random() * horizontal);
      let y = Math.floor(Math.random() * vertical);
      // 随机水或者墙壁
      let type = Math.floor(Math.random() * 2);
      switch (type) {
        case 0:
          this.map[x][y] = new Water(x * size, y * size);
          break;
        case 1:
          this.map[x][y] = new Wall(x * size, y * size);
          break;
      }
    }

    // 几个特定的用来生成坦克的位置不能是墙壁或者谁，修改为草地
    // 玩家的坦克生成位置
    this.map[13][11] = new Grass(13 * size, 11 * size);
    // 敌人坦克的生成位置
    this.map[0][0] = new Grass(0, 0);
    this.map[12][0] = new Grass(12 * size, 0);
    this.map[23][0] = new Grass(23 * size, 0);

    // 生成玩家坦克
    this.player = new Tank(13 * size, 11 * size);

    // 生成3台敌人的坦克
    let tk1 = new Enemy(0, 0);
    let tk2 = new Enemy(12 * size, 0);
    let tk3 = new Enemy(23 * size, 0);
    this.enemyTankArr.push(tk1, tk2, tk3);

  }

  render() {
    // 会在很多地方都用到画笔对象，先存起来，写起来不用那么麻烦
    let context = this.context;

    // 渲染地图
    this.map.forEach((e, i) => {
      e.forEach((e, i) => {
        e.render(context);
      });
    });

    // 渲染敌人坦克
    this.enemyTankArr.forEach((e) => {
      e.render(context);
    })
    // 渲染敌人的子弹
    this.enemyRocketArr.forEach((e) => {
      e.render(context);
    });

    // 渲染玩家的子弹
    this.playerRocketArr.forEach((e, i) => {
      e.render(context);
    });

    // 渲染玩家的坦克
    this.player.render(context);
  }

  clearDieObj() {
    // 清理玩家子弹
    this.playerRocketArr.forEach((e, i) => {
      if (e.status == Status.die) {
        this.playerRocketArr.splice(i, 1);
      }
    });
    // 清理墙壁
    this.map.forEach((e, i) => {
      e.forEach((w, j) => {
        if (w.status == Status.die) {
          this.map[i][j] = new Grass(i * Config.blockSize, j * Config.blockSize);
        }
      });
    })

    // 清理敌人的坦克
    this.enemyTankArr.forEach((e, i) => {
      if (e.status == Status.die) {
        this.enemyTankArr.splice(i, 1);
      }
    });
    // 清理敌人的子弹
    this.enemyRocketArr.forEach((e, i) => {
      if (e.status == Status.die) {
        this.enemyRocketArr.splice(i, 1);
      }
    });
  }

  update() {
    let waters = [];
    this.map.forEach((e, i) => {
      e.forEach((w, j) => {
        if (w.blockType == BlockType.water) {
          waters.push(w);
        }
      });
    });

    this.timer = setInterval((() => {
      //筛选出所有的现存砖块
      let walls = [];
      this.map.forEach((e, i) => {
        e.forEach((w, j) => {
          if (w.blockType == BlockType.wall) {
            walls.push(w);
          }
        });
      });

      // 控制玩家坦克
      if (this.controlKeys.length != 0) {
        let first = this.controlKeys[0];
        switch (first) {
          case 87:
            this.player.direction = Direction.up;
            this.player.image.src = Config.playerAssets.up;
            break;
          case 68:
            this.player.direction = Direction.right;
            this.player.image.src = Config.playerAssets.right;
            break;
          case 83:
            this.player.direction = Direction.down;
            this.player.image.src = Config.playerAssets.down;
            break;
          case 65:
            this.player.direction = Direction.left;
            this.player.image.src = Config.playerAssets.left;
            break;
        }
        this.player.forward([].concat(walls, waters, this.enemyTankArr));
      }

      // 玩家射击
      if (this.player.isShootting && this.player.isWeaponReady) {
        let r = this.player.shoot();
        this.playerRocketArr.push(r);
      }

      // 移动玩家的子弹
      this.playerRocketArr.forEach((e, i) => {
        let cols = [].concat(walls, this.enemyTankArr);
        e.move(cols);
      });

      // 敌方坦克移动
      this.enemyTankArr.forEach((e, i) => {
        let siblings = this.enemyTankArr.slice(0);
        siblings.splice(i, 1);
        let cols = siblings.concat(walls, waters, this.player);
        e.autorun(cols);
        if (e.isWeaponReady) {
          let r = e.shoot(Config.enemyRocketAssets.normal);
          this.enemyRocketArr.push(r);
        }
      });

      // 移动敌人的子弹
      this.enemyRocketArr.forEach((e) => {
        let cols = [].concat(walls, this.player);
        e.move(cols);
      });


      this.clearDieObj();
      this.render();
    }).bind(this), Config.gameUpdateTick);
  }

  keyLisetner() {
    document.addEventListener('keydown', (e) => {
      if ([87, 65, 83, 68].indexOf(e.keyCode) != -1) {
        if (this.controlKeys.indexOf(e.keyCode) == -1) {
          this.controlKeys.unshift(e.keyCode);
        }
      }
    });
    document.addEventListener('keyup', (e) => {
      let index = this.controlKeys.indexOf(e.keyCode);
      if (index != -1) {
        this.controlKeys.splice(index, 1);
      }
      if (e.keyCode == 32) {
        this.player.isShootting = false;
      }
    });
    document.addEventListener('keypress', (e) => {
      if (e.keyCode == 32) {
        if (!this.player.isShootting) {
          this.player.isShootting = true;
        }
      }
    });
  }
}