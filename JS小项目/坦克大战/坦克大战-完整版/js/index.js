import Game from "./Game.js";

let cvs = document.querySelector('#cvs');
let context = cvs.getContext('2d');
let game = new Game(context);
game.init();
game.update();
game.keyLisetner();