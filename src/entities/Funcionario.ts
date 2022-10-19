abstract class Funcionario {

      protected _salario:number;

      constructor(salario:number){
            this._salario = salario;
      }

      abstract getBonificacao():number;


}