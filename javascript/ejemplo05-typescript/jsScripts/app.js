var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var variable = 207512136476216;
//variable ='texto';
var otraVariable = 7;
otraVariable = 14;
otraVariable = 14.5;
var miCumple = { day: 2, month: 5, year: 1980 };
console.log(miCumple.year);
setnewYear(miCumple);
console.log(miCumple.year);
function setnewYear(birthdate) {
    birthdate.year++;
}
//Definiciones de clases
var Persona = (function () {
    function Persona(nombre, apellido1, apellido2) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    Persona.prototype.stringify = function () {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    };
    return Persona;
}());
//Sin metodo constructor
//let ivan = new Persona();
//ivan.nombre = "Ivan";
//ivan.apellido1 = "Valero";
//ivan.apellido2 = "Sanchez"
var ivan = new Persona("Ivan", "Valero", "Sanchez");
var manuel = new Persona("Manuel", "Valero", "Sanchez");
var javier = new Persona("Javier", "Valero", "Sanchez");
console.log(ivan.stringify());
console.log(manuel.stringify());
console.log(javier.stringify());
// Herencia
var Ciudadano = (function (_super) {
    __extends(Ciudadano, _super);
    function Ciudadano(nombre, apellido1, apellido2, identidad) {
        _super.call(this, nombre, apellido1, apellido2);
        this.identidad = identidad;
    }
    Ciudadano.prototype.stringify = function () {
        return _super.prototype.stringify.call(this) + " " + this.identidad;
    };
    ;
    return Ciudadano;
}(Persona));
var citizen = new Ciudadano("Ivan", "Valero", "Sanchez", "12");
console.log(citizen.stringify());
//# sourceMappingURL=app.js.map