import { Producto } from "../modelos/Producto.js";
import { ProductoAlimento } from "../modelos/ProductoAlimento.js";
import { ProductoElectronico } from "../modelos/ProductoElectronico.js";
import { ProductoRopa } from "../modelos/ProductoRopa.js";
export function crearProducto(objeto, inventario){
    let nuevoProducto;
      if(!(objeto.garantia === undefined)){
        nuevoProducto = new ProductoElectronico(objeto.nombre, objeto.precio, objeto.categoria, objeto.garantia);
      }
      else if(!(objeto.fechaVencimiento === undefined)){
        nuevoProducto = new ProductoAlimento(objeto.nombre, objeto.precio, objeto.categoria, objeto.fechaVencimiento);
      }
      else if(!(objeto.talla === undefined) && !(objeto.color === undefined)){
        nuevoProducto = new ProductoRopa(objeto.nombre, objeto.precio, objeto.categoria, objeto.talla, objeto.color);
      }
      else{
        nuevoProducto = new Producto(objeto.nombre, objeto.precio, objeto.categoria);
      }

      inventario.productos.push(nuevoProducto);
      console.log(`Producto agregado: ${nuevoProducto.descripcion()}`);
  }