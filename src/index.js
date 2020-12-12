const server = require('../src/server/server');
const events = require('../src/events/events');
// eslint-disable-next-line import/order
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  events.register(socket);
  socket.on('disconnect', () => {});
});

server.listen(80);
// eslint-disable-next-line no-console
console.log('Server started running at http://127.0.0.1:80/');

