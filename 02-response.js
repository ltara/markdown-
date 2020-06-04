const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
    // console.log(`服务器收到请求了 ${requset}`);
    response.setHeader('Content-Type','text/plain;charset=utf-8');
    // response.setHeader('Content-Type','text/html;charset=utf-8');
    const url = request.url;
    if (url === '/') {
        response.end('index');
    } else if(url === '/login') {
        response.end('<h1>登录</h1>');
    } else if(url === '/register') {
        response.end('注册');
    } else if(url === '/haha'){
        response.end('哈哈哈哈哈哈哈哈哈');
    } else {
        response.end('404 Not Found');
    }
})

server.listen(3000, () => {
    console.log('服务器已经启动，请通过 http://127.0.0.1:3000/ 进行访问');
})