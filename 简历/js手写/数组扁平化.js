function flatten(arr) {
  return arr.reduce((prev, cur) => {
    //判断当前是否为数组
    if (Array.isArray(cur)) {
      prev = prev.concat(flatten(cur))
    }
    else {
      prev.push(cur)
    }
    return prev
  }, [])
}

console.log(flatten([1, [2, 3], [4, [5, 6]]]))