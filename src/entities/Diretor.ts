class Diretor extends Funcionario{

      constructor(salario:number){
            super(salario);
      }

      getBonificacao(): number {
            return 0.6 * this._salario;
      }
}