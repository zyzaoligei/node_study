const fs = require('fs')

// 1.同步函数
// const res1 = fs.readFileSync('./aaa.txt', {
//   encoding: 'utf8'
// })
// console.log(res1)
// console.log('后续代码~')

// 2.异步函数
// fs.readFile('./aaa.txt', {
//   encoding: 'utf8'
// }, (err, data) => {
//   if (err) {
//     console.log('读取文件错误', err)
//     return
//   }
//   console.log('读取文件结果~', data)
// })
// console.log('后续代码~')

// 3.异步读取：Promise
fs.promises.readFile('./aaa.txt', { // 调用此方法会返回一个promise对象
  encoding: 'utf-8' 
}).then(res => {
  console.log('获取得到结果：', res)
}).catch(err => {
  console.log('发生了错误', err)
})
