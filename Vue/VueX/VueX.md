# VueX

## 认识VueX

关键词：状态管理（组件间共享）、集中存储、响应式

其实状态管理就是对于多组件共用的数据进行管理，该如何做到维护这类数据的状态以达到各个组件内的同步。

例如购物车界面发生了用户信息的改变，其他子界面的用户信息也应该随之改变。而如下的单向数据流的响应式处理就无法满足要求。

<img src="https://vuex.vuejs.org/flow.png" alt="img" style="zoom: 33%;" />

VueX状态管理图例：

Actions：用来和后端接口进行交互的模块，一般进行一些异步操作

Mutations：这个模块可以将状态的更改信息给完整记录到Vue的开发工具里面

State：存放状态变量

<img src="https://vuex.vuejs.org/vuex.png" alt="vuex"  />

## Vue核心概念

### State

存放状态变量

#### State单一状态树

Singe Source of Truth，也可以翻译为单一数据源。说人话就是一个项目用一个Vuex.store

### Getter

类似于计算属性，定义在getters中的计算属性在所有组件中都能访问，getters中定义的方法默认第一个参数是state，通过这个参数可以访问到state中的变量，默认第二个参数是getters。

这里要注意的是，getters中的方法是不能通过第三个参数进行传参的，我们可以使getter的返回一个带有参数的函数来实现传参：

``

```js
getters: {
  // ...
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
// 调用
store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
```

这里能传参的原因是，getter被访问时本质上是一个属性，而不是一个方法。

### Mutation

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：

```js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})
```

你不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 `increment` 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 type 调用 **store.commit** 方法：

```js
store.commit('increment')
```

#### 提交载荷（Payload）

你可以向 `store.commit` 传入额外的参数，即 mutation 的 **载荷（payload）**：

```js
// ...
mutations: {
  increment (state, n) {
    state.count += n
  }
}
store.commit('increment', 10)
```

在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读：

```js
// ...
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
store.commit('increment', {
  amount: 10
})
```

#### 对象风格的提交方式

提交 mutation 的另一种方式是直接使用包含 `type` 属性的对象：

```js
store.commit({
  type: 'increment',
  amount: 10
})
```

当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 保持不变：

```js
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
```

#### Mutation 必须是同步函数

一条重要的原则就是要记住 **mutation 必须是同步函数**。为什么？请参考下面的例子：

```js
mutations: {
  someMutation (state) {
    api.callAsyncMethod(() => {
      state.count++
    })
  }
}
```

现在想象，我们正在 debug 一个 app 并且观察 devtool 中的 mutation 日志。每一条 mutation 被记录，devtools 都需要捕捉到前一状态和后一状态的快照。然而，在上面的例子中 mutation 中的异步函数中的回调让这不可能完成：因为当 mutation 触发的时候，回调函数还没有被调用，devtools 不知道什么时候回调函数实际上被调用——实质上任何在回调函数中进行的状态的改变都是不可追踪的。

#### 在组件中提交 Mutation

你可以在组件中使用 `this.$store.commit('xxx')` 提交 mutation，或者使用 `mapMutations` 辅助函数将组件中的 methods 映射为 `store.commit` 调用（需要在根节点注入 `store`）。

```js
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```

####  Mutation 需遵守 Vue 的**<u>响应规则</u>**

既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：

1. 最好提前在你的 store 中初始化好所有所需属性。
2. 当需要在对象上添加新属性时，你应该

- 使用 `Vue.set(obj, 'newProp', 123)`, 或者

- 以新对象替换老对象。例如，利用[对象展开运算符 (opens new window)](https://github.com/tc39/proposal-object-rest-spread)我们可以这样写：

  ```js
  state.obj = { ...state.obj, newProp: 123 }
  ```

### Action

[官方文档](https://vuex.vuejs.org/zh/guide/actions.html)

### Module

当项目变大，state里的数据越来越臃肿，我们可以使用module将其分模块，module里面可以包含VueX的所有属性。

```js
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

#### [更多细节](https://vuex.vuejs.org/zh/guide/modules.html)
