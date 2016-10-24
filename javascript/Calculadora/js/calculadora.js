var memoria;

function Calculadora(){
    this.memoria=0;
}
function sumar(operando1,operando2){
    return parseFloat(operando1)+parseFloat(operando2);
}

function restar(operando1,operando2){
    return parseFloat(operando1)-parseFloat(operando2);
}

function multiplicar(operando1,operando2){
    return parseFloat(operando1)*parseFloat(operando2);
}

function dividir(operando1,operando2){
    return parseFloat(operando1)/parseFloat(operando2);
}

function operate (operando1,operando2,operacion){
    switch (operacion){
            case "+":{
                return parseFloat(memoria)+parseFloat(operando2);
//                return parseFloat(operando1)+parseFloat(operando2);
            } case "-":{
                return parseFloat(operando1)-parseFloat(operando2);
            } case "*":{
                return parseFloat(operando1)*parseFloat(operando2);
            } case "/":{
                return parseFloat(operando1)/parseFloat(operando2);
            }
    }

}
