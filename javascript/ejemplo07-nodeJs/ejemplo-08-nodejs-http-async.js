let http = require("http");
let bl = require('bl');
var results = [];
var urls = ["http://www.google.es/", "http://www.amazon.es/"]
var count = 0;

for (let i = 0; i < urls.length; i++) {
    httpGet(i);
}

function httpGet(indice) {
    console.log("Comprobando " + urls[indice]);
    http.get(urls[indice], (response) => {
        response.pipe(
            //Comunicacion lenta, almacenamiento en buffer
            bl((error, data) => {
                if (error) {
                    console.error("Error al procesar la peticion", error);
                } else {
                    results[indice] = data.toString();
                    count++;
                    if (count === urls.length) {
                        mostrarResultados();
                    }
                }
            })
        );
    });
}

function mostrarResultados() {
    for (let i = 0; i < urls.length; i++) {
        console.log("URL: " + urls[i] +
            "\nNumero de caracteres: " + results[i].length)
    }
}

