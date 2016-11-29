//carga del modulo mongoose
var mongoose = require("mongoose");
//conexion a la base de datos
mongoose.connect("mongodb://localhost/test");
//definicion del esquema
var Schema = mongoose.Schema;

var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    sinopsis: String,
    fecha: Date,
    categoria: String,
    campos_biblioteca: {
        ejemplares: Number,
        reservas: Number,
        ultimaReserva: Date
    }
});

var Libro = mongoose.model("Libro", LibroSchema);

var mil984 = new Libro(
    {
        titulo: "Rebelion en la granja",
        autor: "George Orwell",
        campos_biblioteca: { ultimaReserva: new Date() },
        paginas: 154
    });
mil984.save((error) => {
    if (error) {
        console.error("Error al guardar: ", error);
    } else {
        console.log("Salvado con id: " + mil984._id);
    }
})

//Listo:
Libro.find((error, data) => {
    console.log(data);
});
