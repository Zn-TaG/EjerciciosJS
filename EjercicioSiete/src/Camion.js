import { Vehiculo } from "./Vehiculo.js";

export class Camion extends Vehiculo{
    constructor(capacidadCarga){
        this.capacidadCarga = capacidadCarga
        super()
    }
    descripcion(){
        return console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Capacidad de carga: ${this.capacidadCarga}`);
    }
}
