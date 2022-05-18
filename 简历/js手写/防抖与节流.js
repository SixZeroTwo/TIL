//防抖：从事件的结束时间开始设定结束间隔时间执行目标回调函数，如果期间重新触发了回调函数，则重新计时
function debounce(fn, set) {
  let timer = null
  return function () {
    clearTimeout(timer)
    let context = this
    let event = arguments[0]
    timer = setTimeout(fn.bind(context, event), set)
  }
}
//用法
//ele.onclick = deboucne(fn,set)
/* 等价于 ele.onclick = function () {
            clearTimeout(timer)
            let context = this
            let event = arguments[0]
            timer = setTimeout(fn.bind(context, event), set)
  } */

//节流：一定时间内执行的操作只执行一次，也就是说即预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期。
function throttle(fn, set) {
  let prevTime = 0
  //使用时间戳
  return function () {
    let time = +new Date()//转换为时间戳
    let event = arguments
    if (time - prevTime > set) {
      fn.apply(this, event)
      prevTime = time
    }
  }
}

function throttle_2(fn, set) {
  let timer = null
  return function () {
    if (timer == null) {
      let context = this
      let event = arguments[0]
      timer = setTimeout(() => {
        fn.apply(context, event)
        timer = null
      }, set)
    }
  }
}