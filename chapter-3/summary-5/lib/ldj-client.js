'use strict';

const EventEmitter = require('events').EventEmitter;

// 类:处理因为网络问题导致的错位(将数据进行缓存,分割,再进行处理)
class LDJClient extends EventEmitter{
    // 构造函数
    // stream是可以接收data事件的对象,类似Socket对象
    constructor(stream) {
        // super调用父类EventEmitter
        super();
        // 分割数据
        let buffer = '';
        stream.on('data', data => {
            buffer += data;
            let boundary = buffer.indexOf('\n');
            while (boundary!==-1) {
                const input = buffer.substring(0, boundary);
                buffer = buffer.substring(boundary + 1);
                this.emit('message', JSON.parse(input));
                boundary = buffer.indexOf('\n');
            }
        })
    }
    // 添加静态方法,方便使用
    static connect (stream) {
        return new LDJClient(stream);
    }
}

// 导出模块
module.exports = LDJClient;