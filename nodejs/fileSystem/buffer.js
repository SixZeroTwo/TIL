let a = 'hello world'
//Buffer.from()
let buf1 = Buffer.from(a)
console.log(buf1)
console.log(buf1.toString())
//Buffer.alloc()
let buf2 = Buffer.alloc(10)
buf2[0] = 255
buf2[1] = 0x35
buf2[2] = 257//存入0x1,有溢出,取低八位
buf2[10] = 0xff
//Buffer的大小一旦确定，就不能更改，它的内存是连续的
buf2.forEach(value => console.log(value.toString(16)))
//allocUnsafe()
let buf3 = Buffer.allocUnsafe(10)//只分配空间，不清空数据