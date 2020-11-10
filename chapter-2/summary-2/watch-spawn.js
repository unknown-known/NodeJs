'use strict';
// 导包 文件和进程模块
const fs = require('fs');
const spawn = require('child_process').spawn;

// 命令行参数
const fileName = process.argv[2];

if (!fileName) {
    throw Error('A file to watch must be specified!');
}

// 监听文件变化
fs.watch(fileName, () => {
    // 执行命令行的参数  ls命令 -l -h 再加文件名
    const ls = spawn('ls', ['-l', '-h', fileName])
    // 使用pipe()方法将stdout的Stream（流）输出
    ls.stdout.pipe(process.stdout)
});
console.log(`Now watching ${fileName} for watching....`);


