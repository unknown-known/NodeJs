'use strict';
const fs = require('fs');
const net = require('net');
const fileName = process.argv[2];

if (!fileName) {
    throw Error(`ERROR: No fileName specified!`);
}

net.createServer(connection => {
    // 建立连接
    console.log(`Subscriber connected`);
    // 输出转成字符串后JSON数据
    connection.write(JSON.stringify({ type: "Watching", file: fileName }) + "\n");
    
    // 监听文件变化
    const watcher = fs.watch(fileName, () => {
    // 输出转成字符串后JSON数据
        connection.write(JSON.stringify({ type: 'changed', timestamp: Date.now() }) + '\n')
    });
    connection.on('close', () => {
        // 关闭连接
        console.log(`Subscriber disconnected`)
        watcher.close()
    });
}).listen(60300, () => console.log(`Listening for subscribers...`));
// 监听60300端口