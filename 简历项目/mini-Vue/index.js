const { effectWatch, reactive } = require('./core/reactivity/index.js')
//import { effectWatch, reactive } from './core/reactivity/index.js'
//a发生变更，b响应式发生变更
//reactive声明响应式对象
let a = reactive({
  value: 1
})
let b
//effect内的函数在响应式对象值变换后调用（初始化调用一次）
effectWatch(() => {
  b = a.value + 10
  console.log(b);
})

a.value = 30