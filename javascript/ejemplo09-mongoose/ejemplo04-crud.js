//Ejemplo de clase de negocio
//carga del module
var mongoose = require('mongoose');

// conectar a la base de datos
mongoose.connect("mongodb://localhost/test");

// Importamos el modelo definido en el fichero ejemplo04model
var Libro = require("./ejemplo04-model");


function getLibros(limit, skip) {
    //return Libro.find(); //Paginamos (sino viene limit 0, skip 20)
}

function getLibroById(_id) {
    Libro.findById(_id, (error, libro) => {
        //TODO:
    })
}

function saveLibro(libro) {
    libro.save((error) => {
        //TODO:
    })
}

function updateLibro(libro) {
    //TODO
    getLibroById(libro._id);
    libro.categoria = "terror";
    saveLibro(libro);
}

function deleteLibro(_id) {
    Libro.findByIdAndRemove(_id, () => {

    })
}