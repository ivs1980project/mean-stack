//carga del module
var mongoose = require('mongoose');
//definicion del eschema
var Schema = mongoose.Schema;
var LibroSchema = new Schema({
    titulo: {
        type: String,
        required: [true, "Titulo requerido macho!"],
        validate: {
            validator: ((valor) => {
                return /^[A-Z]/.test(valor);
            }),
            message: "No empieza por mayusculas!"
        }
    },
    autor: String,
    sipnosis: String,
    fecha: {
        type: Date,
        required: [true, "Indica la fecha"],
        index: true
    },
    categoria: {
        type: String,
        enum: ["aventuras", "terror", "comedia", "familiar"],
        required: true
    },
    campos_biblioteca: {
        ejemplares: Number,
        reservas: {
            type: Number,
            min: [1, 'Al menos una reserva, no?? tu valor {VALUE} no cumple']
        },
        ultima_reserva: Date
    }
});

LibroSchema.index({ fecha: 1, "campos_biblioteca.reservas": -1 });
module.exports = mongoose.model("Libro", LibroSchema);