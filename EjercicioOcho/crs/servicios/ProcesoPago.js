export class ProcesadorPago {
  constructor() {
    this.strategy = {};
  }

  registrar(nombre, strategyClass){
    this.strategy[nombre] = strategyClass;
  }
  procesar(nombre, monto) {
    const Strategy = this.strategy[nombre];
    if(!Strategy){throw new Error(`Estrategia ${nombre} no registrada`)};
    const strategy = new Strategy();
    strategy.pagar(monto);
  }
}