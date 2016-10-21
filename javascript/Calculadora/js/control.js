var memoria;
var operador;
var firstTime = 0;

function addValue(value) {
    if (memoria == null){
        if (firstTime == 0){
            clearDisplay();
            firstTime = 1;
        }
    }
    addToDisplay(value);
}

function addToDisplay(valor){
		document.getElementById("display").value += valor;
}

function clearDisplay(){
        document.getElementById("display").value = null;
}

function operacion(operation){

        switch (operation){
            case "+":{
                memoria = document.getElementById("display").value;
                operador = "+";
                clearDisplay();
                break;
            } case "-":{
                memoria = document.getElementById("display").value;
                operador = "-";
                clearDisplay();
                break;
            } case "*":{
                memoria = document.getElementById("display").value;
                operador = "*";
                clearDisplay();
                break;
            } case "/":{
                memoria = document.getElementById("display").value;
                operador = "/";
                clearDisplay();
                break;
            } case "=":{
                if (memoria == null){
                    alert("Se necesitan al menos dos operandos para realizar la operacion ");
                    break;
                }
                //TODO: llamar a calculadora con el valor de la memoria, el display
                //let resul = sumar(memoria,document.getElementById("display").value);
                //document.getElementById("display").value = resul;
                //memoria = null;
                //break;
                //TODO: llamar a calculadora con el valor de la memoria, el display
                let resul = operate(memoria,document.getElementById("display").value,operador);
                document.getElementById("display").value = resul;
                memoria = null;
                break;
            }
        }
}