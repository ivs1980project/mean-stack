var operador;
var newOperation = true;


//Podemos crear un enum con los operadores
calculadora = new Calculadora();

function addValue(value) {
    //Al añadir un nuevo valor desde display comprobamos si el flag new operation está a true.
    //Se pone a true al arrancar o cada vez que se pulsa un boton de operacion: +,-,*,/
    if (newOperation == true){
            //Ponemos el display a 0
            clearDisplay();
            newOperation = false;
    }
    addToDisplay(value);
}

function addToDisplay(valor){
        //TODO: Controlamos el valor a añadir en el display. Que no se metan caracteres ni números no válidos
        //TODO: Hay que modificar este código y hacerlo con patrones
        let position;
        switch (valor){
            case ("0"):
            //Si es cero al principio y ya hay un cero no lo añadimos ¿Sacamos mensaje de error?
                position = document.getElementById("display").value.indexOf("0")
		        if (position==0 && document.getElementById("display").value.indexOf('.')!=1){
                    alert("No se pueden añadir ceros a la izquierda a no ser que sean números decimales")
                } else {
                    document.getElementById("display").value += valor;
                }
                break;
            case ("."):
                position = document.getElementById("display").value.indexOf(".");
                //Comprobar que sólo hay un separador decimal
                if (position !=-1){
                    alert("No se puede incluir más de un separador decimal");
                } else {
                    document.getElementById("display").value += valor;
                    console.log("Se ha incluido un .");
                }
                break;
            default:
                document.getElementById("display").value = trimLeftZeros(document.getElementById("display").value);
                document.getElementById("display").value += valor;
                break;
        }

}
function trimLeftZeros(cadena){

    if (cadena.startsWith("0")){
        if (!(cadena.charAt(1)==".")){
            cadena = cadena.replace(/^0+/, '');
        }
    }
    return cadena;
}

function clearDisplay(){
        document.getElementById("display").value = 0;
}

function operacion(operation){
        switch (operation){
            case "+":{
                calculadora.memoria = document.getElementById("display").value;
                operador = "+";
                newOperation = true;
//              clearDisplay();
                break;
            } case "-":{
                calculadora.memoria = document.getElementById("display").value;
                operador = "-";
                newOperation = true;
//                clearDisplay();
                break;
            } case "*":{
                calculadora.memoria = document.getElementById("display").value;
                operador = "*";
                newOperation = true;
//                clearDisplay();
                break;
            } case "/":{
                calculadora.memoria = document.getElementById("display").value;
                operador = "/";
                newOperation = true;
//                clearDisplay();
                break;
            } case "=":{
                if (calculadora.memoria == 0){
                    alert("Se necesitan al menos dos operandos para realizar la operacion ");
                    break;
                }
                //TODO: llamar a calculadora con el valor de la memoria, el display
                let resul = calculadora.operate(calculadora.memoria,document.getElementById("display").value,operador);
//                calculadora.memoria = document.getElementById("display").value;                
                document.getElementById("display").value = resul;
                break;
            }
        }
}
