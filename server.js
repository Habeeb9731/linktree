const http = require('http');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.pdf': 'application/pdf' };

http.createServer((request, response) => {
  let requestPath = decodeURIComponent(request.url.split('?')[0]);
  if (requestPath === '/') requestPath = '/index.html';
  const filePath = path.join(root, requestPath);
  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.statusCode = 404;
      response.end('Not found');
      return;
    }
    response.setHeader('Content-Type', types[path.extname(filePath)] || 'application/octet-stream');
    response.end(content);
  });
}).listen(4173, () => console.log('Local preview: http://localhost:4173'));
