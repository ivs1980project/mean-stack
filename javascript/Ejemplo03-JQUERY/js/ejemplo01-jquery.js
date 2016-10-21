$(document).ready(inicializaEventosConJQuery);
function presionarBotonConJQuery(e){
    alert("Boton JQuery pulsado");
}
function inicializaEventosConJQuery(){
    $("#botonjquery1").click(presionarBotonConJQuery);
    $("#botonjquery2").click(presionarBotonConJQuery);
}
