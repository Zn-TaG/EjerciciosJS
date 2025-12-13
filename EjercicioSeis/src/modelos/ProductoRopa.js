import { Producto } from "./Producto.js";

export class ProductoRopa extends Producto {
  constructor(nombre, precio, categoria, talla, color){
    super(nombre, precio, categoria);
    this.talla = talla;
    this.color = color;
  }
  descripcion(){
    return `${super.descripcion()}, Talla: ${this.talla}, Color: ${this.color}`
  }
  esValido(){
    return (!this.talla == "" && !this.color == "") ? "Ingreso valido" : `${this.descripcion()} No es valido`;
  }
}