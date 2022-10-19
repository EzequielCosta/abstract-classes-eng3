class Gerente extends Funcionario{

      constructor(salario:number){
            super(salario);
      }

      getBonificacao(): number {
            return 0.4 * this._salario;
      }
}