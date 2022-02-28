var sqrt = function (x) {
  if (x <= 1) {
    return x
  }
  else {
    var left = 0
    var right = x
    while (left <= right) {
      var mid = parseInt((right + left) / 2)
      var new_mid = parseInt(mid + 1)
      if (mid * mid < x && new_mid * new_mid > x)
        return mid
      if (mid * mid < x)
        left = mid + 1
      else
        right = mid - 1
    }
  }
}

console.log(sqrt(4));