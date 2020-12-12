
const server = require('../src/server/server');
const events = require('../src/events/events');
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  events.register(socket);
  socket.on('disconnect', () => {});
});

server.listen(80);

console.log('Server running at http://127.0.0.1:80/');

