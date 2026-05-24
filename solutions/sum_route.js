const http = require('http');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (req.method === 'GET' && url.pathname === '/sum') {
    // Отримуємо сирі значення параметрів
    const aRaw = url.searchParams.get('a');
    const bRaw = url.searchParams.get('b');

    // Перетворюємо їх на числа
    const a = Number(aRaw);
    const b = Number(bRaw);

    // Перевіряємо, чи параметри існують, чи не є порожніми та чи є справжніми числами
    if (aRaw === null || bRaw === null || aRaw === '' || bRaw === '' || Number.isNaN(a) || Number.isNaN(b)) {
      // Помилка
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: "Invalid numbers" }));
    } else {
      // Успіх
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ sum: a + b }));
    }
  } else {
    // Запобіжник для інших маршрутів
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, () => console.log(`Сервер запущено на порту ${port}`));