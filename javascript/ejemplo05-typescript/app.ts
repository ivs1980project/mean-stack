var variable = 207512136476216;
//variable ='texto';

var otraVariable :number = 7;
otraVariable =14;
otraVariable = 14.5;

//Tipos
interface Tiempo {
    day :number;
    month:number;
    year:number;
}

var miCumple :Tiempo = {day:2,month:5,year:1980};
console.log(miCumple.year);
setnewYear(miCumple);
console.log(miCumple.year);

function setnewYear(birthdate :Tiempo):void{
    birthdate.year++;
}

//Definiciones de clases

class Persona {
    //Definicion de atributos
    nombre: string;
    apellido1: string;
    apellido2: string;

    constructor(nombre: string, apellido1: string, apellido2: string){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    stringify():string{
        return this.nombre+" "+this.apellido1+" "+this.apellido2 ;
    }
}

//Sin metodo constructor
//let ivan = new Persona();
//ivan.nombre = "Ivan";
//ivan.apellido1 = "Valero";
//ivan.apellido2 = "Sanchez"

let ivan = new Persona("Ivan", "Valero","Sanchez");
let manuel = new Persona("Manuel", "Valero","Sanchez");
let javier = new Persona("Javier", "Valero","Sanchez");

console.log(ivan.stringify());
console.log(manuel.stringify());
console.log(javier.stringify());

// Herencia
class Ciudadano extends Persona {
    identidad :string;

    constructor(nombre: string, apellido1: string, apellido2: string, identidad: string){
        super(nombre,apellido1,apellido2);
        this.identidad = identidad;
    }
    stringify():string{
        return super.stringify() + " " + this.identidad;
    };
}

var citizen = new Ciudadano("Ivan", "Valero","Sanchez","12");
console.log(citizen.stringify());