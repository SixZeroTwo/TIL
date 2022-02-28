
window.addEventListener('load', function () {
    //  获取元素
    //左右箭头
    var arrow_l = document.querySelector('.arrow-l')
    var arrow_r = document.querySelector('.arrow-r')
    var circle = document.querySelector('.circle')
    //图片
    var imgs = document.querySelectorAll('.focus ul li')
    var focus = document.querySelector('.focus')
    var focusUl = focus.children[2]
    //全局变量index
    var index = 0
    //向html里添加小圆点
    for (let i = 0; i < imgs.length; i++) {

        let li = document.createElement('li')
        li.setAttribute('index', i)

        circle.appendChild(li)
    }
    //小圆点
    var dots = circle.children
    console.log(dots, focus)
    //小圆点的点击事件
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].setAttribute('class', '')
            }
            this.setAttribute('class', 'current')
            let newIndex = this.getAttribute('index')
            index = newIndex
            //focusUl.style.left = -newIndex * focus.offsetWidth + 'px'
            animate(focusUl, -newIndex * focus.offsetWidth);
        });
    }
    //自动播放计时器

    focus.timer = setInterval(() => {
        index++
        animate(focusUl, -(index) * focus.offsetWidth)
        for (let j = 0; j < dots.length; j++) {
            dots[j].setAttribute('class', '')
        }
        dots[index].setAttribute('class', 'current')
    }, 4000)
    //focus的鼠标经过显示左右箭头功能以及暂停计时器
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
        clearInterval(focus.timer)
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'
        focus.timer = setInterval(() => {
            var index = focusUl.offsetLeft / focus.offsetWidth
            console.log(index);
            if (index != -3) {
                animate(focusUl, (index - 1) * focus.offsetWidth)
            }
            else {
                animate(focusUl, 0)
            }

        }, 4000);
    })
    //左右箭头的点击事件
    arrow_r.addEventListener('click', function () {
        if (index == 4) {
            focusUl.style.left = 0 + 'px'
            index = 0
        }
        index++
        animate(focusUl, -index * focus.offsetWidth)

    })
    arrow_l.addEventListener('click', function () {
        if (index == 0) {
            index = focusUl.length
            focusUl.style.left = -index * focus.offsetWidth + 'px'

        }
        index--
        animate(focusUl, -index * focus.offsetWidth)

    })
})
