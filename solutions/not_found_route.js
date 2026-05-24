const http = require('http');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  // Для прикладу залишимо один валідний маршрут
  if (req.method === 'GET' && url.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome');
  } else {
    // ОБРОБКА 404
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    
    // Повертаємо помилку у форматі JSON
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(port, () => console.log(`Сервер запущено на порту ${port}`));