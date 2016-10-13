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
mi_funcion_con_var();
mi_funcion_con_let();
console.log("Adios mundo cruel!");