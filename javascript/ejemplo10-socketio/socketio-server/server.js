var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//io.origins('*:*');
//Sólo dejamos conectar a los clientes con las siguientes direcciones
//io.origins('http://localhost:4200 http://localhost:3200');
io.origins('http://localhost:4200');
//Por defecto tenemos ya namespace
//http://localhost:3000/socket.io/?
io.on('connection', (socket) => {
    console.log("Cliente conectado!!!");
    io.on('mando-un-mensaje', (mensaje) => {
        console.log("Mensaje recibido: " + mensaje);
        socket.emit('mando-un-mensaje', mensaje); //yo. Es un eco
        //io.emit son todos los clientes conectados a este servidor
        io.emit('mando-un-mensaje', mensaje);
        //Se envía a todos menos el que lo envía
        socket.broadcast.emit('mando-un-mensaje', mensaje);
    });
});
io.on('disconnect', (socket) => {
    console.log("Cliente desconectado!!!");
});