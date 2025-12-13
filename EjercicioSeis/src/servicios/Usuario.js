import { Carrito } from "./Carrito.js";

export class Usuario extends Carrito{
    constructor(nombre){
        super();
        this.nombre = nombre;
    }
}