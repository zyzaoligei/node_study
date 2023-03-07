const fs = require('fs')

// 1.创建一个Buffer对象
// 8个字节大小的buffer内存空间
const buf = Buffer.alloc(8)
// console.log(buf)

// 2.手动对每个字节进行访问
console.log(buf[0])
console.log(buf[1])

// 3.手动对每个字节进行操作
buf[0] = 100 // 十进制
buf[1] = 0x66 // 十六进制
console.log(buf)
console.log(buf.toString())

buf[2] = 'm'.charCodeAt()
console.log(buf)