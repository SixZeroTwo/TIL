//fs.writeFile()
const fs = require('fs')
fs.writeFile('hello_easy.txt', 'easy writing!', function (err) {
    if (err) {
        console.log(err);
    }
})
//追加写入
fs.writeFile('hello_easy.txt', '这是追加的内容', { flag: 'a' }, function (err) {
    if (err) {
        console.log(err);
    }
})