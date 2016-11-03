$(document).ready(initializeEvents);
function initializeEvents(){
    //Cargar la tabla con los datos del json
    peticionAjaxGet();
    $("#peticion_ajaxPost").click(peticionAjaxPost);
    $("#peticion_ajaxGet").click(peticionAjaxGet);
    $("#peticion_ajaxDelete").click(peticionAjaxDelete);
}
function peticionAjaxPut(){

    $.ajax({
        //Puede ser una cadena, un array o un object de JS
        //data: {titulo:"Los Goonies",director:"mono",sinopsis:"Slot ha encontrado nuevos amigos", fecha:"01/04/1990"},
        //data:{},
        data: {},
        //Tipo de peticion 
        type:"PUT",
        // tipo de dato esperado
        dataType:"json",
        //URL de comunicacion con el servicio
        url: "http://localhost:3000/peliculas/"
    }).done(peticionCompletada).fail(peticionFallida);
}

function peticionAjaxPost(){

    $.ajax({
        //Puede ser una cadena, un array o un object de JS
        //data: {titulo:"Los Goonies",director:"mono",sinopsis:"Slot ha encontrado nuevos amigos", fecha:"01/04/1990"},
        //data:{},
        data: createFilmData(),
        //Tipo de peticion 
        type:"POST",
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
    jsonToRowData(data);

}

function peticionFallida(jqXHR, status, error){
    alert("Error al procesar la peticion");
    console.log("Status " +status);
    console.log("Error! " +error);
}

function createFilmData(){
    let titulo = $('input')[0].form.titulo.value;
    let director = $('input')[1].form.director.value;
    let sinopsis = $('input')[2].form.sinopsis.value;
    let fecha = $('input')[3].form.fecha.value;
      
    return ("titulo: "/"" +titulo + ",director:"+director+",sinopsis:"+sinopsis+",fecha:"+fecha);

    //return JSON.stringify(film,null,4);
    //return("{Titulo:" + "\"" +titulo +"\""+",director:"+"\""+director+"\""+",sinopsis:"+"\""+sinopsis+"\""+",fecha:"+"\""+fecha+"\"}");
}

function jsonToRowData(data){
    for (let iterator=0;iterator<data.length;iterator++){
        console.log(data[iterator].id);
        let titulo = data[iterator].titulo;
        let director =data[iterator].director;
        let sinopsis = data[iterator].sinopsis;
        let fecha = data[iterator].fecha;
        fillRow(titulo,director,sinopsis,fecha);
    }
}

function fillRow(titulo,director,sinopsis,fecha){
    let newRow= '<tr class="film-row"><td class="td-checked"><input type="checkbox" class="selected"/></td><td class="td-titulo">'+titulo+'</td><td class="td-director">'+director+'</td><td class="td-sinopsis">'+sinopsis+'</td><td class="td-fecha">'+fecha+'</td></tr>';
    $("#table-body").append(newRow);
}