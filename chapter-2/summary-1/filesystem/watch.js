'use strict';
// 导包
const fs = require("fs");

// 监听文件变化
fs.watch('target.txt', () => console.log('File changed!'));
console.log("Now watching target.txt for changes····");