var memoria;
function boton(valor) {
    console.log(valor);
    digitosDisplay(valor);
}

function digitosDisplay(valor){
		document.getElementById("display").value += valor;
}

function clearDisplay(){
        document.getElementById("display").value = null;
}

function calcular(){
        var resul = eval(document.getElementById("display").value);
        console.log(resul);
        clearDisplay();
        document.getElementById("display").value = resul;
}


function operacion(operador){
        
        if (operador == "+"){
            memoria = document.getElementById("display").value
        } else if (operador == "="){
            //TODO: llamar a calculadora con el valor de la memoria, el display
        }

}