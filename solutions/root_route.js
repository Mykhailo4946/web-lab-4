const http = require('http');

// Отримуємо порт з першого аргументу командного рядка
const port = process.argv[2];

const server = http.createServer((req, res) => {
  // Перевіряємо метод та маршрут
  if (req.method === 'GET' && req.url === '/') {
    // Встановлюємо статус 200 (OK)
    res.statusCode = 200;
    
    // Встановлюємо заголовок Content-Type
    res.setHeader('Content-Type', 'text/plain');
    
    // Відправляємо тіло відповіді та завершуємо запит
    res.end('Welcome to Manual HTTP Router');
  } 
});

// Запускаємо сервер на вказаному порту
server.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});