<h1 align="center">svg-arc</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/svg-arc"><img src="https://img.shields.io/npm/v/svg-arc.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/svg-arc"><img src="https://img.shields.io/npm/l/svg-arc.svg?sanitize=true" alt="License"></a>
  <br>
</p>

<p align="center"><img width="400" src="https://raw.githubusercontent.com/svgcamp/svg-arc/master/images/svg-arc.png"></p>


生成扇形，环形，圆形，或弧形的 SVG 路径（`<path>` 的 `d` 属性值）。


## 安装

```
npm i --save svg-arc
```

``` js
import arc from 'svg-arc';

arc({x, y, R, r, start, end})
```

## 参数

| 参数 | 类型   | 默认值 | 描述           |
| :-------- | :----- | :------ | :-------------------- |
| x         | Number | 0       | 圆心x轴坐标           |
| y         | Number | 0       | 圆心y轴坐标           |
| R         | Number | 0       | 外半径                |
| r         | Number | 0       | 内半径                |
| start     | Number | -       | 起点角度，`0`～`360`  |
| end       | Number | -       | 终点角度， `0`～`360` |

起点和终点的角度: 12点钟方向值为 `0`，3点钟方向为 `90`，6点钟方向为`180`，9点钟方向为`270`。由于`360`是一个循环，所以， `540`、`900` 均代表6点钟方向。

## 用法示例

``` js
import arc from 'svg-arc';

// 创建 SVG
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('viewBox', '0 0 300 300');

// 创建 path
const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('fill', '#ddd');
svg.appendChild(path);

// 设置路径
const d = arc({
  x: 150,
  y: 150,
  R: 100,
  r: 80,
  start: 100,
  end: 200,
});
path.setAttribute('d', d);

// 绘制环形时，必须设置`fill-rule`的属性值为`evenodd`，否则`fill`无法正确填充颜色。
path.setAttribute('fill-rule', 'evenodd');

```

### 绘制圆形

<p align="left"><img width="200" src="https://raw.githubusercontent.com/svgcamp/svg-arc/master/images/circle.png"></p>

```
arc({
  x: 150,
  y: 150,
  r: 100,
})
```


### 绘制环形

<p align="left"><img width="200" src="https://raw.githubusercontent.com/svgcamp/svg-arc/master/images/ring.png"></p>

```
arc({
  x: 150,
  y: 150,
  R: 100,
  r: 80,
})

path.setAttribute('fill-rule', 'evenodd');
```

绘制环形时，必须设置`fill-rule`的属性值为`evenodd`，否则`fill`无法正确填充颜色。

### 绘制扇形

<p align="left"><img width="200" src="https://raw.githubusercontent.com/svgcamp/svg-arc/master/images/sector.png"></p>


```
arc({
  x: 150,
  y: 150,
  r: 100,
  start: 100,
  end: 360,
})
```

### 绘制弧形

<p align="left"><img width="200" src="https://raw.githubusercontent.com/svgcamp/svg-arc/master/images/arc.png"></p>

```
arc({
  x: 150,
  y: 150,
  R: 100,
  r: 80,
  start: 300,
  end: 150,
})
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Z8264
