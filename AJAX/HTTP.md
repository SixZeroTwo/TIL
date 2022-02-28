# HTTP
hypertext transport portocol

## 请求报文
### 请求行
GET/POST url路径 http协议版本
### 请求头
Host: ***
Cookie: *** 
Content-type: ***
User-Agent: ***
### 请求空行
### 请求体
GET请求的请求体为空，POST请求的请求体可以不为空
username = admin&password=admin

## 响应报文
### 响应行
http协议版本 响应状态码（eg. 404/200） 响应状态字符串（eg. OK）
### 响应头
Cotent-type: ***
Content-length: ***
COntent-encoding: ***
### 响应空行
### 响应体
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>