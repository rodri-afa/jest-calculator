/**
 * @jest-environment jsdom
 */

const calculadora = require("./calculadora");

calculadora.clickNumero = jest.fn((newNumber) => {
    if (calculadora.op === null) {
        calculadora.num1 = calculadora.añadirCifra(calculadora.num1, newNumber);
    } else {
        calculadora.num2 = calculadora.añadirCifra(calculadora.num2, newNumber);
    }
});

calculadora.obtenerOperacion = jest.fn((o) => {
    calculadora.op = o;
});

beforeEach(() => {
    calculadora.num1 = null;
    calculadora.num2 = null;
    calculadora.op = null;
    calculadora.resultado = null;
});

describe("Comprobaciones iniciales", () => {
    test("everything ok", () => {
        expect(true).toBe(true);
    });
    test("calculadora importada ok", () => {
        expect(calculadora.prueba()).toBe("ok");
    });
});

describe("Operaciones", () => {
    test("suma", () => {
        expect(calculadora.suma(1, 2)).toBe(3);
        expect(calculadora.suma(1, -2)).toBe(-1);
        expect(calculadora.suma(1.5, 2)).toBe(3.5);
    });
    test("resta", () => {
        expect(calculadora.resta(1, 2)).toBe(-1);
    });
    test("multiplicacion", () => {
        expect(calculadora.multiplicacion(1, 2)).toBe(2);
    });
    test("division", () => {
        expect(calculadora.division(1, 2)).toBe(0.5);
    });
    test.todo("division entre 0");
});
describe("Obtener primer número", () => {
    test("el primer número se obtiene antes de pulsar la operacion", () => {
        calculadora.clickNumero(5);
        expect(calculadora.num1).toBe(5);
    });
    test("el primer número puede tener múltiples dígitos", () => {
        calculadora.clickNumero(5);
        calculadora.clickNumero(1);
        expect(calculadora.num1).toBe(51);
    });
    test.todo("el primer número puede tener decimales");
});
describe("Obtener segundo número", () => {
    test("el segundo número se obtiene después de pulsar la operacion", () => {
        calculadora.clickNumero(5);
        calculadora.clickNumero(1);
        calculadora.obtenerOperacion("+");
        calculadora.clickNumero(2);
        expect(calculadora.num2).toBe(2);
    });
    test("el segundo número puede tener múltiples dígitos", () => {
        calculadora.clickNumero(5);
        calculadora.clickNumero(1);
        calculadora.obtenerOperacion("+");
        calculadora.clickNumero(2);
        calculadora.clickNumero(3);
        expect(calculadora.num1).toBe(51);
        expect(calculadora.num2).toBe(23);
    });
    test.todo("el segundo número puede tener decimales");
});
