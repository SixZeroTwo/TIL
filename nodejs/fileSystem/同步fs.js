//通过node来操作系统中的文件（增删改查）
const fs = require('fs')
//文件的写入
//打开文件  fs.openSync(path,flags,model):path:文件路径；flags：r只读，w可写
let fd = fs.openSync('hello.txt', 'w')
console.log(fd);
//写入文件
fs.writeSync(fd, 'hello world!', 10, 'utf-8')
fs.writeSync(fd, Buffer.from('yes,ok'))
//关闭并保存文件
fs.closeSync(fd)