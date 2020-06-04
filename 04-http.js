const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    const url = req.url;

    if(url === '/') {
        fs.readFile('./resource/index.html', (err, data) => {
            if(err) {
                res.setHeader('Content-type', 'text/plain; charset=utf-8');
                console.log('file not found');
            } else {
                res.setHeader('Content-type', 'text/html; charset=utf-8');
                res.end(data);
            }
        })
    } else if(url === '/1') {
        fs.readFile('./resource/1.jpg', (err, data) => {
            if(err) {
                res.setHeader('Content-type', 'text/plain; charset=utf-8');
                console.log('file not found');
            } else {
                res.setHeader('Content-type', 'image/jpeg');
                res.end(data);
            }
        })
    } else {
        res.setHeader('Content-type', 'text/plain; charset=utf-8');
        res.end('404 Not Found');
    }
})

server.listen(3000, () => {
    console.log('server is running...');
})