//引入express
const express = require('express')

//创建应用对象
const app = express()

//创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send('HELLO AJAX')
})

//可以接受任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应头, 允许接受所有类型的头信息
    response.setHeader('Access-Control-Allow-Headers', '*')
    //响应一个数据
    const data = {
        'name': 'LiMeng'
    }
    //设置响应体
    response.send(JSON.stringify(data))
})

//针对IE缓存
app.get('/delay', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    setTimeout(() => {
        response.send('延时响应')
    }, 3000);

})

//axios服务
app.all('/axios_server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应头, 允许接受所有类型的头信息
    response.setHeader('Access-Control-Allow-Headers', '*')
    //响应一个数据
    const data = {
        method: 'Axios'
    }
    //设置响应体
    response.send(JSON.stringify(data))
})

//fetch服务
app.all('/fetch_server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应头, 允许接受所有类型的头信息
    response.setHeader('Access-Control-Allow-Headers', '*')
    //响应一个数据
    const data = {
        method: 'fetch-AJAX'
    }
    //设置响应体
    response.send(JSON.stringify(data))
})
//jsonp
app.get('/Jsonp', (request, response) => {
    const info = {
        exit: 1,
        msg: '用户名不存在',
    }
    response.send(`handle(${JSON.stringify(info)})`)
})

//监听端口启动服务
app.listen(8000, () => {
    console.log('服务已启动，8000端口监听中');
})