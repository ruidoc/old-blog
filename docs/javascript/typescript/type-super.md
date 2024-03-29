# 类型高级操作

学了上节的数据类型基础之后，我们再来看类型的高级操作。

### 类型断言

手动设置类型，忽略 ts 类型判断

两种写法，`<type>value` 和 `value as type`，例子：

```ts
let value: string | number = 'value';
(<string>value).length
(value as number).toString()
```

## 接口（interface）

一般用于定义对象结构，包括属性类型，可选性等

> ts 的 object 类型只限于验证类型，具体 object 结构要通过接口来定义

### 基本用法

和基本类型用法一致

```ts
interface Info {
  firstName: string;
  lastName: string;
}
const getFullName = ({ firstName, lastName }: Info) => {
    return `${firstName} ${lastName}`;
}
```

注意：定义了接口之后，使用这个接口的对象，多一个和少一个属性，都是不允许的！

### 可选属性

通过`?`来设置

```ts
interface Vegetables {
  color?: string;
  type: string;
}
```

### 多余属性检查

接口中未定义的对象属性，如果传递，会报错

> 实际应用中，我们可能会允许不确定的属性传递，这个时候就需要绕开多余属性检查

绕开多余属性检查方式：

**1. 类型断言**

```ts
interface Vegetables {
  color?: string;
  type: string;
}
const getVegetables = ({ color, type }: Vegetables) => {
  return `A ${color ? color + " " : ""}${type}`;
};
getVegetables({
  type: "tomato",
  size: 12,
  price: 1.2
} as Vegetables);
```

**2. 添加索引签名**

```ts
interface Vegetables {
  color: string;
  type: string;
  [prop: string]: any;
}
```

### 只读属性

> const 设置常量只读，readonly 设置属性只读

```ts
interface Role {
  readonly 0: string;
  readonly 1: string;
}
```

### 函数类型

定义函数 **参数类型** 和 **返回值类型**

```ts
interface AddFunc {
  (num1: number, num2: number): number;
}
```

## 高阶类型

#### 1. 索引类型

比如一个数组`['2','3']`，可以定义接口为：

```ts
interface arr {
  [id: number]: string;
}
```

即同时给索引和值设置类型。

也可以给属性设置只读，使数组不可修改

```ts
interface arr {
  readonly [id: number]: string;
}
```

#### 2. 继承接口

独立写法：

```ts
interface Vegetables {
  color: string;
}
interface Tomato {
  color: string;
  radius: number;
}
interface Carrot {
  color: string;
  length: number;
}
```

继承写法：

```ts
interface Vegetables {
  color: string;
}
interface Tomato extends Vegetables {
  radius: number;
}
interface Carrot extends Vegetables {
  length: number;
}
```

## 函数类型

包括 **参数类型** 和 **返回值类型**

### 1. 基本定义

```ts
//定义类型
let add: (x: number, y: number) => number;
// 给add函数赋值
add = (arg1: number, arg2: number): number => arg1 + arg2;
add = (arg1: string, arg2: string): string => arg1 + arg2; // error
```

### 2. 接口定义

```ts
interface Add {
  (x: number, y: number): number;
}
let add: Add = (arg1: number, arg2: number): number => arg1 + arg2;
```

### 3. 类型别名定义

```ts
type Add = (x: number, y: number) => number;
let add: Add = (arg1: string, arg2: string): string => arg1 + arg2;
```

### 4. 参数

可选参数，默认参数，剩余参数

```ts
const add = (x?: number, y: number = 2, ...args: number[]) => {
  return x + y;
};
```

## 泛型

函数，接口，或类，在运行时指定类型

> 可以理解为动态类型，类型变量

### 1. 简单使用

```ts
// 定义
const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value);
};
// 调用
getArray<number>(5,8)
```

代码中的`T`是泛型变量，也可以使用多个变量，如`<T,Y>`

### 2. 泛型约束

泛型意味着任意类型。假如要使用一个length属性，泛型不知道这个属性存不存在，就会报错。

此时，可以为泛型指定必须包含的变量，这就是泛型约束。

> 方法：泛型变量 + extends

```ts
interface ValueWithLength {
  length: number;
}
const getLength = <T extends ValueWithLength>(param: T): number => {
  return param.length;
};
```

## 类（class）

与 es6 中的类有差异哦

### 1. 基础

```ts
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getPosition() {
    return `(${this.x}, ${this.y})`;
  }
}
const point = new Point(1, 2);
```

### 2. 修饰符

> public：公共的，类和实例都可以访问的

> private：私有的，只能在类本身访问

> protected：受保护的，能在类本身和子类中访问

`protected`修饰 constructor 构造函数时，该类不能实例化，只能被继承

> static：静态的，不被继承和不被实例访问

> readonly：修饰属性只读

#### 1. 参数属性

构造函数的参数前加修饰符，相当于在类中定义属性：

```ts
class B {
  constructor(public name: string) {}
}
const b = new B("bbb");
console.log(b.name); // "bbb"
```

#### 2. 可选类属性

同样是通过属性名加`?`实现

#### 3. 存取器（getter/setter）

类方法前加 get/set 关键值

#### 4. 抽象类

一般用来被其他类继承，而不是创建实例
