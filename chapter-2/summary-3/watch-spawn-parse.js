'use strict';
// 子进程和文件模块
const fs = require('fs');
const spawn = require('child_process').spawn;

// 获取命令行参数
const fileName = process.argv[2];
if (!fileName) {
    throw Error('A file to watch must be specified!');
}

// 监听文件变化
fs.watch(fileName, () => {
    // 执行命令
    const ls = spawn('ls', ['-l', '-h', fileName]);
    let output = '';

    // 监听数据的输出，并合并到output里
    ls.stdout.on('data', chunk => output += chunk);

    // 监听关闭时间，进行输出
    ls.on('close', () => {
        const parts = output.split(/\s+/);
        console.log([parts[0], parts[4], parts[8]]);
    })
})
console.log(`Now watching ${fileName} for watching....`);