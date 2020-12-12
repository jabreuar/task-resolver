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
    document.getElementById("btnStart").disabled = true;

    socket.emit('get');
}

function getCallback(task) {
    let text = "Get task result: " + JSON.stringify(task, null, 4);
    
    var elemento = document.getElementById("lblGetTask");
    elemento.innerText = text;

    socket.emit('calculate', task);
}

function postRequest(result) {
    let text = "Task resolver result: " + JSON.stringify(result, null, 4);
    let elemento = document.getElementById("lblResultTask");
    elemento.innerText = text;

    socket.emit('submit', result)
}

function postCallback(result) {
    let text = "Submit task result: " + JSON.stringify(result, null, 4);
    
    var elemento = document.getElementById("lblSubmitTask");
    elemento.innerText = text;

    document.getElementById("btnStart").disabled = false;
}