# 2d-array-map

> map function for 2d array

Simple thing but useful with his enhanced iteration function

## Install

```bash
npm i jeromedecoster/2d-array-map
```

## Iterator function arguments

#### fn(val, x, y, i, sum)

| Name | Value |
| :------ | :------- |
| **val** | current value |
| **x** | at position x |
| **y** | at position y |
| **i** | the index of the current value |
| **sum** | the sum of the eight neighboring cells |

## API

#### map(array, iterator)

Iterate the 2d array

```js
const map = require('2d-array-map')

var array = [
  [1,1,1,1,1,1,1,1,1],
  [1,0,0,0,1,0,0,0,1],
  [1,0,0,0,1,0,0,0,1],
  [1,0,0,1,0,0,0,0,1],
  [1,1,1,0,0,0,1,1,1],
  [1,0,0,0,0,1,0,0,1],
  [1,0,0,0,1,0,0,0,1],
  [1,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,1,1]
]

var ret = map(array, function(val, x, y, i, sum) {
  return val == 0 ? 0 : val + 1
})

/*
[
  [2,2,2,2,2,2,2,2,2],
  [2,0,0,0,2,0,0,0,2],
  [2,0,0,0,2,0,0,0,2],
  [2,0,0,2,0,0,0,0,2],
  [2,2,2,0,0,0,2,2,2],
  [2,0,0,0,0,2,0,0,2],
  [2,0,0,0,2,0,0,0,2],
  [2,0,0,0,2,0,0,0,2],
  [2,2,2,2,2,2,2,2,2]
]
*/
console.log(ret)
```

#### map.restrict(array, x, y, width, height, iterator)

Iterate only a rectangular portion of the 2d array, the rest is not modified

```js
const map = require('2d-array-map')

var array = [
  [1,1,1,1,1,1,1,1,1],
  [1,0,0,0,1,0,0,0,1],
  [1,0,0,0,1,0,0,0,1],
  [1,0,0,1,0,0,0,0,1],
  [1,1,1,0,0,0,1,1,1],
  [1,0,0,0,0,1,0,0,1],
  [1,0,0,0,1,0,0,0,1],
  [1,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,1,1]
]

var ret = map.restrict(array, 0, 1, 5, 3, function(val, x, y, i, sum) {
  return val == 0 ? 0 : val + 1
})

/*
[
  [1,1,1,1,1,1,1,1,1],
  [2,0,0,0,2,0,0,0,1],
  [2,0,0,0,2,0,0,0,1],
  [2,0,0,2,0,0,0,0,1],
  [1,1,1,0,0,0,1,1,1],
  [1,0,0,0,0,1,0,0,1],
  [1,0,0,0,1,0,0,0,1],
  [1,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,1,1]
]
*/
console.log(ret)
```

## License

MIT
