# 大O表示法

对算法效率的粗略度量

## 表示形式

![image-20210727203703273](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210727203703273.png)

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210727203937982.png" alt="image-20210727203937982" style="zoom: 67%;" />

# 排序算法

![image-20210727204834037](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210727204834037.png)

## 冒泡排序

## 选择排序

![image-20210728113630211](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210728113630211.png)

## 插入排序

![image-20210728114546763](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210728114546763.png)

![image-20210728115449096](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210728115449096.png)

## 希尔排序

希尔(Shell)排序的思想：按照间隔对数组进行分组，对每组进行插入排序，之后缩小间隔直至间隔为1，此时相当于对数组进行选择排序。

![image-20210728162744714](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210728162744714.png)

![image-20210728162631346](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210728162631346.png)

## 快速排序

快速排序是冒泡排序的升级版，用到了分而治之的思想，选取一个枢纽，将数组中的数按照和枢纽的大小关系一分为二，递归处理，直到排完所有的数。

![image-20210728193317872](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210728193317872.png)

![image-20210728193158557](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210728193158557.png)
