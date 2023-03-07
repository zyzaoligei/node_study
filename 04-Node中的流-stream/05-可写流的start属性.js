const fs = require('fs')

const writeStream = fs.createWriteStream('./ddd.txt', {
  // mac电脑上面是没有问题的
  // flags: 'a+'
  // window上面是需要使用r+
  flags: 'r+',
  start: 5 // 在指定位置添加内容，用得比较少
})
writeStream.write('my name is why')
writeStream.close()