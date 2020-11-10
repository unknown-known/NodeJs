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
    connection.write(`Now watching "${fileName}" for changes...\n`);
    
    // 监听文件变化
    const watcher = fs.watch(fileName, () => {
        connection.write(`File changed:"${new Date()}\n"`)
    });

    connection.on('close', () => {
        // 关闭连接
        console.log(`Subscriber disconnected`);
        watcher.close();
    });
}).listen('/tmp/watcher.sock', () => console.log(`Listening for subscribers...`));
// 监听Unix端口