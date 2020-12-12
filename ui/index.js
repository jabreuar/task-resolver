const socket = io();

var taskObj = {};

socket.on('getCallback', function (task) {
    taskObj = task;
    getCallback(task);
});
socket.on('calculateCallback', function (result) {
    postRequest(result);
});
socket.on('postCallback', function (result) {
    postCallback(result);
});

function get() {
    socket.emit('get');
}

function getCallback(task) {
    socket.emit('calculate', task);
}

function postRequest(result) {
    socket.emit('submit', result)
}

function postCallback(result) {
    console.log(result);
}

