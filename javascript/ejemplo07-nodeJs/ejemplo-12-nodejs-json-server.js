let http = require('http');
let url = require('url');

var server = http.createServer(
    (request, response) => {
        var miUrl = url.parse(request.url, true);
        console.log(request.url);
        //  if ("/clientes" == miUrl.path) {
        //Expresion regular
        if (/^\/clientes\/[0-9]{3,5}$/.test(request.url)) {
            response.writeHead(200, { 'content-type': "application/json" });
            response.end(JSON.stringify({ "nombre": "Ivan" }));
        } else {
            response.writeHead(501);
            response.end();
        }
    }
);
server.listen(8888);
console.log("Servidor iniciado en el puerto 8888");