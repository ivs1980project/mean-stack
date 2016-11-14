var net = require("net");

var server = net.createServer(miSocket);

function miSocket(socket) {
    console.log(socket.remoteAddress);
    console.log(socket.remotePort);
    console.log(socket.remoteFamily);
    socket.end("Hola Caracola!!!\n");
}

server.listen(8888);
console.log("Servidor iniciado en el puerto 8888")