$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(deleteAll);
    $("#boton2").click(restoreAll);
    $("#boton3").click(addLastElement);
    $("#boton4").click(addFirstElement);
    $("#boton5").click(deleteLastElement);
    $("#boton6").click(deleteFirstElement);
    $("#boton7").click(deleteFirstAndSecond);
    $("#boton8").click(deletePreAndLast);
}
function deleteAll(){
    $("ul").empty();
}
function restoreAll(){
    //Lo que haya dentro de <ul> lo elimino y pone lo que se define a continuacion 
    $("ul").html("<li>Primer item</li><li>Segundo item</li><li>Tercer item</li><li>Cuarto item</li>");
}
function addLastElement(){
    $("ul").append("<li>Agrego un item al final</li>");
}
function addFirstElement(){
    $("ul").prepend("<li>Agrego un item al principio de la lista</li>");
}
function deleteLastElement(){
    let position = $("#li").length-1;
    // let liToDelete = $("ul li").eq(position);
    $("li").eq(position).remove();
    //liToDelete.remove();
}
function deleteFirstElement(){
    $("li").eq(0).remove();
}
function deleteFirstAndSecond(){
    //TODO:Comprobar la longitud de la lista antes de borrar
    $("li:lt(2)").remove();
}
function deletePreAndLast(){
    //TODO:Comprobar la longitud de la lista antes de borrar
    let position = $("li").length-3;
    let liToDelete = $("ul li:gt("+position+")");
    liToDelete.remove();
}