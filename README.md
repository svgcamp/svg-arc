<h1 align="center">svg-arc</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/svg-arc"><img src="https://img.shields.io/npm/v/svg-arc.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/svg-arc"><img src="https://img.shields.io/npm/l/svg-arc.svg?sanitize=true" alt="License"></a>
  <br>
</p>

<p align="center"><img width="400" src="https://raw.githubusercontent.com/svgcamp/svg-arc/master/images/svg-arc.png"></p>


Use SVG's `<path>` to generate circle, annulus, circular sector or annular sector, and return the `d` attribute value.

## Install

```
npm i --save svg-arc
```

``` js
import arc from 'svg-arc';

arc({x, y, R, r, start, end})
```

## Arguments

| arguments | type   | default | description           |
| :-------- | :----- | :------ | :-------------------- |
| x         | Number | 0       | The x-coordinate of the center of the circle           |
| y         | Number | 0       | The y-coordinate of the center of the circle           |
| R         | Number | 0       | Outside Radius                |
| r         | Number | 0       | Inside Radius                |
| start     | Number | -       | The starting angle, `0`～`360`  |
| end       | Number | -       | The ending angle, `0`～`360` |


## Usage

``` js
import arc from 'svg-arc';

// create SVG
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('viewBox', '0 0 300 300');

// create path
const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('fill', '#ddd');
svg.appendChild(path);

// set path
const d = arc({
  x: 150,
  y: 150,
  R: 100,
  r: 80,
  start: 100,
  end: 200,
});
path.setAttribute('d', d);

// When drawing a annulus, the attribute value of 'fill-rule' must be set to 'evenodd', otherwise the color cannot be filled correctly.
path.setAttribute('fill-rule', 'evenodd');

```

### Circle

<p align="left"><img width="200" src="https://raw.githubusercontent.com/svgcamp/svg-arc/master/images/circle.png"></p>

```
arc({
  x: 150,
  y: 150,
  r: 100,
})
```


### Annulus

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

When drawing a annulus, the attribute value of `fill-rule` must be set to `evenodd`, otherwise the color cannot be filled correctly.

### Circular Sector

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

### Annular Sector

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
