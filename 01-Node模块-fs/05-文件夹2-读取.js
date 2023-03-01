const fs = require('fs')

// 创建文件夹directory
// fs.mkdir('./why', (err) => {
//   console.log(err)
// })

// 2.读取文件夹，获取文件夹的信息
// fs.readdir('./why', { withFileTypes: true }, (err, files) => {
//   files.forEach(item => {
//     if (item.isDirectory()) {
//       console.log('item是一个文件夹：', item.name)
//       fs.readdir(`./why/${item.name}`, { withFileTypes: true }, (err, files) => {
//         console.log(files)
//       })
//     } else {
//       console.log('item是一个文件：', item.name)
//     }
//   })
// })

// 3.递归函数读取文件夹中·的所有文件
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    files.forEach(item => {
      if (item.isDirectory()) {
        readDirectory(`${path}/${item.name}`)
      } else {
        console.log('获取到文件：', item.name)
      }
    })
  })
}
readDirectory('./why')
