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
var otraPersona:Persona = citizen;
console.log(otraPersona.stringify());

class SerVivo {
    static totalDeSeresVivos: number = 0;
    clasificacion: string;
    constructor (clasificacion:string){
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos +=1;
    }
    stringify():string{
        return "Clasificacion: " +this.clasificacion;
    }
}

let pez1: SerVivo = new SerVivo ("marino");
let pez2: SerVivo = new SerVivo ("marino");
let pez3: SerVivo = new SerVivo ("marino");
let tigre: SerVivo = new SerVivo ("terrestre");
let leon: SerVivo = new SerVivo ("terrestre");
console.log("Total de seres vivos: "+SerVivo.totalDeSeresVivos);

class Padre {
    public almacenPublico: number;
    protected almacenProtegido: number;
    private almacenPrivado: number;
}

let padre = new Padre();
padre.almacenPublico = 77;

class HijoDePadre extends Padre{
    constructor(almacenProtegido: number){
        super();
        this.almacenProtegido = almacenProtegido;
    }
}
var hijoDePadre1 = new HijoDePadre(55);
var hijoDePadre2 = new HijoDePadre(88);

abstract class Ser {
    static totalDeSeres: number = 0;
    protected clasificacion: string;
    constructor (clasificacion:string){
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos +=1;
    }
    stringify():string{
        return "Clasificacion: " +this.clasificacion;
    }
    abstract desplazamiento(): string;
    abstract alimentarse(): string;
    abstract valorParaOrdenar(): number;
}

class Politico extends Ser{
    constructor(){
        super("Cucaracha");
    }
    desplazamiento():string{
        return "En coche oficial"
    }
    alimentarse():string{
        return "Dame dinero en sobres"
    }
    valorParaOrdenar():number{
        return 25;
    }
}

//let ser1: Ser = new Ser();//Esto no se puede
let politico: Politico = new Politico();
console.log(politico.stringify());

class SerDos{
    private static instance: SerDos;
    static totalDeSeres: number = 0;
    protected clasificacion: string;
    private constructor (clasificacion:string){
        this.clasificacion = clasificacion;
        if (!SerDos.instance){
            SerDos.instance=this;
        }
        return SerDos.instance;
    }
 
    stringify():string{
        return "Clasificacion: " +this.clasificacion;
    }
}

let funcionLambda = function (uno,dos){
    return uno+dos;
}
let funcionLambda2 = (uno:number, dos:number) =>{
    return uno+dos;
}

console.log("Resultado de sumar 1 y 3: " + funcionLambda(1,3));
console.log("Resultado de sumar 1 y 3: " + funcionLambda2(1,3));

const PI=3.141592;
//PI = 23 Esto no Vale
var {variable1,variable2} ={variable1:"valor1", variable2:"valor2"};
console.log(variable1);
console.log(variable2);

dameLosCamposPorConsola("uno",2,"tres","cuatro",5,"seis");

function dameLosCamposPorConsola (campo1:string,campo2:number,...elRestoDeCampos):void{
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDeCampos);
    console.log("for-in");
    for (let posicion in elRestoDeCampos){
        console.log("El campo en la posicion " +posicion+ " es " +elRestoDeCampos[posicion])
    }
        console.log("for-of");
    for (let campo of elRestoDeCampos){
        console.log("El campo es " +campo);
    }
}

//Calle, Rua, Plaza, Camino, Avenida, Carretera
enum TipoDeVia{
    Calle = 2, 
    Rua, 
    Plaza, 
    Camino = 12, 
    Avenida, 
    Carretera
}

//Declararemos esta funcion anterior dentro del enum

namespace TipoDeVia{
    export function esAvenida(texto:string):TipoDeVia{
        if (texto=="Avda"){
            return TipoDeVia.Avenida;
        }
    }
}

var miTipoDeVia: TipoDeVia = TipoDeVia.Camino;
console.log("Tipo de via " +miTipoDeVia);
console.log("Tipo de via " +TipoDeVia[miTipoDeVia]);
console.log(TipoDeVia);
console.log(TipoDeVia[0]);
console.log(TipoDeVia[6]);
console.log(TipoDeVia[15]);

TipoDeVia.esAvenida("Avda");


function invertir<T> (elementos: T[]): T[]{
    let invertido:T[] =[];
    for (let posicion=0, posicionInvertido = elementos.length-1;
        posicion<elementos.length;
        posicion++, posicionInvertido--){
        invertido[posicionInvertido]=elementos[posicion];
    }
    return invertido;
}

let textosInvertidos: string [] = invertir<string>(["cliente1","cliente2"]);

let hijosDePadreInvertidos: HijoDePadre[] = invertir<HijoDePadre>([hijoDePadre1,hijoDePadre2]);

abstract class DAOGenerico<T>{
    abstract add(objeto :T);
    abstract del(objeto :T);
}

class PersonaDAO extends DAOGenerico<Persona>{
    private personas: Persona[] = [];
    add(persona: Persona){
        this.personas.push(persona);
    }
    del(persona:Persona){
        //recorrer, buscar...
    }
}

var dao: DAOGenerico<Persona> = new PersonaDAO();
dao.add(ivan);
dao.add(manuel);
dao.add(javier);