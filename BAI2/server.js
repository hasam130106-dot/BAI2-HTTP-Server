
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <html>
        <head>
            <meta charset="UTF-8">
            <title>HTTP Server đầu tiên</title>
        </head>
        <body style="text-align:center; font-family:Arial; padding:50px">
            <h1>XIN CHÀO!</h1>
            <h2>HTTP Server đầu tiên với Node.js</h2>
            <p>Chào mừng bạn đến với trang web của tôi.</p>
            <p>Sinh viên: Hà Văn Sâm </p>
            <p>Môn học: Lập trình Node.js</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
