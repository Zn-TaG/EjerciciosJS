export class Producto {
  constructor(nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }

  descripcion() {
    return `Producto: ${this.nombre}, Categoría: ${this.categoria}, Precio: $${this.precio}`;
  }

  aplicarDescuento(porcentaje) {
      return console.log('No se puede aplicar descuento a productos no electrónicos');
  }
}