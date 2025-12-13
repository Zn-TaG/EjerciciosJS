export class Carrito {
    constructor(){
        this.carritoCompra = [];
        this.precioTotal = 0;
    }

    agregarProducto(producto){
        this.carritoCompra.push(producto)
    }
    
    quitarProducto(nombreProducto){
        this.carritoCompra = this.carritoCompra.filter(element => element.nombre !== nombreProducto);
    }

    calcularTotal(){
        return this.precioTotal = this.carritoCompra.reduce((acc, p) => acc + p.precio, 0);
    }

    vaciarCarrito(){
        this.carritoCompra = [];
    }
}