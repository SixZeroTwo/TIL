# 红黑树

平衡树的一种，解决二叉搜索树插入之后的不平衡导致的性能下降

##  五大规则

![image-20210721095622945](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210721095622945.png)

### 关键特性

![image-20210721095654425](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210721095654425.png)

以路径中含3个(n=3))黑色节点为例，最短可能路径和最长可能路径所含节点数分别为：min=n; max=2n-1

![红黑树最短最长路径](C:\Users\Administrator\Desktop\自学前端\算法与数据结构\js-data-structures-and-algorithms-master\assets\doc\红黑树最短最长路径.png)

## 红黑树的变换

插入一个新节点时，有可能会让树变得不平衡，可以通过三种方式的变换来保持红黑树的平衡：

**变色、左旋转、右旋转**

### 变色

![image-20210721100512126](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210721100512126.png)

### 左旋转

![image-20210721102540235](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210721102540235.png)

## 插入操作

首先定义几个需要的节点：N（待插入节点）、P（N的父亲节点）、G（N的祖父节点）、U（P的兄弟节点）

### 情况一

待插入的节点是**根节点**，这种情况直接将N变黑，root指向N即可

### 情况二

N的父节点P是黑色（**父黑**），这种情况不需要变换

### 情况三

**父红叔红祖黑** => 父叔祖变色

![image-20210721144618052](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210721144618052.png)

### 情况四

**父红叔黑祖黑，N是左儿子** => 以祖为中心右旋转，对父和祖进行变色

![image-20210721144825290](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210721144825290.png)

### 情况五

**父红叔黑祖黑，N是右儿子**，情况五进行到b步操作的时候，可以把P和其左子数部分看成待插入的节点，此时符合情况四的父红叔黑祖黑，以G为中心做右旋转加变色

![image-20210721145158527](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210721145158527.png)

### 我的分析

对于情况一和情况二没什么好说的，比较简单，记住就行

主要是情况三到四的理解，父叔祖三个节点加上红黑树的性质以及排除情况2（父亲节点是黑色），决定了这三个节点的颜色排列：

![父叔黑的颜色排列](C:\Users\Administrator\Desktop\自学前端\算法与数据结构\js-data-structures-and-algorithms-master\assets\doc\父叔黑的颜色排列.png)

情况三是**父红叔红祖黑**，直接对父叔祖变色就完事，如果祖和上级的颜色违反规则，则继续递归，如果递归到根节点将根节点变为红色，则对其进行旋转操作

情况四是我个人认为最重要的一个情况，父红叔黑祖黑且插入节点是左儿子，此时只要对祖节点进行右旋转操作和父祖变色即可，二情况五也是先对父节点进行左旋转，从而变成情况四再进行处理。

## 案例

### 案例一

插入顺序：1 2 3 4 5 6 7 8 9 10

### 案例二

插入顺序：10 9 8 7 6 5 4 3 2 1

