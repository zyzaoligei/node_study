const fs = require('fs')

// 打开一个文件
fs.open('./bbb.txt', (err, fd) => {
  if (err) {
    console.log('打开文件错误：', err)
  }
  
  // 1.获取文件描述符
  console.log(fd)
  
  // 2.通过文件描述符读取到文件的信息
  fs.fstat(fd, (err, stats) => {
    if (err) return
    console.log(stats)
    
    // 3.手动关闭文件
    fs.close(fd)
  })
})