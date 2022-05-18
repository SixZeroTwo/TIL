function deepclone(targetObj, map = new Map()) {
  //判断targetObj的类型，如果是引用类型
  if (isObj(targetObj)) {
    //判断当前对象是否被clone过
    if (map.has(targetObj)) {
      return map.get(targetObj)
    }
    let newObj = targetObj instanceof Array ? [] : {}//克隆对象要考虑数组
    map.set(targetObj, newObj)//将当前对象加入被深拷贝过的map中
    for (let key of targetObj) {
      newObj[key] = deepclone(targetObj[key], map)
    }
    return newObj
  }
  //是普通值，返回即可
  else return targetObj
}
function isObj(obj) {
  return (typeof obj == 'object' && obj != null) || typeof obj == 'function'
}