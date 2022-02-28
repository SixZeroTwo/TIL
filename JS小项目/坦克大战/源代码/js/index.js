import Game from './Game.js';

// 获取画布对象
let cvs = document.querySelector('#cvs');
// 得到一个画笔对象
let context = cvs.getContext('2d');



// let b = new Block(0,0);
// setTimeout(()=>{
//   b.render(context);
// },1000);

// 面向对象，把整个游戏也看成是一个对象，想要玩游戏，直接命令这个对象做就行
let game = new Game(context);
// 告诉游戏对象，准备游戏所需的数据
game.init();
game.keyLisitener();

game.update();