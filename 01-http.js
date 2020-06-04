const http = require('http');

const server = http.createServer();

server.on('request', () => {
    console.log('服务器收到请求了');
})

server.listen(3000, () => {
    console.log('服务器已经启动，请通过 http://127.0.0.1:3000/ 进行访问');
})