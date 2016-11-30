'use strict'
//carga del module
var mongoose = require('mongoose');
// conectar a la base de datos
mongoose.connect("mongodb://localhost/test");
//definicion del eschema
var Schema = mongoose.Schema;
var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    sipnosis: String,
    fecha: Date,
    categoria: String,
    meta: {
        ejemplares: Number,
        reservas: Number,
        ultima_reserva: Date
    }
});

//LibroSchema.method --> Revisar este metodo, por ejemplo buscar un libro por categoría

//metodo estatico
LibroSchema.statics.encuentraPorTitulo = (titulo, cb) => {
    console.log("Buscando por titulo " + titulo);
    return Libro.find({ titulo: new RegExp(titulo, "i") }, cb);
}

LibroSchema.methods.findBySimilar = (cb) => {
    console.log("Buscando por categoria " + this.categoria);
    return Libro.find({ categoria: this.categoria }, cb);
}

var Libro = mongoose.model("Libro", LibroSchema);
/*Libro.encuentraPorTitulo("e").limit().skip(); para paginar*/
Libro.encuentraPorTitulo("rings", (error, data) => {
    if (error) {
        log.error("Error al procesar la busqueda");

    } else {
        console.log("Libros para consulta find ({titulo:/lord/i})")
        data.forEach((libro) => {
            console.log("Libros encontrados " + libro.titulo + " " + libro._id);
        })
    }
});

Libro.findById("583d50826ae9780fd03edd55", (error, libro) => {
    if (error) {
        console.error("Error de id!");
    } else {
        console.log("Libro con id: " + libro._id + "\n\t" + libro.titulo);
        libro.findBySimilar((error, data) => {
            console.log(data);
        });
    }
})

/*  A nivel de instancia ()
    init
    validate
    save
    remove
    Revisar method

    A nivel de clase
    count
    find
    findOne
    findOneAndUpdate
    findOneAndDelete
*/