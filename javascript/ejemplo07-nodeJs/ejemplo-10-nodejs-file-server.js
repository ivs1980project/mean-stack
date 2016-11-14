let http = require('http');
let fs = require('fs');

var server = http.createServer(enviarImagen);

function enviarImagen(request, response) {
    response.writeHead(200, { 'content-type': 'image/png' });
    fs.createReadStream("imagen.png").pipe(response);
}

server.listen(8888);
console.log("Servidor iniciado en el puerto 8888")