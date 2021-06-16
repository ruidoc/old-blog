# nextTick 原理

nextTick 是 Vue 异步更新策略的核心，同时也涉及到 Event-Loop。

### 概念

假设一种情况：

```js
methods: {
    update() {
        for (let i = 0; i < 10; i++) {
            this.testNum = this.testNum + i;
        }
    },
}
```

在 Vue 视图中， testNum 会发生变化，更新视图。

不过注意：**虽然循环修改了 10 次，但视图只更新一次，即最后一次修改后的值！**

为什么呢？

这里是重点：**数据更新时，不会立即更新视图**！而是先把这个更新“存起来”，等“时机成熟”再更新。

“存起来”的地方，叫做异步更新队列。来一个新值走一次入列。过一段时间（很短），把这些改变后的新值拿出来，一次性更新视图。

所以更新视图时，数据是“一批一批的”，而不是“一个一个的”。

做异步任务派发工作的，就是 “nextTick”。

### 再来 Event-Loop

说到“异步更新队列”，我们会立刻想起事件循环中的异步队列：

**macro-task-queue** 和 **micro-task-queue**

Vue 没有自己实现和维护一套异步队列逻辑，而是依赖于浏览器暴露的 api 接口实现。

基于此，我们看看Vue如何派发队列的：

```js
if(当前环境支持 Promise){
    Promise.then 派发 timerFunc
} else if (当前环境支持 MutationObserver) {
    MutationObserver 派发 timerFunc
} else if (当前环境支持 setImmediate) {
    setImmediate 派发 timerFunc
} else {
    setTimeout 派发 timer Func
}
```

大家会发现它是优先派发 micro-task、次选 macro-task。

**为什么 Vue 优先派发的是 micro-task？**

这个问题的根源是事件循环的流程。

首先，macro-task 和 micro-task 是交替循环执行的。script 脚本执行是一个 macro-task，那么接下来执行的就是 micro-task，所以优先。

所有 micro-task 任务执行完毕，一个事件循环完成。

这里有个问题：

**如果我们在 setTimeout 里执行更新操作，是不能立即获取到更新后的dom 的！**

为什么？因为 setTimeout 派发 macro-task，会导致我们的界面更新延迟一个事件循环。

