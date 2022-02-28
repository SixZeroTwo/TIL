var board = []; /* 4*4的格子 */
var score = 0;  // 分数

/* 初始化函数，$(document).ready()只会在页面加载完成后实现依次 */
$(document).ready(function () {
    newgame();
})

function newgame() {
    //初始化棋盘格
    init();//对期盼进行了编码
    //在随机两个格子生成数字

}

function init() {
    for (i = 0; i < 4; i++)
        for (j = 0; j < 4; j++) {
            var gridCell = $("#grid-cell-" + i + "-" + "j");
        }

    for (i = 0; i < 4; i++) {
        board[i] = [];
        for (j = 0; j < 4; j++) {
            board[i][j] = 0;
        }
    }

    updateBoardView();
}

function updateBoardView() {
    $("number-cell").remove();
    for (i = 0; i < 4; i++)
        for ()
}