const http = require('http');

// Отримуємо порт з командного рядка
const port = process.argv[2];

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, 'http://localhost');

  // Перевіряємо метод та шлях
  if (req.method === 'GET' && parsedUrl.pathname === '/echo') {
    const msg = parsedUrl.searchParams.get('msg') || '';
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(msg);
  } else {
    // Закриваємо всі інші маршрути, щоб термінал не висів
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});