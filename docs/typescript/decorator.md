# 装饰器

TS 中比较高级的部分之一，就是装饰器。

### 1. 装饰器定义

```ts
function setProp (target) {
    // ...
}
@setProp
```

### 2. 装饰器工厂

返回装饰器函数

```ts
function setProp () {
    return function (target) {
        // ...
    }
}

@setProp()
```
### 3. 装饰器组合
组合使用，依次执行

> 装饰器工厂：从上到下依次返回

> 装饰器函数：从下到上依次执行

```ts
@setName
@setAge
```

### 4. 装饰器类型

主要在类中装饰

#### 1. 类装饰器
参数为类本身

#### 2. 方法装饰器

```ts
参数一：类的原型
参数二：被装饰的方法名
参数三：属性描述符
```

#### 3. 属性装饰器
```
参数一：类的原型
参数二：被装饰的属性名
```

#### 4. 参数装饰器
```
参数一：类的原型
参数二：函数名称
参数三：参数索引
```