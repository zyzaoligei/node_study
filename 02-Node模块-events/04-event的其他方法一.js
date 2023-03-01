const EventEmitter = require('events')

const ee = new EventEmitter()

ee.on('why', () => {})
ee.on('why', () => {})
ee.on('why', () => {})

ee.on('kobe', () => {})
ee.on('kobe', () => {})

// 1.获取所有监听事件的名称
console.log(ee.eventNames())

// 2.获取最大监听的个数
console.log(ee.getMaxListeners())

// 3.获取某一个事件名称对应的监听器个数
console.log(ee.listenerCount('why'))

// 4.获取某一个事件名称对应的监听器函数(数组)
console.log(ee.listeners('why'))