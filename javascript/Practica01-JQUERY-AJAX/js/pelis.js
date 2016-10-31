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

function addEvent(){
    $("#selected").click(selectRow);
}

function selectRow(){
    let filaActual = $(this);
    filaActual.css("background-color","#ff0000");
    filaActual.addClass("selected");
}

function selectChequedRow(){

}

function modifyFilm(){


}

function clearValue(){
    $("#titulo").attr("value","");
    $("#director").attr("value","");
    $("#sinopsis").attr("value","");
    $("#fecha").attr("value","");
}

function deleteFilm(){

    //$('#table-body .film-row').css("background-color", "#ff0");
    //$('#table-body .film-row .td-checked').css("background-color", "#f00");
    var rowsToDelete = [];
      let table = $('#table-body .film-row');
      let arrayChecked = $('#table-body .film-row .td-checked .selected');
      for (let posicion= 0; posicion<arrayChecked.length; posicion++){
            console.log(table[posicion]);
            if (arrayChecked[posicion].checked){
                rowsToDelete.push(posicion);

                //Borrar la filaActual
                //marcar con un flag la fila a borrar
            }
      }
      console.log(rowsToDelete);
        //table.remove('#delete-row');
/*

    console.log(table);

    for (var i = 0, row; row = table.htmlCollection[i]; i++) {
        console.log(row);
        console.log(i);
        console.log(selected[i].checked);
        if(selected[i].checked==true) {
            alert("Checkbox is checked.");
            row.remove();
        } 
            
    }*/

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

