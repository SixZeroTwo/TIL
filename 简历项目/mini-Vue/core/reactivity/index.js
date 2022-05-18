//响应式库，基于观察者模式，这里的观察者effect是一个函数，effctWatch的使用方法是在effct中写入依赖的规则，依赖收集时会进行调用
//依赖
let currentEffect;
class Dep {
  constructor(val) {
    //存放对应的依赖（观察者），用set不重复
    this.effcts = new Set()
    this.val = val
  }
  get value() {
    //当调用dep.val时，触发依赖的收集过程
    dep.depend()
    return this.val
  }
  set value(newVal) {
    //当val变化，触发对应观察者的依赖
    this.val = newVal
    this.notice()
  }
  //1. 收集依赖
  depend() {
    if (currentEffect) {
      this.effcts.add(currentEffect)
    }
  }
  //2. 触发依赖
  notice() {
    this.effcts.forEach(effect => effect())
  }
}


//effectWatch用来实现依赖收集
function effectWatch(effect) {
  //观察者通过两个函数的外层作用域的currentEffect来实现传递，收集完成后清除
  currentEffect = effect
  effect()
  currentEffect = null
}

//effectWatch的使用
const dep = new Dep(10)
let b
effectWatch(() => {
  b = dep.value + 10
  console.log(b);
})

//更新并通知触发依赖
dep.value = 20


//reactive
//dep ->只能对基础类型做响应式
//下面针对对象做响应式依赖

//vue2的做法 -- Object.defineProperties(obj,descriptors)
//缺点 -- 性能差（嵌套一个个属性劫持），并且新增和删除属性无法触发响应

//vue3的做法 -- proxy
//target -- 目标对象
//property -- 被获取的属性名
function getDep(property, depsMap) {
  let dep = depsMap.get()
  if (!dep) {
    dep = new Dep
    depsMap.set(property, dep)
  }
  return dep
}
function reactive(raw) {
  const depsMap = new Map()
  return new Proxy(raw, {
    get(target, property) {
      //每一个property都对应一个dep（被观察对象）
      //property -> dep 
      //存储在哪，通过一个二维的targetMap来存储
      //思路：targetMap存target对应的depsMap，depsMap存储了该响应式对象所有的被劫持（观察）属性，通过property来找到对应的dep
      //我的思路，利用闭包，在reactive函数中定义一个depsMap即可
      let dep = getDep(property, depsMap)
      dep.depend()
      return target[property]
      //return Reflect.get(target, property) === return target[property] ,Reflect是新增的规范，有很多标准操作，类似于Math对象
    },
    set(target, property, val) {
      //获取到dep对象，触发依赖
      let dep = getDep(property, depsMap)
      let res = Reflect.set(target, property, val)
      dep.notice()
      return res
    }
  })
}
/* 
const user = reactive({
  age: 18
})

let double
effectWatch(() => {
  console.log('reactivity!');
  double = user.age
  console.log(double);
})

user.age = 1 */

module.exports = {
  effectWatch,
  reactive
}
