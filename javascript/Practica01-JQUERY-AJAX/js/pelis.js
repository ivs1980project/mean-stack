$(document).ready(initializeEvents);
function initializeEvents(){
    $("#text").focus(clearValue);
}

function clearValue(){
    $("#text").attr("value","");
}