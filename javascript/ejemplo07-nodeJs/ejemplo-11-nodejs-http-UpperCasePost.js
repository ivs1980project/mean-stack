let http = require('http');
let map = require('through2-map');

var server = http.createServer(function (request, response) {
    if (request.method !== 'POST') {
        return response.end("Mandamelo por post, anda!!!");
    } else {
        request.pipe(map(function (chunk) {
            console.log("Contenido: " + chunk.toString());
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
});
server.listen(8888);
console.log("Servidor iniciado en el puerto 8888");