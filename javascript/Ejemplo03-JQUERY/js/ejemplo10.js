$(document).ready(initializeEvents);
function initializeEvents(){
    $("#text1").focus(setFocus);
    $("#text1").blur(setBlur);
    $("#text2").focus(setFocus);
    $("#text2").blur(setBlur);
}

function setFocus(){
    $(this).css("color","#f00");
}
function setBlur(){
    $(this).css("color","#00f");
}