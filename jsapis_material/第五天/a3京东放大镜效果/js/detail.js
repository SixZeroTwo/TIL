window.addEventListener('load', function () {
    //获取元素
    var previewImg = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var img = previewImg.firstElementChild;
    console.log(img);
    console.log(previewImg, mask);
    //监听事件
    previewImg.addEventListener('mouseover', function (e) {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    previewImg.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    });
    previewImg.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskx = x - mask.offsetWidth / 2;
        var masky = y - mask.offsetHeight / 2;
        if (x <= mask.offsetWidth / 2) {
            maskx = 0;
        }
        else if (x >= this.offsetWidth - mask.offsetWidth / 2) {
            maskx = this.offsetWidth - mask.offsetWidth;
        }
        if (y <= mask.offsetHeight / 2) {
            masky = 0;
        }
        else if (y >= this.offsetHeight - mask.offsetHeight / 2) {
            masky = this.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskx + 'px';
        mask.style.top = masky + 'px';
        //放大层的效果
        var bigx = -2 * maskx;
        var bigy = -2 * masky;
        var bigImg = document.querySelector('.bigImg');
        bigImg.style.left = bigx + 'px';
        bigImg.style.top = bigy + 'px';
    });
})

