function dateFormat(str, fmt) {
  let date = new Date(str)
  let ret;
  const opt = {
    "Y": date.getFullYear().toString(),        // 年
    "m": (date.getMonth() + 1).toString(),     // 月
    "d": date.getDate().toString(),            // 日
    "H": date.getHours().toString(),           // 时
    "i": date.getMinutes().toString(),         // 分
    "s": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      if (ret[1] !== 'Y') {
        fmt = fmt.replace(ret[1], (opt[k].length == 2) ? (opt[k]) : ('0' + opt[k].padStart(ret[1].length, "0")))

      }
      else {
        fmt = fmt.replace(ret[1], opt[k])
      }

    };
  };
  return fmt;
}

console.log(dateFormat('2020-02-26 08:00:00', 'Y/m'))