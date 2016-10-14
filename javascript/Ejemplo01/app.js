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
                console.log ("El dato " +arguments[i]+ " no se puede sumar. Es de tipo "+ typeof arguments[i]);
            } else {
                resultado = resultado + arguments[i];
            }
        } 
    }
    return resultado;
}

function addParametersDC(){
    if (arguments.length<2){
        console.log("Numero de argumentos insuficiente");
        console.log("Numero de parametros recibido " +arguments.length);
        console.log("Numero de parametros esperado " +arguments.callee.length);
    } else {
        let resultado = 0;
        let contador = 0;
        for (let i=0; i <arguments.length;i++){
            
            switch (arguments[i]){
            }
            if (isNaN(arguments[i])){
                console.log ("El dato " +arguments[i]+ " no se puede sumar. Es de tipo "+ typeof arguments[i]);
            } else {
                resultado = resultado + arguments[i];
            }
        }
        return resultado;
    }
    return;
}

console.log ("Resultado: " +addParametersDC(1));
console.log ("Resultado: " +addParametersDC(1,2));
console.log ("Resultado: " +addParametersDC());
console.log ("Resultado: " +addParametersDC(1,2,3));
console.log ("Resultado: " +addParametersDC(1,2,3,"cadena",5,1,new Date(),"nueve",true));
console.log ("Resultado: " +addParametersDC("cadena","nueve"));

console.log("Inicio de ejemplos JS con Arrays");
function testConArrays(){
    let mi_array = new Array();
    mi_array[0]=7; 
    mi_array[1]="prueba";
    mi_array[mi_array.length-1];
    let mi_otro_array = [];
    let otro = ["uno", 2, new Date()];
    //Arrays asociativos
    let array_asociativo = new Array();
    array_asociativo['uno'] = 1;
    console.log(array_asociativo['uno']);
    let persona = new Array();
    persona.nombre = "Ivan";
    persona.apellido1 = "Valero";
    persona.addParametersDC = addParametersDC;
    console.log("Nombre completo " + persona.nombre + " " + persona.apellido1 + " edad: "+ persona.addParametersDC(7,3));
}


testConArrays();
console.log("Adios mundo cruel!");