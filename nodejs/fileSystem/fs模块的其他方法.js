const fs = require('fs')
//验证某个文件是否存在
let isExits = fs.existsSync('hello.txt')
console.log(isExits);

//获取文件状态 stat  statSync
fs.stat('hello.txt', function (err, stats) {
    console.log(stats.isFIFO());
})

//删除文件 unlink unlinkSync
//fs.unlinkSync('TEXT.txt')

//读取目录 readdir readdirSync
fs.readdir('.', function (err, files) {
    console.log(files);
})

//截断文件 truncate truncateSYnc
//fs.truncateSync('TEXT.txt', 3)//截成指定字节大小

//创建文件夹 mkdir mkdirSync
fs.mkdirSync('newFile')

//删除文件夹 rm rmSync
//fs.rmSync('newFile')

//重命名文件夹 rename renameSync
//fs.renameSync('newFile', 'NEWFILE')
fs.renameSync('newFile', '../newfile')//也可以用作移动文件夹

//监视文件的修改 watchFile(filename[,option],listener)
// listener -- 文件发生变化时调用
fs.watchFile('hello.txt', function (curr, prev) {
    console.log('somebody is changing your file！');
})//参数1 -- 修改前的文件对象；参数2 -- 修改后的文件对象