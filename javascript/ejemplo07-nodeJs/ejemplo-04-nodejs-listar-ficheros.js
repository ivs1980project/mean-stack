let fs = require('fs');
let path = require("path");
let directorio = process.argv[2]; //path
let extension = process.argv[3]; //extension
if (process.argv.length < 4) {
    console.log("USAGE: ");
    return;
}


fs.readdir(directorio, operarConResultados);

function operarConResultados(error, ficheros) {
    if (error) {
        console.error("Error al ejecutar la funcion asincrona \n", error);
    } else {
        //console.log(ficheros.toString().split(','));
        ficheros.forEach(operacionPorFichero);

    }
    function operacionPorFichero(fichero) {
        if (path.extname(fichero) == extension) {
            console.log(fichero);
        }
    }

    //El codigo de arriba es igual que el siguiente pero con =>
    fs.readdir(directorio, (error, ficheros) => {
        if (error) {
            console.error("Error al ejecutar la funcion asincrona \n", error);
        } else {
            //console.log(ficheros.toString().split(','));
            ficheros.forEach((fichero) => {
                if (path.extname(fichero) == extension) {
                    console.log(fichero);
                }
            });

        }
    });
}