import { Producto } from "./Producto.js";

export class ProductoAlimento extends Producto {
  constructor(nombre, precio, categoria, fechaVencimiento){
    super(nombre, precio, categoria);
    this.fechaVencimiento = new Date(fechaVencimiento);
  }
  descripcion(){
    return `${super.descripcion()}, Fecha de vencimiento: ${this.fechaVencimiento}`
  }
  esValido(){
    return (this.fechaVencimiento > new Date()) ? "Ingreso valido" : `${this.descripcion()} No es valido`;
  }
}
