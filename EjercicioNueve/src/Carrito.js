import { Producto } from "./Producto.js";

export class Carrito {
    constructor(){
        this.carritoCompra = [];
        this.descuento = 10;
    }

    agregarProducto(nombre, precio, categoria){
        const producto = new Producto(nombre, precio, categoria);
        return this.carritoCompra.push(producto);
    }
    removerProducto(nombre){
        this.carritoCompra.pop(nombre);
    }
    carritoDescuento(user){
        if(user.status == "premium"){
            this.carritoCompra.forEach(producto => {
                console.log(`Precio anterior: ${producto.precio}`);
                producto.precio -= (producto.precio * this.descuento) / 100;
                console.log(`Precio con descuento: ${producto.precio}`);
            })
        }
    }
    mostrarTotal(){
        return this.carritoCompra.reduce((acc , {precio}) => acc + precio, 0);
    }
}