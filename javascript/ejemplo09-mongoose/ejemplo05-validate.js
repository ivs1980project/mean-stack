//Ejemplo de clase de negocio
//carga del module
var mongoose = require('mongoose');

// conectar a la base de datos
mongoose.connect("mongodb://localhost/libro");

// Importamos el modelo definido en el fichero ejemplo04model
var Libro = require("./ejemplo05-model");

//miLibroDeHistoria = new Libro({ campos_biblioteca: { reservas: -7 } });
//miLibroDeHistoria = new Libro();
miLibroDeHistoria = new Libro(
    {
        titulo: "Historia de primero",
        campos_biblioteca: { reservas: 2 },
        categoria: "comedia"
        //        fecha: new Date()
    });

miLibroDeHistoria.save((error) => {
    if (error) {
        console.error("No se ha guardado");
        //De esta forma sacamos el error del campo título que hemos definido como required
        /*if (error.errors['titulo']) {
            console.error(error.errors['titulo'].message);
        }*/
        //Aqui creamos un array con la lista de campos que hemos definido como required
        lista_campos = ["titulo", "campos_biblioteca.reservas", "categoria", "fecha"];
        lista_campos.forEach((campo) => {
            if (error.errors[campo]) {
                console.error(error.errors[campo].message);
            }
        });
    } else {
        console.log("Guardado con id " + miLibroDeHistoria._id)
    }
});
