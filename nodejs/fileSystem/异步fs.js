const fs = require('fs')
fs.open('TEXT.txt', 'w', function (err, fd) {
    if (err) {
        console.log(err);
    }
    else {
        //console.log(fd);
        fs.write(fd, 'FUCK Async!', function (err) {
            if (err) {
                console.log(err);
            }
            else {
                fs.close(fd, function (err) {
                    if (err) {
                        console.log(err);
                    }
                })
            }
        })
    }
})
