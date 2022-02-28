const Config = {
  // 正常的每个格子的大小
  blockSize: 50,
  // 碰撞大小的缩小程度
  blockCollisionReduce: 2,
  // 格子的默认背景图片路径
  blockDefaultImageUrl: '/assets/grass.png',
  blockAssets: {
    // 草地背景图路径
    grass: '/assets/grass.png',
    // 墙壁图片路径
    wall: '/assets/wall.png',
    // 水的图片路径
    water: '/assets/water.png',
  },
  // 地图的大小
  mapSize: {
    width: 1200,
    height: 600
  },
  // 墙壁的生命值
  wallLife: 10,
  // 玩家的生命值
  playerLife: 20,
  // 敌人的生命值
  enemyLife: 10,
  // 玩家坦克的图片资源
  playerAssets: {
    up: '/assets/tank-up.png',
    right: '/assets/tank-right.png',
    down: '/assets/tank-down.png',
    left: '/assets/tank-left.png'
  },
  enemyAssets: {
    up: '/assets/enemy-up.png',
    right: '/assets/enemy-right.png',
    down: '/assets/enemy-down.png',
    left: '/assets/enemy-left.png',
  },
  // 移动速度
  playerMoveSpeed: 200,
  enemyMoveSpeed: 150,
  rocketMoveSpeed: 300,
  // 游戏画面刷新的间隔
  gameUpdateTick: 50,
  // 子弹的相关配置
  rocketSize: 20,
  rocketBoomSize: 40,
  playerRocketAssets: {
    normal: '/assets/rocket.png',
    boom: '/assets/boom.png'
  },
  enemyRocketAssets: {
    normal: '/assets/rocket-enemy.png',
    boom: '/assets/boom.png'
  },
  // 攻击力
  playerAttack: 5,
  enemyAttack: 3,
  // 攻击速率
  playerAttackSpeed: 200,
  enemyAttackSpeed: 1000,
  // 爆炸持续时间
  exploadTimeout: 150,
  // 敌人转向的间隔
  enemyTurnRoundTimeout: 2000
}

export default Config;