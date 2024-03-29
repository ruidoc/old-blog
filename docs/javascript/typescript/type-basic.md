# 基础数据类型

TypeScript 是 JavaScript 的一个超集，主要提供了 **类型系统** 和对 **ES6 的支持**

指定数据类型的方式是 `变量: 类型`，如：

```ts
var num: number = 1;
```

### 8 个常见类型

在 JavaScript 中有 6 种原始数据类型，1 种对象类型。TypeScript 提供了基本的 8 个类型与之对应：

```ts
布尔：boolean
数值：number
字符串：string
数组：Array<type> 或 type[]
对象：object
Symbol：symbol
null：null
undefined：undefined
```

null 和 undefined 比较特殊，它们自身即是类型。

数值类型，增加了对二进制，八进制和十六进制的支持：

```ts
let num: number;
num = 123;
num = 0b1111011; //  二进制的123
num = 0o173; // 八进制的123
num = 0x7b; // 十六进制的123
```

数组类型有两种写法，更推荐第二种：

```ts
let list1: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];
```

对象类型只是用于区分基本类型，具体的对象结构要用到后面的 `interface`

### 6 个补充类型

#### 1. 元组

元组中每个成员类型，成员数量，必须一一对应

```ts
let tuple: [string, number, boolean];
```

#### 2. 枚举

枚举适用于声明一组固定值，比如固定的订单状态，HTTP 状态码，工作日是周一到周五等。

**数字枚举**

默认情况下，枚举的子项值是从 0 开始递增的数字，所以又叫数字枚举：

```ts
enum Workday {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
}
```

上面的例子等于这样：

```ts
enum Workday {
  Mon = 0,
  Tue = 1,
  Wed = 2,
  Thu = 3,
  Fri = 4,
}
```

除此之外，也可以指定一个数值，后面的值根据这个指定的值递增：

```ts
enum Status {
  Ok = 200,
  Created,
  Accepted,
  BadRequest = 400,
  Unauthorized,
}
console.log(Status.Created, Status.Accepted, Status.Unauthorized);
// 201 202 401
```

数字枚举还支持反向映射：

```ts
Status["Ok"] = 200;
Status[200] = "Ok";
```

**字符串枚举**

最常用的枚举，需要手动为每个字段赋一个字符串类型的值。

```ts
enum Message {
  Error = "Sorry, error",
  Success = "Hoho, success",
  ServerError = Error,
}
```

**异构枚举**

枚举值同时包含字符串和数字：

```ts
enum Result {
  Faild = 0,
  Success = "Success",
}
```

#### 3. any

任意类型，使用 any 相当于屏蔽了 ts 的静态类型检查，如果不是必要请不要使用 any！

#### 4. void

没有任意类型，适用于无返回值的函数
void 类型变量只能赋值 `null` 和 `undefind`

#### 5. never

```ts
不存在的类型，常用来表示异常
never 是任何类型的子类，可赋值给任何类型
```

#### 6. unknown

表示未知的类型。

类似于 any，区别是 any 类型的值，可以被随意操作，而 unknown 不行。

```ts
var obj1: any;
obj1.name = "test"; // ok

var obj2: unknown;
obj2.name = "test"; // error: Object is of type 'unknown'
```

#### 扩展类型

扩展类型有 2 个：交叉类型，联合类型

```ts
交叉类型：&，表示且
联合类型：|，表示或
```
