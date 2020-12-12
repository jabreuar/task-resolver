const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    let filePath = `${request.url}`;
   
    if (filePath === '/') {
        filePath = '/index.html';
    }

    filePath = `./ui${filePath}`;

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.end('file not found', 'utf-8');
            } else {
                response.writeHead(500);
                response.end(`An error happened: ${error.code} ..\n`);
            }
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
        }
    });
});

module.exports = server;