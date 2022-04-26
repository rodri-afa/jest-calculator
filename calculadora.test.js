// /**
//  * @jest-environment jsdom
//  */
const calculadora = require("./calculadora");

describe("Comprobaciones iniciales", () => {
    test("everything ok", () => {
        expect(true).toBe(true);
    });
    test("calculadora importada ok", () => {
        expect(calculadora.test()).toBe("ok");
    });
});
describe("Operaciones", () => {
    test("suma", () => {
        expect(calculadora.suma(1, 2)).toBe(3);
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
});
describe("Obtener primer número", () => {
    beforeEach(() => {
        calculadora.num1 = null;
        calculadora.num2 = null;
        calculadora.op = null;
        calculadora.resultado = null;
        // const element = document.createElement("div");
        // element.setAttribute("id", "primerNum");
        // calculadora.pintarPantalla("primerNum", 0);
    });
    // test("use jsdom in this test file", () => {
    //     const element = document.createElement("primerNum");
    //     expect(element).not.toBeNull();
    // });
    // jest.spyOn(calculadora, "pintarPantalla").mockImplementation(() => {

    // });

    test("el primer número se obtiene antes de pulsar la operacion", () => {
        calculadora.clickNumero(5);
        // expect(calculadora.pintarPantalla).toHaveBeenCalledWith("primerNum", "5");
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
    test.todo("el segundo número se obtiene después de pulsar la operacion");
    test.todo("el segundo número puede tener múltiples dígitos");
    test.todo("el segundo número puede tener decimales");
});
