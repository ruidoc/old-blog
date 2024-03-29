# 基础算法

前端基础算法，先从排序算法开始。
### 1. 冒泡排序

冒泡排序的思想是：两两对比，从后往前排。

1. 相邻的两个数，两两对比。
2. 当第一个数大于/小于第二个数时，这两个数位置互换。
3. 第一轮比完，最后一个数是最大/最小的。所以只需要比 n-1 轮
4. 第一轮比 n-1 次，且比完最后一个数固定无须再比，所以后面每轮比的次数再比上一轮少 1，直到循环结束。

总结：比较 n-1 轮，每轮比 n-1-i 次。所以需要两层循环：第一层表示轮，第二层表示次。

```js
function bubbleSort(arr) {
  var len = arr.length - 1;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

### 2. 选择排序

选择排序的思想是：一一比较，找最大/最小，从前往后排。

1. 第 1 位数和剩余数一一比较，取出最大/最小的数。
2. 第 1 位数与最值位置互换，一轮比完，第 1 位已排序。
3. 从第 2 位数开始，继续与剩余未排序数比较，直到比较完成

```js
function selectSort(arr) {
  var len = arr.length;
  var minIndex;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
```

### 3. 插入排序

插入排序和你打扑克边摸牌边排序的规则一毛一样。

核心思想：将当前值取出来，依次和已排序的值（当前值前面的所有值），从后往前比大小。

如果不满足条件，被比较的值后移一位；如果满足，则插入当前值。

方法一：

```js
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
```

方法二：

这个也算，区别是每次都要换位置

```js
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j + 1] < arr[j]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
}
```

### 4. 归并排序

使用分治法。

```js
function mergeSort(arr) {
    if(arr.length<2) {
        return arr;
    }
    let middle = Math.floor(arr/2)
    let left = middle.slice(0, middle)
    let right = middle.slice(middle)
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}
```

### 5. 快速排序

也使用分治法。

