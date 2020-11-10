1. 启动服务端程序
```
node net-watching.js ../target.txt
```

2. 监听端口
```
nc 127.0.0.1 60300
```


1. Unix Sock通信
```
node net-watching-unix.js ../target.txt
```

2. 监听Sock程序
```
nc -U /tmp/watcher.sock
```