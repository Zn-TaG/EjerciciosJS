import { Producto } from "./Producto.js";

export class ProductoElectronico extends Producto {
  constructor(nombre, precio, categoria,garantia){
    super(nombre, precio, categoria);
    this.garantia = garantia;
  }
  descripcion(){
    return `${super.descripcion()}, Garantia: ${this.garantia} meses`
  }
  aplicarDescuento(porcentaje){
    if (porcentaje > 0 && porcentaje < 100) {
      this.precio -= this.precio * (porcentaje / 100);
      return console.log(`Descuento del ${porcentaje}%, ${this.descripcion()}`);
      }
  }
  esValido(){
    return (this.garantia > 0) ? "Ingreso valido" : `${this.descripcion()} No es valido`;
  }
}