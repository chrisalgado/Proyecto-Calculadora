let display = document.getElementById('mostrar-resultado');
let operando1 = '';
let operando2 = '';
let operador = '';
let allowMultipleOperators = false;
 
function agregarNumero(numero) {
    if (allowMultipleOperators) {
        operando2 += numero;
        display.value += numero;
    } else {
        display.value += numero;
    }
}

function operar(op) {
    if (!allowMultipleOperators) {
        operando1 = display.value;
        operador = op;
        display.value = '';
        allowMultipleOperators = true;
    }
}

function calcular() {
    if (operando2 !== '') {
        let resultado;

        switch (operador) {
            case '+':
                resultado = parseFloat(operando1) + parseFloat(operando2);
                break;
            case '-':
                resultado = parseFloat(operando1) - parseFloat(operando2);   

                break;
            case '*':
                resultado = parseFloat(operando1) * parseFloat(operando2);
                break;
            case '/':
                resultado = parseFloat(operando1) / parseFloat(operando2);
                break;   

            default:
                // Handle invalid operator
                resultado = "Error: Invalid operator";
        }

        display.value = resultado;
        operando1 = resultado;
        operando2 = '';
        operador = '';
        allowMultipleOperators = false;
    }
}

function borrar() {
    display.value = '';
    operando1 = '';
    operando2 = '';
    operador = '';
    allowMultipleOperators = false;
}