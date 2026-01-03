import { Producto } from "./Producto.js";

class Carrito {
    constructor(){
        this.carritoCompra = [];
    }

    agregarProducto(nombre, precio, categoria){
        const {nombre} = new Producto(nombre, precio, categoria);
        return this.carritoCompra.push(nombre);
    }
    removerProducto(nombre){
        this.carritoCompra.pop(nombre);
    }
    mostrarTotal(){
        return this.carritoCompra.reduce((acc , {precio}) => acc + precio, 0);
    }
}