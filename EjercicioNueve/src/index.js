import { Carrito } from "./Carrito.js";
import { User } from "./User.js";


const hugo = new User("Hugo", "premium");
const carrito = new Carrito();
carrito.agregarProducto("telefono",2000, "tecnologia");
carrito.agregarProducto("audifinos",1000, "tecnologia");
carrito.agregarProducto("notebook", 5000, "tecnologia");

carrito.carritoDescuento(hugo);

console.log(carrito.mostrarCarrito());
console.log(`precio total: ${carrito.mostrarTotal()}`);

carrito.removerProducto("audifinos");

console.log(carrito.mostrarCarrito());
console.log(`precio total: ${carrito.mostrarTotal()}`);