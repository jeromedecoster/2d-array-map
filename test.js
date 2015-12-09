const map = require('.')
const test = require('tape')

var array

function init() {
  array = [
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
}

test('map', function (t) {

  init()

  var ret = map(array, function(val, x, y, i, sum) {
    return val == 0 ? 0 : sum
  })

  var result = [
    [2,3,2,3,3,3,2,3,2],
    [3,0,0,0,4,0,0,0,3],
    [2,0,0,0,2,0,0,0,2],
    [3,0,0,2,0,0,0,0,3],
    [3,4,2,0,0,0,2,4,3],
    [3,0,0,0,0,2,0,0,3],
    [2,0,0,0,2,0,0,0,2],
    [3,0,0,0,4,0,0,0,3],
    [2,3,2,3,3,3,2,3,2]
  ]

  t.deepEqual(ret, result)
  t.end()
})

test('restrict (0, 1, 5, 3)', function (t) {

  init()

  var result = [
    [1,1,1,1,1,1,1,1,1],
    [3,0,0,0,4,0,0,0,1],
    [2,0,0,0,2,0,0,0,1],
    [3,0,0,2,0,0,0,0,1],
    [1,1,1,0,0,0,1,1,1],
    [1,0,0,0,0,1,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1]
  ]

  var count = 0
  var indices = []
  var ret = map.restrict(array, 0, 1, 5, 3, function(val, x, y, i, sum) {
    count++
    indices.push(i)
    return val == 0 ? 0 : sum
  })

  t.equal(count, 5 * 3)
  t.deepEqual(indices, [9, 10, 11, 12, 13, 18, 19, 20, 21, 22, 27, 28, 29, 30, 31])
  t.deepEqual(ret, result)
  t.end()
})

test('restrict (0, 1, 0, 3)', function (t) {

  init()

  var result = [
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

  var count = 0
  var indices = []
  var ret = map.restrict(array, 0, 1, 0, 3, function(val, x, y, i, sum) {
    count++
    indices.push(i)
    return val == 0 ? 0 : sum
  })

  t.equal(count, 0)
  t.deepEqual(indices, [])
  t.deepEqual(ret, result)
  t.end()
})

test('restrict (0, 1, 1, 1)', function (t) {

  init()

  var result = [
    [1,1,1,1,1,1,1,1,1],
    [3,0,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,1,0,0,0,0,1],
    [1,1,1,0,0,0,1,1,1],
    [1,0,0,0,0,1,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1]
  ]

  var count = 0
  var indices = []
  var ret = map.restrict(array, 0, 1, 1, 1, function(val, x, y, i, sum) {
    count++
    indices.push(i)
    return val == 0 ? 0 : sum
  })

  t.equal(count, 1)
  t.deepEqual(indices, [9])
  t.deepEqual(ret, result)
  t.end()
})
