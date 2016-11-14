let http = require("http");
let bl = require('bl');

http.get("http://www.google.es/", (response) => {
    response.pipe(
        //Comunicacion lenta, almacenamiento en buffer
        bl((error, data) => {
            if (error) {
                console.error("Error al procesar la peticion", error);
            } else {
                data = data.toString();
                console.log("NUmero de caracteres: " + data.length);
                console.log("data:\n" + data);
            }
        })
    );
});