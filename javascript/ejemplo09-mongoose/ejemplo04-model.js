//carga del module
var mongoose = require('mongoose');
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

module.exports = mongoose.model("Libro", LibroSchema);
