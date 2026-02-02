const http = require('http');

http.createServer((req, res) => {
  res.end('Hello World!');
}).listen(3000, '0.0.0.0');

console.log('App running on port 3000');
