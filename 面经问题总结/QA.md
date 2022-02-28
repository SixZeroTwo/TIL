# JavaScript

## [1.js的四种for循环](https://juejin.cn/post/6844903513336610823)

for最快，forEach次之，for in最慢（原因在于**`for...in`语句**以任意顺序遍历一个对象的除[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性，Array的enumerable属性含有它的索引值）

ES6新引进的for of可以循环遍历迭代器

### [2. 0.1+0.2!=0.3](https://juejin.cn/post/6940405970954616839)

# CSS

## 1.sticky定位

position:sticky是css定位新增属性；可以说是相对定位relative和固定定位fixed的结合；它主要用在对scroll事件的监听上；简单来说，在滑动过程中，某个元素距离其父元素的距离达到sticky粘性定位的要求时(比如top：100px)；position:sticky这时的效果相当于fixed定位，固定到适当位置。

## [2.BFC](https://juejin.cn/post/6950082193632788493)（块格式化上下文）

**21.8.1看了几篇文章还是觉得不太懂，感觉有点抽象，**

### 怎样触发BFC

这里简单列举几个触发`BFC`使用的`CSS`属性，更多的可以查阅[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

- ![image-20210801115603283](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210801115603283.png)

### BFC的规则

- `BFC`就是一个块级元素，块级元素会在垂直方向一个接一个的排列
- `BFC`就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
- 垂直方向的距离由margin决定， 属于同一个`BFC`的两个相邻的标签外边距会发生重叠
- 计算`BFC`的高度时，浮动元素也参与计算

### BFC的应用

- 防止margin重叠(塌陷,以最大的为准)；
- 清除内部浮动（父元素高度塌陷）；
- 防止被浮动元素覆盖

# [html，css，js加载顺序](https://www.jianshu.com/p/4fa28b30263b)

# instanceof

object **instanceof** constructor，instanceof可以检查**constructor.prototype**是否在object的**隐式原型链**上

