$(document).ready(initializeEvents);
function initializeEvents(){
    $("#peticion_ajaxPut").click(peticionAjaxPut);
    $("#peticion_ajaxGet").click(peticionAjaxGet);
    $("#peticion_ajaxDelete").click(peticionAjaxDelete);
}
function peticionAjaxPut(){
    $.ajax({
        //Puede ser una cadena, un array o un object de JS
        data: {titulo:"Los Goonies",director:"mono",sinopsis:"Slot ha encontrado nuevos amigos", fecha:"01/04/1990"},
        //data:{},
        //Tipo de peticion 
        type:"PUT",
        // tipo de dato esperado
        dataType:"json",
        //URL de comunicacion con el servicio
        url: "http://localhost:3000/peliculas/"
    }).done(peticionCompletada).fail(peticionFallida);
}

function peticionAjaxGet(){
    $.ajax({
        //Puede ser una cadena, un array o un object de JS
        data: {},
        //data:{},
        //Tipo de peticion 
        type:"GET",
        // tipo de dato esperado
        dataType:"json",
        //URL de comunicacion con el servicio
        url: "http://localhost:3000/peliculas/"
    }).done(peticionCompletada).fail(peticionFallida);
}

function peticionAjaxDelete(){
    $.ajax({
        //Puede ser una cadena, un array o un object de JS
        data: {},
        //data:{},
        //Tipo de peticion 
        type:"DELETE",
        // tipo de dato esperado
        dataType:"json",
        //URL de comunicacion con el servicio
        url: "http://localhost:3000/peliculas/"
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