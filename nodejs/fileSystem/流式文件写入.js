const fs = require('fs')
//流式写入
//创建可写流
ws = fs.createWriteStream('hell_streamWriting.txt')
//写入
//ws.on('open',function)//绑定事件on(事件字符串，回调函数)
ws.once('open', function () {
    console.log('打开了');
})//绑定事件once(事件字符串，回调函数)，只触发一次
ws.once('close', function () {
    console.log('关闭了');
})
ws.write('写入1')
ws.write('写入2')
ws.write('写入3')
ws.write('写入4')
ws.close()
//监听stream的open和close事件来监听流的打开和关闭