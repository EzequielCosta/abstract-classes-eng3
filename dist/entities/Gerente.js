"use strict";
class Gerente extends Funcionario {
    constructor(salario) {
        super(salario);
    }
    getBonificacao() {
        return 0.4 * this._salario;
    }
}
