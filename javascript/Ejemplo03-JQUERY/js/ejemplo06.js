$(document).ready(initializeEvents);
function initializeEvents(){
    /*$("a").mouseover(inMouseEvent);
    $("a").mouseout(outMouseEvent);*/
    //Hover hace lo mismo que las dos líneas de código comentadas
    $("a").hover(inMouseEvent,outMouseEvent);
}
function inMouseEvent(){
    $(this).css("background-color", "#ff0")
}
function outMouseEvent(){
    $(this).css("background-color", "#fff")
}