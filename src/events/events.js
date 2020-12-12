const request = require('../api/request');
const calculator = require('../calculator/calculator');

const onGet = (socket) => {
  socket.on('get', () => {
    request.get().then((task) => {
      console.log(`Task: ${JSON.stringify(task)}`);
      socket.emit('getCallback', task);
    });
  });
};

const onCalculator = (socket) => {
  socket.on('calculate', (task) => {
    let result = {
      id: task.id,
      result: calculator[task.operation](task.left, task.right),
    };
    socket.emit('calculateCallback', result);
  });
};

const onSubmit = (socket) => {
  socket.on('submit', (result) => {
    request.post(result).then((data) => {
      console.info(
        `onSubmit Request: ${JSON.stringify(result)} \n Result: ${JSON.stringify(data)}`
      );
      socket.emit('postCallback', data);
    });
  });
};

 

const register = (socket) => {
  onGet(socket);
  onCalculator(socket);
  onSubmit(socket);
};

module.exports = { register };
