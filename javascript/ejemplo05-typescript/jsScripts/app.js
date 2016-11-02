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
var otraPersona = citizen;
console.log(otraPersona.stringify());
var SerVivo = (function () {
    function SerVivo(clasificacion) {
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos += 1;
    }
    SerVivo.prototype.stringify = function () {
        return "Clasificacion: " + this.clasificacion;
    };
    SerVivo.totalDeSeresVivos = 0;
    return SerVivo;
}());
var pez1 = new SerVivo("marino");
var pez2 = new SerVivo("marino");
var pez3 = new SerVivo("marino");
var tigre = new SerVivo("terrestre");
var leon = new SerVivo("terrestre");
console.log("Total de seres vivos: " + SerVivo.totalDeSeresVivos);
var Padre = (function () {
    function Padre() {
    }
    return Padre;
}());
var padre = new Padre();
padre.almacenPublico = 77;
var HijoDePadre = (function (_super) {
    __extends(HijoDePadre, _super);
    function HijoDePadre(almacenProtegido) {
        _super.call(this);
        this.almacenProtegido = almacenProtegido;
    }
    return HijoDePadre;
}(Padre));
var hijoDePadre1 = new HijoDePadre(55);
var hijoDePadre2 = new HijoDePadre(88);
var Ser = (function () {
    function Ser(clasificacion) {
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos += 1;
    }
    Ser.prototype.stringify = function () {
        return "Clasificacion: " + this.clasificacion;
    };
    Ser.totalDeSeres = 0;
    return Ser;
}());
var Politico = (function (_super) {
    __extends(Politico, _super);
    function Politico() {
        _super.call(this, "Cucaracha");
    }
    Politico.prototype.desplazamiento = function () {
        return "En coche oficial";
    };
    Politico.prototype.alimentarse = function () {
        return "Dame dinero en sobres";
    };
    Politico.prototype.valorParaOrdenar = function () {
        return 25;
    };
    return Politico;
}(Ser));
//let ser1: Ser = new Ser();//Esto no se puede
var politico = new Politico();
console.log(politico.stringify());
var SerDos = (function () {
    function SerDos(clasificacion) {
        this.clasificacion = clasificacion;
        if (!SerDos.instance) {
            SerDos.instance = this;
        }
        return SerDos.instance;
    }
    SerDos.prototype.stringify = function () {
        return "Clasificacion: " + this.clasificacion;
    };
    SerDos.totalDeSeres = 0;
    return SerDos;
}());
var funcionLambda = function (uno, dos) {
    return uno + dos;
};
var funcionLambda2 = function (uno, dos) {
    return uno + dos;
};
console.log("Resultado de sumar 1 y 3: " + funcionLambda(1, 3));
console.log("Resultado de sumar 1 y 3: " + funcionLambda2(1, 3));
var PI = 3.141592;
//PI = 23 Esto no Vale
var _a = { variable1: "valor1", variable2: "valor2" }, variable1 = _a.variable1, variable2 = _a.variable2;
console.log(variable1);
console.log(variable2);
dameLosCamposPorConsola("uno", 2, "tres", "cuatro", 5, "seis");
function dameLosCamposPorConsola(campo1, campo2) {
    var elRestoDeCampos = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        elRestoDeCampos[_i - 2] = arguments[_i];
    }
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDeCampos);
    console.log("for-in");
    for (var posicion in elRestoDeCampos) {
        console.log("El campo en la posicion " + posicion + " es " + elRestoDeCampos[posicion]);
    }
    console.log("for-of");
    for (var _a = 0, elRestoDeCampos_1 = elRestoDeCampos; _a < elRestoDeCampos_1.length; _a++) {
        var campo = elRestoDeCampos_1[_a];
        console.log("El campo es " + campo);
    }
}
//Calle, Rua, Plaza, Camino, Avenida, Carretera
var TipoDeVia;
(function (TipoDeVia) {
    TipoDeVia[TipoDeVia["Calle"] = 2] = "Calle";
    TipoDeVia[TipoDeVia["Rua"] = 3] = "Rua";
    TipoDeVia[TipoDeVia["Plaza"] = 4] = "Plaza";
    TipoDeVia[TipoDeVia["Camino"] = 12] = "Camino";
    TipoDeVia[TipoDeVia["Avenida"] = 13] = "Avenida";
    TipoDeVia[TipoDeVia["Carretera"] = 14] = "Carretera";
})(TipoDeVia || (TipoDeVia = {}));
//Declararemos esta funcion anterior dentro del enum
var TipoDeVia;
(function (TipoDeVia) {
    function esAvenida(texto) {
        if (texto == "Avda") {
            return TipoDeVia.Avenida;
        }
    }
    TipoDeVia.esAvenida = esAvenida;
})(TipoDeVia || (TipoDeVia = {}));
var miTipoDeVia = TipoDeVia.Camino;
console.log("Tipo de via " + miTipoDeVia);
console.log("Tipo de via " + TipoDeVia[miTipoDeVia]);
console.log(TipoDeVia);
console.log(TipoDeVia[0]);
console.log(TipoDeVia[6]);
console.log(TipoDeVia[15]);
TipoDeVia.esAvenida("Avda");
function invertir(elementos) {
    var invertido = [];
    for (var posicion = 0, posicionInvertido = elementos.length - 1; posicion < elementos.length; posicion++, posicionInvertido--) {
        invertido[posicionInvertido] = elementos[posicion];
    }
    return invertido;
}
var textosInvertidos = invertir(["cliente1", "cliente2"]);
var hijosDePadreInvertidos = invertir([hijoDePadre1, hijoDePadre2]);
var DAOGenerico = (function () {
    function DAOGenerico() {
    }
    return DAOGenerico;
}());
var PersonaDAO = (function (_super) {
    __extends(PersonaDAO, _super);
    function PersonaDAO() {
        _super.apply(this, arguments);
        this.personas = [];
    }
    PersonaDAO.prototype.add = function (persona) {
        this.personas.push(persona);
    };
    PersonaDAO.prototype.del = function (persona) {
        //recorrer, buscar...
    };
    return PersonaDAO;
}(DAOGenerico));
var dao = new PersonaDAO();
dao.add(ivan);
dao.add(manuel);
dao.add(javier);
//# sourceMappingURL=app.js.map