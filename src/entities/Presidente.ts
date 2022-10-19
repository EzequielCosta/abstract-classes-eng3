class Presidente extends Funcionario{

      constructor(salario:number){
            super(salario);
      }

      getBonificacao(): number {
            return this._salario + 1000;
      }
}