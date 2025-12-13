import { Producto } from "../modelos/Producto.js";
import { ProductoAlimento } from "../modelos/ProductoAlimento.js";
import { ProductoElectronico } from "../modelos/ProductoElectronico.js";
import { ProductoRopa } from "../modelos/ProductoRopa.js";

export class  Inventario {
  constructor(productos){
    this.productos = productos;
  }

  listarProductos() {
    this.productos.forEach(p => console.log(p.descripcion()));
  }

  buscarPorCategoria(categoria) {
    return this.productos.filter(p => p.categoria === categoria);
  }

  resumenPorCategoria(){
    return this.productos.reduce((acc, producto) =>{
      const {categoria, nombre, precio} = producto;
      acc[categoria] = acc[categoria] || {productos: [], total: 0};
      acc[categoria].productos.push(nombre);
      acc[categoria].total += precio;
      return acc;
    }, {});
  }
  listarPorGarantia(){
    return this.productos.filter(p => p.garantia > 12);
  }
  listarAlimentosVencidos(){
    return this.productos.filter(p => p.fechaVencimiento < new Date());
  }

  valorTotal(){
    return this.productos.reduce((acc, p) => acc + p.precio, 0);
  }
  validarProductos(){
     this.productos.forEach(p => {
      if(p.categoria == "electronica" || p.categoria == "alimentos" || p.categoria == "ropa"){
        return console.log(p.esValido());
      }
     });
  }
  guardarInventario(){
    const datos = this.productos.map(p => p);
    return JSON.stringify(datos);
  }
}
