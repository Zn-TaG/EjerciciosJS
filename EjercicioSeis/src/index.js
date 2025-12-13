import { Producto } from "./modelos/Producto.js";
import { ProductoAlimento } from "./modelos/ProductoAlimento.js";
import { ProductoElectronico } from "./modelos/ProductoElectronico.js";
import { ProductoRopa } from "./modelos/ProductoRopa.js";
import { Inventario } from "./servicios/inventario.js";
import { Usuario } from "./servicios/Usuario.js";
import { RepositorioUsuarios } from "./servicios/Repositorio.js";

const inventario = new Inventario([
  new Producto("Teclado", 20, "perifericos"),
  new Producto("Mouse", 15, "perifericos"),
  new Producto("Monitor", 100, "perifericos"),
  new ProductoElectronico("Tablet", 200, "electronica",13),
  new ProductoElectronico("Placa madre", 200, "electronica",12),
  new ProductoAlimento("Manzana", 1, "alimentos", "2026-12-31"),
  new ProductoAlimento("Pera", 1, "alimentos", "2023-12-31"),
  new ProductoRopa("Camisa", 50, "ropa", "M", "Azul"),
  new ProductoRopa("Pantalon", 70, "ropa", "L", "Negro")
]);


// inventario.listarProductos();
const hugo = new Usuario("Hugo");
const repositorio = new RepositorioUsuarios();
const jose = new Usuario("Jose");


hugo.agregarProducto(inventario.productos[0]);
hugo.agregarProducto(inventario.productos[1]);
hugo.agregarProducto(inventario.productos[2]);
hugo.quitarProducto("Teclado");
hugo.calcularTotal();

jose.agregarProducto(inventario.productos[3]);
jose.agregarProducto(inventario.productos[4]);
jose.agregarProducto(inventario.productos[5]);
jose.quitarProducto("Placa madre");
jose.calcularTotal();


console.log(hugo);
repositorio.agregarUsuario(hugo);
repositorio.agregarUsuario(jose);
console.log(repositorio.buscarPorNombre("Jose"));