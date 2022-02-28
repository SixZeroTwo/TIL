//引入util模块(node.js的require)
const util = require('util');
//引入fs模块读取文件
const fs = require('fs');

//返回一个Promise对象
let mineReadFile = util.promisify(fs.readFile)

mineReadFile(path).then(value => { console.log(value.toString) })