//carga del modulo mongoose
var mongoose = require("mongoose");
//conexion a la base de datos
mongoose.connect("mongodb://localhost/test");
//genero el modelo
var Libro = mongoose.model("Libro", {
    titulo: String,
    autor: String,
    paginas: Number
});
var lotr = new Libro(
    {
        titulo: "Lord of the rings",
        autor: "JR Tolkien",
        paginas: 3500
    });
lotr.save((error) => {
    if (error) {
        console.error("Error al guardar: ", error);
    } else {
        console.log("Guardado correctamente");
    }
})