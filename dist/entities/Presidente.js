"use strict";
class Presidente extends Funcionario {
    constructor(salario) {
        super(salario);
    }
    getBonificacao() {
        return this._salario + 1000;
    }
}
