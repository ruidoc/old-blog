## canvas生成图片

移动端合成广告图片时，一般会用到这个技术。

### 画布

首先，创建画布：

```js
var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
```

接下来，创建图片：

```js
var bgimg= new Image();
bgimg.src='./xxx.png'; // 实际图片地址
```

这一步是重要的一步。将 canvas 宽度设置成图片的原本宽度，生成的图片不失真。

```js
canvas.width = bgimg.width; //重点
canvas.height = bgimg.height; //重点
ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布
```

设置好了之后，用 drawImage 方法开始绘制。drawImage 参数常用的 5 个：

1. 要绘制的图片
2. 距离左边间距
3. 距离顶部间距
4. 图片宽度
5. 图片高度

这里 drawImage 可以多次调用，绘制多张图片。

```js
ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
ctx.drawImage(img2, 0, 0, img2.width, img2.height);
```

最后一步，合成图片：

```js
canvas.style.width = '100%'; //css 修改画布宽度
var img_url = canvas.toDataURL('image/jpeg', 1);
var finalImg = new Image();
finalImg.src = img_url;
document.body.append(finalImg)
```
