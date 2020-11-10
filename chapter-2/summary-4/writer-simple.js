'use strict';
const fs = require('fs');

// 写文件 Hello World!
fs.writeFile('../target.txt', 'Hello World!', (err) => {
    if (err) {
        throw err;
    }
    console.log('File saved!');
})