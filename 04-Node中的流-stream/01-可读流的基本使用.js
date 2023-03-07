const fs = require('fs')

// 1.直接使用fs.readFile 的方式是一次性读取
// 缺点一：没有办法精准控制从哪里读取，读取什么位置
// 缺点二：不能读取到某一位置的，不能暂停读取和恢复读取
// 缺点三：文件非常大的时候，不能多次读取
// fs.readFile('./aaa.txt',{ encoding: 'utf8'}, (err, data) => {
//   console.log(data)
// })

// 2.通过流读取文件
// 2.1 创建一个可读流
// start: 从什么位置开始读取
// end: 读取到什么位置结束(包括end位置字节)
const readStream = fs.createReadStream('./aaa.txt', {
  start: 8,
  end: 22,
  highWaterMark: 3 // 每次读取三个字节，读取到end那个字符
})

readStream.on('data', (data) => {
  console.log(data.toString())
  readStream.pause() // 暂停读取
  
  setTimeout(() => {
    readStream.resume() // 恢复读取
  }, 2000)
})

