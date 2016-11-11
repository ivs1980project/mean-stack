let moduloDeFiltrado = require("./ejemplo-05-nodejs-listar-ficheros-module.js");
let directorio = process.argv[2]; //path
let extension = process.argv[3]; //extension

function queHacerCuandoDevuelvaLosFicheros(error, arrayDeFicheros) {
    if (error) {
        console.error("Error al listar \n", error);
    } else {
        arrayDeFicheros.forEach((fichero) => {
            console.log(fichero);
        })
    }
}
moduloDeFiltrado(directorio, extension, queHacerCuandoDevuelvaLosFicheros);