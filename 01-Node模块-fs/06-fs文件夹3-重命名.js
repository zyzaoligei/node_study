const fs = require('fs')

// 1.对文件进行重命名
fs.rename('/zyz', './zq', err => {
  console.log('重命名失败：', err)
})

// fs.rename('./ccc.txt', './ddd.txt', err => {
//   console.log('重命名结果：', err)
// })