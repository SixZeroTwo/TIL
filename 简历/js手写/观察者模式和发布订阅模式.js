//观察者模式
//目标对象
class Subject {
  constructor() {
    this.observerList = []
  }

  //添加订阅
  addObserver(observer) {
    this.observerList.push(observer)
  }
  //发布通知
  notify(args) {
    this.observerList.forEach(obs => obs.update(args))
  }
}

//观察者
class Observer {
  constructor(name, fn) {
    this.name = name
    this.update = fn
  }
}


//发布订阅模式：只需要中介者，不需要关心发布者订阅者的关系
class EventEmitter {
  constructor() {
    this.events = {}
  }

  //on方法，接受参数：事件类型以及回调函数
  on(type, fn) {
    //查看该事件类型是否在events内注册过
    if (this.events[type]) {
      this.events[type].push(fn)
    }
    else {
      this.events[type] = [fn]
    }
  }

  //off方法，取消某事件下的回调函数注册
  off(type, fn) {
    if (this.events[type]) {
      this.events[type].filter(item => item !== fn)
    }
  }
  //once方法，用once方法注册的事件回调只会被执行一次
  once(type, fn) {
    function help() {
      fn()
      this.off(type, fn)
    }
    this.on(type, help)
  }
  //emit方法，传递参数
  emit(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach(fn => fn.apply(this, args))
    }
    else throw ('该事件没注册或已经取消注册')
  }
}

//观察对象