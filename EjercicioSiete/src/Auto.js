import { Vehiculo } from "./Vehiculo.js";


export class Auto extends Vehiculo{
    constructor(puertas){
        this.puertas = puertas
        super()
    }
    descripcion(){
        return console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Puertas: ${this.puertas}`);
    }
}