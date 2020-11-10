'use strict';
// 导包
const fs = require("fs");

// 获取命令行传入的文件名参数   node watch-argv.js target.txt
const fileName = process.argv[2];
if (!fileName) {
    throw Error('A file to watch must be specified!');
}
// 监听文件
fs.watch(fileName, () => console.log(`File ${fileName} changed!`));
console.log(`Now watching ${fileName} for changes...`);