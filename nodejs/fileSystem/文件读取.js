//同步异步文件读取：open+ r/w + close
//简单文件读取
const fs = require('fs')
let a = 0
//fs.readFile
//fs.readFileSync
fs.readFile('fileSystem/hello.txt', function (err, data) {
    if (!err) {
        console.log(data.toString());
    }
    else {
        console.log(err);
    }
}
)
//流式文件读取
rs = fs.createReadStream('fileSystem/hello_streamWriting.txt')
//流式文件写入
ws = fs.createWriteStream('fileSystem/writeStream.txt')
//监听流的开启和关闭
rs.once('open', function () {
    console.log('open stream');
})
rs.once('close', function () {
    console.log('close stream' + '\n' + a);
    ws.close()

})
ws.once('close', function () {
    console.log('close writeStream');
})
//如果要读取可读流的数据，需要为可读流绑定data事件
/* rs.on('data', function (data) {
    console.log(data);
    ws.write(data)
    a++
}) */
//pipe可以建立可写流和可读流之间的连接
rs.pipe(ws)