console.log("Hola mundo!");
//Variables globales
variablesGlobales = "variableGlobal";
var variablesGlobalesConVar = "Sigue siendo variable global";
function mi_funcion_con_var(){
    var otraVariable = "Esto es una variable local";
    
    for (var i = 0; i<10;i++){
        console.log("valor de "+ i);

    }
    console.log("valor de al final "+ i);
}

function mi_funcion_con_let(){
    let otraVariable = "Esto es una variable local";
    //Con let la variable i solo existe dentro del for
    for (let i = 0; i<10;i++){
        console.log("valor de "+ i);

    }
    //TODO: Buscar una funcion para evaluar si la variable existe
    //console.log("valor de al final "+ i);
}
// mi_funcion_con_var();
// mi_funcion_con_let();

console.log("Tipos de datos");
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena = "Siete";
//Referencia a objeto tipo Date
var fechaDeEstreno = new Date();
var otraFecha = fechaDeEstreno;
otraFecha.setFullYear(1989);
console.log("Resultado typeOf numerico " +typeof tipoDeDatoNumerico);
console.log("Resultado typeOf cadena " +typeof tipoDeDatoCadena);
console.log("Resultado typeOf Fecha " +typeof fechaDeEstreno);
console.log("Referencias");
cambiarYear(otraFecha);
function cambiarYear(fecha){
    //TODO:Asegurar que lo que llega es de tipo fecha
    if (!(fecha instanceof Date)){
        console.log ("El tipo de fecha no es correcto. Tipo recibido " +typeof fecha)
    } else {
    fecha.setFullYear(2011);
    console.log("Fecha de la funcion " +fecha.getFullYear());
    }

}
console.log("Fecha de funcion " + otraFecha.getFullYear());
console.log("Fecha de estreno " + fechaDeEstreno.getFullYear());

pruebaNumerico();
function pruebaNumerico(){
    let numero = new Number(3.4358462);
    console.log ("Valor almacenado " +numero.valueOf());
    console.log ("Valor almacenado " +numero.toFixed());
    console.log ("Valor almacenado " +numero.toFixed(4));
}

function pruebaDeArgumentos(argumento1){
    console.log ( "Numero de parametros enviado " +arguments.length);
    console.log ( "Numero de parametros esperado " +arguments.callee.length);
    for (let i=0; i <arguments.length;i++){
        console.log ("Posicion : " + i +" valor: " + arguments[i]);
    } 
}
pruebaDeArgumentos();
pruebaDeArgumentos("uno");
pruebaDeArgumentos(123);
pruebaDeArgumentos("uno","dos", 76,new Date(), new Number (76));


function addParametersAB(){
    let resultado;
    if (arguments.length<2){
        console.log("Numero de argumentos insuficiente");
        console.log("Numero de parametros recibido " +arguments.length);
        console.log("Numero de parametros esperado " +arguments.callee.length);
    } else {
        resultado = 0;
        for (let i=0; i <arguments.length;i++){
            if (isNaN(arguments[i])){
                console.log ("El dato " +arguments[i]+ " no se puede sumar: "+ typeof arguments[i]);
            } else {
                resultado = resultado + arguments[i];
            }
        } 
    }
    return resultado;
}

console.log ("Resultado: " +addParametersAB(1));
console.log ("Resultado: " +addParametersAB(1,2));
console.log ("Resultado: " +addParametersAB());
console.log ("Resultado: " +addParametersAB(1,2,3));
console.log ("Resultado: " +addParametersAB(1,2,3,"cadena",5,1,"nueve"));
console.log ("Resultado: " +addParametersAB("cadena","nueve"));
console.log("Adios mundo cruel!");