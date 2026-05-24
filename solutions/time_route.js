const http = require('http');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const data = { now: new Date().toISOString() };
    res.end(JSON.stringify(data));
  } else {
    // Якщо маршрут інший, повертаємо 404
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});