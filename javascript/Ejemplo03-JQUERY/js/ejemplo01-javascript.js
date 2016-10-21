addEvent(window,'load',inicializarEventos,false);
function addEvent(elemento, nomevento, funcion,captura){
    if (elemento.attachEvent){
        elemento.attachEvent('on',+nomevento,funcion);
        return true;
    } else {
        if (elemento.addEventListener){
            elemento.addEventListener(nomevento,funcion,captura);
            return true;
        }
    return false;
    }
}
function inicializarEventos(){
    let botonjs1 = document.getElementById("botonjs1");
    addEvent(botonjs1,'click',presionarBotonConJavaScript,false);
}
function presionarBotonConJavaScript(e){
    alert("Boton JS pulsado");
}