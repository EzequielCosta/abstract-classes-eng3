"use strict";
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this._lado = lado;
    }
    calcularArea() {
        return this._lado * this._lado;
    }
    ;
    calcularPerimetro() {
        return this._lado * 4;
    }
    ;
}
