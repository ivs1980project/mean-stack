$(document).ready(initializeEvents);
function initializeEvents(){
    $("#peticion_ajax").click(peticionAjaxGenerica);
}
function peticionAjaxGenerica(){
    $.ajax({
        //Puede ser una cadena, un array o un object de JS
        //data: {id:"5",nombre:"Botas2",raza:"mono"},
        data:{},
        //Tipo de peticion 
        type:"GET",
        // tipo de dato esperado
        dataType:"json",
        //URL de comunicacion con el servicio
        url: "http://localhost:3000/animales/"
    }).done(peticionCompletada).fail(peticionFallida);
}
function peticionCompletada(data, status){
    alert("Peticion completada con status : " +status + ": "+data);
    console.log(data);
    //$("#contenido_de_ajax").html(data);
}
function peticionFallida(jqXHR, status, error){
    alert("Error al procesar la peticion");
    console.log("Status " +status);
    console.log("Error! " +error);
}