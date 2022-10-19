class Quadrado extends FiguraGeometrica{

      private _lado:number;

      constructor(lado:number){
            super();
            this._lado = lado;
      }

      public calcularArea(): number{
            return this._lado * this._lado;
      };

      public calcularPerimetro() : number{
            return this._lado * 4;
      };

      
}