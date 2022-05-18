//数据劫持+观察者模式
//Observer是一个类，对输入的对象的每个属性进行深度数据劫持（利用defineProperty实现），每个属性有且仅有一个观测器（_ob_属性），在每个属性的getter中进行依赖收集（deps.push），在setter中进行订阅更新（notify）