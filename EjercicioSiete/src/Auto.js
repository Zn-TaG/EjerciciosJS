import { Vehiculo } from "./Vehiculo.js";


export class Auto extends Vehiculo{
    constructor(marca, modelo, año, puertas){
        super(marca, modelo, año)
        this.puertas = puertas
    }
    descripcion(){
        return console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Puertas: ${this.puertas}`);
    }
}