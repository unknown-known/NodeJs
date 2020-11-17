'use strict';

// 导入测试工具以及要测试的模块
const assert = require('assert');
const EventEmitter = require('events').EventEmitter;
const LDJClient = require('../../summary-5/lib/ldj-client');

// 调用mocha里面的describe方法
describe('LDJClient', () => {
    let stream = null
    let client = null

    // 测试准备工作
    beforeEach(() => {
        stream = new EventEmitter()
        client = new LDJClient(stream)
    })

    // 实际测试代码
    it('should emit a message event from a single data event', done => {
        client.on('message', message => {
            assert.deepEqual(message, { foo: 'bar' })
            // 通过done函数告诉Mocha什么时候测试结束
            done()
        });
        // 手动触发stream的data事件,引起测试
        stream.emit('data', '{"foo":"bar"}\n');
    });
});