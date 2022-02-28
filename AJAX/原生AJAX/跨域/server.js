
const { json } = require('express')
const express = require('express')
const app = express()

app.get('/home', (request, response) => {
    //响应一个页面
    response.sendFile(__dirname + '\\index.html')
})

app.get('/data', (request, response) => {
    data = {
        data: '用户数据'
    }
    response.send(JSON.stringify(data))
})

app.listen(9000, () => {
    console.log('9000端口服务已启动');
})

app.get('/Jsonp', (request, response) => {
    const info = {
        exit: 1,
        msg: '用户名不存在',
    }
    response.send(`handle(${info})`)
})

app.listen(9000, () => {
    console.log('9000端口服务已启动');
})