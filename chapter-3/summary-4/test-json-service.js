'use strict';
// 本来是测试数据分段发送的BUG的但是我没有报错？？？
const server = require('net').createServer(connection => {
    console.log('Subscriber connected.')

    const firstChunk = '{"type":"changed","timesta';
    const secondChunk = 'mp":1605002179348}\n';

    connection.write(firstChunk)

    const timer = setTimeout(() => {
        connection.write(secondChunk)
        connection.end()
    }, 1000)

    connection.on('end', () => {
        clearTimeout(timer)
        console.log('Subscriber disconnect.')
    })
});
server.listen(60301,()=>console.log('Test server listening for subscriber.'))