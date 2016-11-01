$(document).ready(initializeEvents);
function initializeEvents(){
    $("#titulo").focus(clearValue);
    $("#director").focus(clearValue);
    $("#sinopsis").focus(clearValue);
    $("#fecha").focus(clearValue);
    $("#save").click(saveFilm);
    $("#modify").click(modifyFilm);
    $("#delete").click(deleteFilm);
    $('#table-body .film-row .td-checked .selected').click(selectRow);
}


var checkedRows = [];

function addEvent(){
    $("#selected").click(selectRow);
}

function selectRow(){
    let filaActual = $(this);
    filaActual.css("background-color","#ff0000");
    filaActual.addClass("selected");
}

function selectChequedRows(){
    checkedRows = []
    let arrayChecked = $('#table-body .film-row .td-checked .selected');
    for (let posicion= 0; posicion<arrayChecked.length; posicion++){
          if ($('#table-body .film-row .td-checked')[posicion].firstChild.checked){
              //Guardamos el numero de fila a seleccionada
              checkedRows.push(posicion);
          }
  
      }
      return checkedRows;
}

function clearValue(){
    $("#titulo").attr("value","");
    $("#director").attr("value","");
    $("#sinopsis").attr("value","");
    $("#fecha").attr("value","");
}

function modifyFilm(){
    let rowsToModify = selectChequedRows();
    if (rowsToModify.length > 0){
        if (rowsToModify.length == 1){
            console.log($('#table-body .film-row')[rowsToModify[0]]);
        } else {
            alert("Por favor seleccione una sola fila")
        }
     } else {
          alert("No se ha seleccionado ninguna fila para modificar");
     }
}

function deleteFilm(){
    let rowsToDelete = selectChequedRows();
    if (rowsToDelete.length > 0){
        //Reverse del array para borrar las filas correctas en la tabla original
        rowsToDelete.reverse();
        for (let deletePosition=0; deletePosition<rowsToDelete.length; deletePosition++){
           $('#table-body .film-row')[rowsToDelete[deletePosition]].remove();
        }
     } else {
          alert("No se ha seleccionado ninguna fila para borrar");
     }
}

function saveFilm(){
    let titulo = $('input')[0].form.titulo.value;
    let director = $('input')[1].form.director.value;
    let sinopsis = $('input')[2].form.sinopsis.value;
    let fecha = $('input')[3].form.fecha.value;
    fillRow(titulo,director,sinopsis,fecha);
}

function fillRow(titulo,director,sinopsis,fecha){
    $("#selected").click(selectRow);
    let newRow= '<tr class="film-row"><td class="td-checked"><input type="checkbox" class="selected"/></td><td class="td-titulo">'+titulo+'</td><td class="td-director">'+director+'</td><td class="td-sinopsis">'+sinopsis+'</td><td class="td-fecha">'+fecha+'</td></tr>';
    $("#table-body").append(newRow);
}

