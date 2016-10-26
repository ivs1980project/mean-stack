$(document).ready(initializeEvents);
function initializeEvents(){
    $("#id").focus(clearValue);
    $("#titulo").focus(clearValue);
    $("#director").focus(clearValue);
    $("#sinopsis").focus(clearValue);
    $("#fecha").focus(clearValue);
    $("#save").click(saveFilm);

}

function clearValue(){
    $("#id").attr("value","");
    $("#titulo").attr("value","");
    $("#director").attr("value","");
    $("#sinopsis").attr("value","");
    $("#fecha").attr("value","");
}

function saveFilm(){
    let id = $('input')[0].form.id.value;
    let titulo = $('input')[1].form.titulo.value;
    let director = $('input')[2].form.director.value;
    let sinopsis = $('input')[3].form.id.value;
    let fecha = $('input')[4].form.titulo.value;
    fillRow(id,titulo,director,sinopsis,fecha);
}

function fillRow(id,titulo,director,sinopsis,fecha){
    $("#tabla tbody").append('<tr><td>'id'</td><td>''</td><td>''</td><td>''</td><td>''</td></tr>');
}