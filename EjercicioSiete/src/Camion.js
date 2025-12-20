import { Vehiculo } from "./Vehiculo.js";

export class Camion extends Vehiculo{
    constructor(marca, modelo, año, capacidadCarga){
        super(marca, modelo, año)
        this.capacidadCarga = capacidadCarga
    }
    descripcion(){
        return console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Capacidad de carga: ${this.capacidadCarga}`);
    }
}
