"use strict";
class Diretor extends Funcionario {
    constructor(salario) {
        super(salario);
    }
    getBonificacao() {
        return 0.6 * this._salario;
    }
}
