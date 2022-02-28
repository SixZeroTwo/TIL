# axios与Axios的关系
1. Axios是构造函数，axios是一个函数
2. 语法上来说axios不是由Axios构建的实例，但是功能上来说axios具有Axios实例的功能（属性和方法）
3. axios是“Axios.prototype.request方法bind了(Axiosinstance)后”返回的函数

# axios与 axios.create返回的instance区别
1. axios多了create，CancelToken，all等方法
2. axios和instance的配置（axios.defaults+createConfig）可能不一样