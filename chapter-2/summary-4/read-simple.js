'use strict';
const fs = require('fs');

// 读文件
fs.readFile('../target.txt', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data.toString())
});

// // 同步版本
// fs.readFileSync('../target.txt');
// process.stdout.write(data.toString());