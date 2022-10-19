"use strict";
class Triangulo extends FiguraGeometrica {
    constructor(lado1, lado2, lado3, altura, base) {
        super();
        this._lado1 = lado1;
        this._lado2 = lado2;
        this._lado3 = lado3;
        this._altura = altura;
        this._base = base;
    }
    calcularArea() {
        return (this._base * this._altura) / 2;
    }
    ;
    calcularPerimetro() {
        return this._lado1 + this._lado2 + this._lado3;
    }
    ;
}
