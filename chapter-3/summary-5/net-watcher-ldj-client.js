'use strict';

// 导入并继承ldj-client
const netClient = require('net').connect({ port: 60300 });
const ldjClient = require('./lib/ldj-client').connect(netClient);

// 对接收到的数据分类处理
ldjClient.on('message', message => {
    if (message.type==='Watching') {
        console.log(`Now watching:${message.file}`);
    } else if(message.type==='changed'){
        console.log(`File changed: ${new Date(message.timestamp)}`);
    } else {
        throw Error(`Unrecognized message type:${message.type}`);
    }
})