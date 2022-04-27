num1 = null;
num2 = null;
op = null;
resultado = null;

function prueba() {
    return "ok";
}
function suma(n1, n2) {
    return n1 + n2;
}
function resta(n1, n2) {
    return n1 - n2;
}
function multiplicacion(n1, n2) {
    return n1 * n2;
}
function division(n1, n2) {
    return n1 / n2;
}
function clickNumero(newNumber) {
    if (this.resultado != null) {
        borrarPantalla();
    }

    if (this.op === null) {
        this.num1 = añadirCifra(this.num1, newNumber);
        pintarPantalla("primerNum", this.num1);
    } else {
        this.num2 = añadirCifra(this.num2, newNumber);
        pintarPantalla("segundoNum", this.num2);
    }
}

function añadirCifra(num, cifra) {
    return num * 10 + cifra;
}

function obtenerOperacion(o) {
    this.op = o;
    pintarPantalla("operacion", o);
}

function operar() {
    switch (op) {
        case "+":
            resultado = suma(num1, num2);
            break;
        case "-":
            resultado = resta(num1, num2);
            break;
        case "x":
            resultado = multiplicacion(num1, num2);
            break;
        case "/":
            resultado = division(num1, num2);
            break;
        default:
            resultado = "Operación no válida";
            break;
    }
    this.num1 = null;
    this.num2 = null;
    this.op = null;
    pintarPantalla("resultado", resultado);
}
function pintarPantalla(elemento, valor) {
    document.getElementById(elemento).innerHTML = valor;
}
function borrarPantalla() {
    this.num1 = null;
    this.num2 = null;
    this.op = null;
    this.resultado = null;
    pintarPantalla("primerNum", "");
    pintarPantalla("segundoNum", "");
    pintarPantalla("operacion", "");
    pintarPantalla("resultado", "");
}

const calculadora = {
    num1: null,
    num2: null,
    op: null,
    resultado: null,
    prueba,
    suma,
    resta,
    multiplicacion,
    division,
    clickNumero,
    obtenerOperacion,
    operar,
    añadirCifra,
};

module.exports = calculadora;
