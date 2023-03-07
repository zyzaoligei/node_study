const fs = require('fs')

// 这是一次性写入的：会有很多弊端
// fs.writeFile('./ccc.txt', 'hello world', {
//   encoding: 'utf-8',
//   flag: 'a+'
// }, (err) => {
//   console.log('err', err)
// })

// 2.创建一个写入流
const writeStream = fs.createWriteStream('./ccc.txt', {
  flags: 'a'
})
writeStream.write(';zyz')
writeStream.write(';zq')
writeStream.write(';jzz')

writeStream.on('open', (fd) => {
  console.log('文件被打开了~', fd)
})

writeStream.on('finish', () => {
  console.log('写入完成')
})

writeStream.on('close', () => {
  console.log('文件被关闭~')
})

// 3.写入完成时，需要手动调用close方法
// writeStream.close() // finish\close才会执行

// 4.end方法
// 操作一：将最后的内容写入到文件中，并且关闭文件
// 操作二：关闭文件
writeStream.end('哈哈哈哈')