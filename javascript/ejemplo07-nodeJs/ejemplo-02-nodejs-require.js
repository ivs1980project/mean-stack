let fs = require('fs');
//fichero será el contenido del argumento que le pasemos
let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);
let numeroDeFilas = contenido.toString().split('\n').length;
console.log("Fichero " + contenido + "\nLineas " + numeroDeFilas);