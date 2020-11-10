'use strict';

const net = require('net');
// 建立连接
const client = net.connect({ port: 60300 });

// 监听是否获取数据
client.on('data', data => {
    // 将服务端传来的数据JSON化
    const message = JSON.parse(data)
    // 将数据分情况输出
    if (message.type === 'Watching') {
        console.log(`Now watching:${message.file}`)
    } else if (message.type === 'changed') {
        const date = new Date(message.timestamp)
        console.log(`File changed: ${date}`)
    } else {
        console.log(`Unrecognized message type:${message.type}`)
    }
});