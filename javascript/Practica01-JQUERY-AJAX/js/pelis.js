$(document).ready(initializeEvents);
function initializeEvents(){
    $("#id").focus(clearValue);
    $("#titulo").focus(clearValue);
    $("#director").focus(clearValue);
    $("#sinopsis").focus(clearValue);
    $("#fecha").focus(clearValue);
    $("#save").click(saveFilm);
    $("#modify").click(modifyFilm);
    $("#delete").click(deleteFilm);
    $("tr").click(selectRow);
}

function selectRow(){
    let filaActual = $(this);
    filaActual.css("background-color","#ff0000");
    filaActual.addClass("selected");
}


function modifyFilm(){

}

function clearValue(){
    $("#id").attr("value","");
    $("#titulo").attr("value","");
    $("#director").attr("value","");
    $("#sinopsis").attr("value","");
    $("#fecha").attr("value","");
}

function deleteFilm(){
    console.log(".selected");
    $(".selected").remove();
}

function saveFilm(){
    let id = $('input')[0].form.id.value;
    let titulo = $('input')[1].form.titulo.value;
    let director = $('input')[2].form.director.value;
    let sinopsis = $('input')[3].form.sinopsis.value;
    let fecha = $('input')[4].form.fecha.value;
    fillRow(id,titulo,director,sinopsis,fecha);
}

function fillRow(id,titulo,director,sinopsis,fecha){
    let newRow= '<tr><td>'+id+'</td><td>'+titulo+'</td><td>'+director+'</td><td>'+sinopsis+'</td><td>'+fecha+'</td></tr>';
    $("#tabla tbody").append(newRow);
}