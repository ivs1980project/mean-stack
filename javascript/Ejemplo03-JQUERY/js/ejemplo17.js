$(document).ready(initializeEvents);
function initializeEvents(){
    $("#peticion_ajax").click(dameFichero);
}
function dameFichero(){
    $("#contenido_de_ajax").load("ejemplo-17-fichero_alojado_en_servidor.txt");
}
