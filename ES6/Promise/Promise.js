function Promise(executor) {
    this.PromiseState = 'Pending'
    this.PromiseResult = null
    this.callback = []//then方法保存的回调函数
    const _this = this
    //resolve和reject
    function resolve(data) {
        if (_this.PromiseState === 'Pending') {//状态只能改一次
            _this.PromiseState = 'fulfilled'
            _this.PromiseResult = data
            //console.log('inResolve');
            _this.callback.forEach((value) => {
                if (value.resolved) {
                    value.resolved(_this.PromiseResult)
                }
            })

        }
    }


    function reject(data) {
        if (_this.PromiseState === 'Pending') {
            _this.PromiseState = 'rejected'
            _this.PromiseResult = data
            _this.callback.forEach((value) => {
                if (value.rejected) {
                    value.rejected(_this.PromiseResult)
                }
            })
        }




    }

    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

//添加then方法

Promise.prototype.then = function (resolved, rejected) {
    const _this = this
    //then方法返回结果的规律：由then指定的回调函数的返回结果决定的
    //1.返回非Promise对象：fulfilled 2.返回Promise对象：由返回的Promise对象决定
    return new Promise((resolve, reject) => {

        if (this.PromiseState === 'fulfilled') {
            let result = resolved(this.PromiseResult)
            if (result instanceof Promise) {
                //两种写法
                //1.判断result.PromiseState
                /*  if (result.PromiseState === 'fulfilled') {
                     resolve(result.PromiseResult)//改变外层的then的返回对象状态
                 }
                 if (result.PromiseState === 'rejected') {
                     reject(result.PromiseResult)//改变外层的then的返回对象状态
                 } */
                //2.调用then(这一种更好)
                p = result.then(value => resolve(value), reason => reject(reason))
                console.log('返回的p', p);
            }
            else {
                resolve(result)
            }
        }
        else if (this.PromiseState === 'rejected') {
            let result = rejected(this.PromiseResult)
            if (result instanceof Promise) {
                result.then(value => resolve(value), reason => reject(reason))
            }
            else {
                resolve(result)
            }
        }
        //pending状态，保存回调函数
        else if (this.PromiseState === 'Pending') {

            this.callback.push({
                resolved: function () {
                    try {
                        let result = resolved(_this.PromiseResult)
                        if (result instanceof Promise) {
                            result.then(value => resolve(value), reason => reject(reason))
                        }
                        else {
                            resolve(result)
                        }
                        console.log('success', _this);
                    } catch (error) {
                        reject(error)
                    }

                }, rejected: function () {
                    try {
                        let result = rejected(_this.PromiseResult)
                        if (result instanceof Promise) {
                            result.then(value => resolve(value), reason => reject(reason))
                        }
                        else {
                            resolve(result)
                        }

                        console.log('error');
                    } catch (error) {
                        reject(error)
                    }

                }
            })
        }


    })

}

//添加catch方法
//只关心失败的情况
Promise.prototype.catch = function (rejected) {

}