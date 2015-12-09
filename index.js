
module.exports = map
module.exports.restrict = restrict

var aref, rows, cols

function map(array, iterator) {
  aref = array
  rows = array.length
  cols = array[0].length

  var arr = []
  var row
  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      if (x == 0) {
        row = []
        arr.push(row)
      }
      row.push(iterator.call(null, array[y][x], x, y, x + cols * y, sum(x, y)))
    }
  }
  return arr
}

function restrict(array, x, y, width, height, iterator) {
  aref = array
  rows = array.length
  cols = array[0].length

  var arr = []
  var row
  for (var cy = 0; cy < rows; cy++) {
    for (var cx = 0; cx < cols; cx++) {
      if (cx == 0) {
        row = []
        arr.push(row)
      }

      if (!(cx >= x && cx < x + width && cy >= y && cy < y + height)) {
        // the cell (cx, cy) is not inside the rectangle {x, y, width, height}
        row.push(array[cy][cx])
      } else {
        row.push(iterator.call(null, array[cy][cx], cx, cy, cx + cols * cy, sum(cx, cy)))
      }
    }
  }
  return arr
}

function get(x, y) {
  return x >= 0 && x < cols && y >= 0 && y < rows
    ? aref[y][x]
    : 0
}

function sum(x, y) {
  return get(x-1, y-1) + get(x, y-1) + get(x+1, y-1) +
         get(x-1, y)                 + get(x+1, y)   +
         get(x-1, y+1) + get(x, y+1) + get(x+1, y+1)
}
