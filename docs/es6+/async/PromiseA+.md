## 概述

Promise/A+ 规范，就是写 promise 的一个标准。
光看标准一脸懵，从实践出发理解规范更合适

### executor

结合上篇，promise应该有以下两点：

* 可以接收一个 executor 作为入参
* 具备 pending、resolved 和 rejected 这三种状态

先从这最基本的轮廓入手：

```javascript
function CutePromise(executor) {
    // value 记录异步任务成功的执行结果
    this.value = null;
    // reason 记录异步任务失败的原因
    this.reason = null;
    // status 记录当前状态，初始化是 pending
    this.status = 'pending';
     
    // 把 this 存下来，后面会用到
    var self = this;
  
    // 定义 resolve 函数
    function resolve(value) {
        // 异步任务成功，把结果赋值给 value
        self.value = value;
        // 当前状态切换为 resolved
        self.status = 'resolved'; 
    }
    
    // 定义 reject 函数
    function reject(reason) {
        // 异步任务失败，把结果赋值给 value
        self.reason = reason; 
        // 当前状态切换为 rejected
        self.status = 'rejected';
    }
  
    // 把 resolve 和 reject 能力赋予执行器
    executor(resolve, reject);
}
```

### then 方法的行为

每一个 promise 实例一定有个 then 方法，所以 then 方法应该装在 Promise 构造函数的原型对象上

```javascript
// then 方法接收两个函数作为入参（可选）
CutePromise.prototype.then = function(onResolved, onRejected) {
  
    // 注意，onResolved 和 onRejected必须是函数；如果不是，我们此处用一个透传来兜底
    if (typeof onResolved !== 'function') {
        onResolved = function(x) {return x};
    }
    if (typeof onRejected !== 'function') {
        onRejected = function(e) {throw e};
    }

    // 依然是保存 this
    var self = this;
    // 判断是否是 resolved 状态
    if (self.status === 'resolved') {
        // 如果是 执行对应的处理方法
        onResolved(self.value);
    } else if (self.status === 'rejected') {
        // 若是 rejected 状态，则执行 rejected 对应方法
        onRejected(self.reason);
    }
};
```